import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('wss://functionup.fintarget.in/ws?id=fintarget-functionup');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  // console.log(messageHistory)

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('wss://functionup.fintarget.in/ws?id=fintarget-functionup'),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      {/* <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button> */}
      {/* <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button> */}
      {/* <span>The WebSocket is currently {connectionStatus}</span> */}
      {/* {lastMessage ? <span> {lastMessage.data}</span> : null} */}
      {/* <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul> */}
      <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"30px"}}>
      <h4><span style={{border:"10px solid blue",  height:"10px"}}></span> Nifty</h4>
      <h4><span style={{border:"10px solid cyan", }}></span> Banknifty</h4>
      <h4><span style={{border:"10px solid purple", }}></span> Finnifty</h4>
      </div>
    </div>
  );
};