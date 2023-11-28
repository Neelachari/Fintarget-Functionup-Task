import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const ApexCharts = () => {
 
    const [socketUrl, setSocketUrl] = useState('wss://functionup.fintarget.in/ws?id=fintarget-functionup');
    const [messageHistory, setMessageHistory] = useState([]);
    

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)

    

    useEffect(() => {
        if (lastMessage !== null) {
          setMessageHistory((prev) => prev.concat(readyState));
        }
      }, [lastMessage, setMessageHistory]);

  const generateRandomData = () => {
    const dataPoints = Array.from({ length: 80 }, (_, i) => ({
      x: new Date().getTime() + i * 100,
      y: [
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
      ],
    }));
    return dataPoints;
  };

  const chartData = [
    {
      data: generateRandomData(),
    },
  ];

  const chartOptions = {
    chart: {
      type: 'candlestick',
      height: 10,
    },
    title: {
      text: '',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div id="chart" style={{border:"3px solid gray"}}>
      <ReactApexChart options={chartOptions} series={chartData} type="candlestick" height={450} />
    </div>
  );
};

export default ApexCharts;
