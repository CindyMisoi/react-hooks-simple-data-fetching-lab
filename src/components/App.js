import React, { useEffect, useState } from 'react'

function App() {
    const [image, setImage]= useState(null)
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImage(data.message))
    },[]);

    if(!image){
        return <p>Loading...</p>
    }
    else{
        
    }
    return (
        <div className='App'>
           <img src={image} alt="A Random Dog"/>
        </div> 
    )
}

export default App

