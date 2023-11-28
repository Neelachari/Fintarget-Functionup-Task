import React, { useEffect, useState } from 'react';

function Navbar() {
  const [ltpData, setLtpData] = useState({});

  useEffect(() => {
    const socket = new WebSocket('wss://functionup.fintarget.in/ws?id=fintarget-functionup');  // Use the correct URL for the reverse proxy server

    // Handle the WebSocket open event
    socket.onopen = () => {
      console.log('Connected to WebSocket server via reverse proxy');
    };
   
    // Handle incoming WebSocket messages
    socket.onmessage = event => {
      setLtpData(JSON.parse(event.data));
      console.log(ltpData)
    };

    return () => {
      // Close the WebSocket connection when the component unmounts
      socket.close();
    };
  }, []);

  return (
    <div >
     
     {[ltpData]?.map((el)=>{
      return <div  style={{display:"flex", margin:"auto", justifyContent:"space-around", border:"2px solid gray", height:"50px", textAlign:"center"}} >
         <h4>Stock Prices</h4>
          <p > <spam style={{color:"red"}}> Nifty :</spam>{el.Nifty}</p>
          <p > <spam style={{color:"red"}}>Banknifty:</spam>  {el.Banknifty}</p>
          <p > <spam style={{color:"red"}} >Finnifty:</spam>  {el.Finnifty}</p>
      </div>
     })}
    </div>
  );
}

export default Navbar