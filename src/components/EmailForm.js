import React, {useState} from 'react';


const EmailForm = ({coin}) => {


	const [email, setEmail] = useState('')
	const [error, setError] = useState(false)
	const [confirmation, setConfirmation] = useState(false)

	const handleEmailChange = e => {
		setEmail(e.target.value)
	}



  const handleSubmit = (event) => {
	  event.preventDefault()
	 if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		setError(true)
	  } else {
		const templateId = "david_personal_site";
		const template_params = {
			"email": email,
			"coin": coin
	 	}
		const service_id = "SECRET";
	 	const API_KEY = "SECRET"; 
		sendCoin(service_id, templateId, template_params, API_KEY)
	  }
  }


  const sendCoin = (service_id, templateId, template_params, API_KEY) => {
	window.emailjs.send(
  	service_id, templateId,
  	template_params, API_KEY
  	).then(res => {
		setConfirmation(true)
		setError(false)
  	})
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }




  return (
	  <form onSubmit ={handleSubmit}>
		  Email this code to me:
		  <input placeholder="enter your email" value={email} onChange={handleEmailChange}></input>
		  <input type="submit"></input>
		  {!!error ? <p style={{color:"red"}}>Please enter a valid email address.</p> : null}
		  {!!confirmation ? <p style={{color:"green"}}>Your email was sent!</p> : null}
	  </form>
  )
}

export default EmailForm