import React from 'react'

export const Socket = () => {
  return (
    <div>
       
    </div>
  )
}



//   processData() 


// const processData = (data) => {
//     // Ensure data is defined and has the expected structure
//     if (!data || !data.timestamp || !data.open || !data.high || !data.low || !data.close) {
//       console.error(data);
//       return chartData; // Return the current chartData to avoid breaking the rendering
//     }

//     const newData = {
//       labels: [data.timestamp], // Assuming timestamp is a string
//       datasets: [
//         {
//           type: 'candlestick',
//           label: 'Candlestick Chart',
//           data: [
//             {
//               t: data.timestamp,
//               o: data.open,
//               h: data.high,
//               l: data.low,
//               c: data.close,
//             },
//           ],
//           backgroundColor: '#00FF00', // Green for bullish candles
//           borderColor: '#008000',
//         },
//       ],
//     };

//     return newData;
//   };