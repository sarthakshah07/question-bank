import React, { useEffect } from 'react';
import { useState } from 'react';
import {
    LineChart,
    Line,
    Tooltip,
    Legend
  } from "recharts";

const LineChartContainer = ({data}) => {
  // Sample data for the line chart
  const [isDataAccending,setIsDataAccending]= useState(false)

 useEffect(()=>{
  // let sortedData = data.sort() 
  if (data[0].uv>(data[data.length-1].uv)) {
    setIsDataAccending(false)
  } else {
    setIsDataAccending(true)
  }
 },[])
  
  return (
    // <div >
      <LineChart
      width={110}
      height={80}
      margin={0}
      data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5
    //   }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis /> */}
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      {/* <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 3 }}
      /> */}
      <Line type="monotone" dataKey="uv" stroke={isDataAccending ?"green"  :"red"} strokeWidth={3} dot={false} opacity={.5}/>
    </LineChart>
    // </div>
  );
};

export default LineChartContainer;
