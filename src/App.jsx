import { useState,useEffect, useRef } from "react"
import { ContainerTweet } from "./components/ContainerTweet/ContainerTweet"
import { Tweet } from "./components/Tweet/Tweet";
let tweets = [];

function App() {

  // 1. Crear referencia del textArea
  const TA = useRef();
  // 2. crear una variable de estado que será la que publicará el tweet
  
  //3. Crear la función que envíe los tweets
  const handleSendTweet = () => {        
    setTw(TA.current.value)
    TA.current.value = '';
    
  }

  return (
    <div className="App">
      <h1>Generador de Tweets</h1>
      <ContainerTweet contain = {
        <Tweet
          eventTweet = {}
          refTextArea = {}
          eventArea = {}
          eventFile = {}
          eventList = {}
          eventMessage = {} 
          counter = {}
          styleCounter = {} 
        />}
      />
      <h3>Aquí se verán tus tweets archivados</h3>
      <ul>
        {
          
        }
      </ul>
      <button className="btn-clear" onClick={()=> {}}>Clear</button>
    </div>
  )
}

export default App
