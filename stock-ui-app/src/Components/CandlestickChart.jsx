import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const CandlestickChart = () => {
  const [instrument, setInstrument] = useState('AAPL');
  const [timeframe, setTimeframe] = useState('1');
  const [chartData, setChartData] = useState({});
  const [ltpData, setLtpData] = useState({});
  const [mydata,setmydata]=useState([])

  const socket = new WebSocket('wss://functionup.fintarget.in/ws?id=fintarget-functionup');

  useEffect(()=>{
    socket.onmessage = event => {
        setLtpData(JSON.parse(event.data));
        const processedData = processData(event.data);
        // setChartData(processedData)
        setmydata((pre)=> [...pre,event.data])
        
      };
  },[mydata])

  useEffect(() => {
    // Fetch candlestick data based on the selected instrument and timeframe
    // Replace this with your actual data fetching logic
   
    // const fetchData = async () => {
    //   // Mock data for demonstration purposes
    //   const response = await fetch('https://api.example.com/candlestick-data');
    //   const data = await response.json();

    //   // Process data and update chartData state
    //   const processedData = processData(data);
    //   setChartData(processedData);
    // };

    // fetchData();

    socket.onopen = () => {
        console.log('Connected to WebSocket server via reverse proxy');
      };
     
      // Handle incoming WebSocket messages
     
      console.log(mydata)
    //   console.log(ltpData)
      return () => {
        // Close the WebSocket connection when the component unmounts
        socket.close();
        
      };




  }, [instrument, timeframe]);

  const processData = (data) => {
    // Process and format your data here
    // Example format for candlestick chart data
    console.log(data)
    return {
      labels: [data]?.map(item => item.Nefty),
      
      datasets: [
        {
          type: 'candlestick',
          label: 'Candlestick Chart',
          data: [data]?.map(item => ({
            // t: item.timestamp,
            // o: item.open,
            h: item.Nefty,
            l: item.Banknifty,
            c: item.Finnifty
          })),
          backgroundColor: '#00FF00', // Green for bullish candles
          borderColor: '#008000',
        },
      ],
    };
  };




  return (
    <div>
      <h1>Candlestick Chart</h1>
      <label htmlFor="instrument">Instrument:</label>
      <select
        id="instrument"
        value={instrument}
        onChange={(e) => setInstrument(e.target.value)}
      >
        <option value="AAPL">AAPL</option>
        {/* Add other instrument options as needed */}
      </select>

      <label htmlFor="timeframe">Timeframe:</label>
      <select
        id="timeframe"
        value={timeframe}
        onChange={(e) => setTimeframe(e.target.value)}
      >
        <option value="1">1 Minute</option>
        <option value="3">3 Minutes</option>
        <option value="5">5 Minutes</option>
      </select>

      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CandlestickChart;


// CandlestickChart.js
// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';

// const CandlestickChart = ({ data, timeInterval }) => {
//   const [chartData, setChartData] = useState([]);
//   const [ltpData, setLtpData] = useState({});

//   useEffect(() => {
//     // Update state and local storage with new data
//     const socket = new WebSocket('wss://functionup.fintarget.in/ws?id=fintarget-functionup');  // Use the correct URL for the reverse proxy server

//     // Handle the WebSocket open event
//     socket.onopen = () => {
//       console.log('Connected to WebSocket server via reverse proxy');
//     };
   
//     // Handle incoming WebSocket messages
//     socket.onmessage = event => {
//       setLtpData(JSON.parse(event.data));
//       // console.log(ltpData)
//     };

//     return () => {
//       // Close the WebSocket connection when the component unmounts
//       socket.close();
//     };

//     setLtpData(data);
  
//     // Save data to local storage
//     localStorage.setItem('candlestickData', JSON.stringify(data));
//   }, [data]);


//   useEffect(() => {
//     // Logic to transform data and update chartData state
//     // Use 'data' and 'timeInterval' to filter and format data for the chart

//     // Example: (this is a simplified example, you may need to adapt based on your data structure)
//     const formattedData = data.map((entry) => {
//       return {
//         x: entry.timestamp, // Use timestamp or any suitable field
//         open: entry.open,
//         close: entry.close,
//         high: entry.high,
//         low: entry.low,
//       };
//     });

//     setChartData(formattedData);
//   }, [data, timeInterval]);

//   const options = {
//     // Customize chart options as needed
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         // type: 'time',
//         // time: {
//         //   unit: 'minute', // Set time unit based on the selected time interval
//         // },
//       },
//       // Add other customizations as needed
//     },
//   };

//   return <Line data={{ datasets: [{ data: chartData }] }} options={options} />;
// };

// export default CandlestickChart;

