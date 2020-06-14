import React, { useEffect, useState } from 'react';


const WineList = () => {

    const list = () => {
        return(
            <div>
                <li>Montes Alpha</li>
                <li>GSMs</li>
                <li>Monesai</li>
            </div>
        )
    }


    return(
        <div>{list}</div>
        
    )
}

export default WineList