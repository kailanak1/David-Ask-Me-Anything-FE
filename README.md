## David's Personal Website 

This is a personal website for David. 

[See the live site here](https://david-quora-frontend.firebaseapp.com/).

## Technologies Used
- Javascript
- React
- Redux 

## Installing Locally 
In order to fully use this project, you will need the [backend](https://github.com/kailanak1/David-ask-me-anything).

Clone the project on your local machine by forking and cloning this respository. Copy the SSH link, open your terminal, and type:  

```$ git clone <SSH link>```

After cloning the repository, cd into the folder.  

```$ cd david-quora-frontend```

Run NPM install. 

```$ npm install```

Run NPM start to run the project on your localhost port. 

```$ npm start```

**Note on email functionality**
The email feature after submitting a question will not work right out of the box. If you would like to enable it, go to [emailjs](https://www.emailjs.com/) and create a free account. Replace the keys with your Service ID and Access Token respectively in /components/EmailForm.js. 

```const service_id = "SECRET";```

```const API_KEY = "SECRET";```

## Getting Started
Create a user in your [backend](https://github.com/kailanak1/David-ask-me-any). You can do this in two ways: 

**Option 1:**
Open the backend. From the terminal, navigate to the root directory. Type rails c to open your the Rails console. 

```$ rails c```

In the Rails console, create a new user with username, password, and is_admin attributes. 

```$ User.create(username: "Jean-Luc", password: "Picard", is_admin: true)```

Exit the console.

```$ exit``` 

**Option 2:** 
In the backend, navigate to db/seeds.rb. Create a user in the seed file underneath User.destroy_all. 

```User.create(username: "James", password: "Kirk", is_admin: true)```

In your terminal, run rails db:seed. 

```$ rails db:seed```

After completing either option 1 or option 2, start your rails server again ```rails s``` and go to the localhost port hosting your front end. Go to Login from the navigation bar and enter your credentials. 

## Author 
Kailana Kahawaii

## Acknowledgements 
Kim Kong helped me brainstorm and troubleshoot this project. Check out her [github](https://github.com/nk2303)!


## License 
This project is licensed under the [GNU GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)

    Copyright (C) <2020>  <Kailana Kahawaii>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
