import { Box } from '@mui/material';
import React, { PureComponent } from 'react';
import { LineChart,ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Months',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'first month',
    uv: 30,
    // pv: 40,
    // amt: 2400,
  },
  {
    name: 'Second month',
    uv: 22,
    // pv: 50,
    // amt: 2210,
  },
  {
    name: 'Third Month',
    uv: 50,
    // pv: 9800,
    // amt: 22,
  },
 
];

const LineCharts =()=> {
  const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    return (
      <Box width="80%"  height={{md:200,xs:300}} display="flex" alignItems="center"  >
      <ResponsiveContainer width="85%" height="60%">
        <ComposedChart
          width={100}
          height="50%"
          data={data}
          // style={{backgroundColor:"red"}}
          
        //   margin={{
        //     top: 5,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }}
        >
          <CartesianGrid strokeDasharray="3 4" style={{backgroundColor:"red"}}  />
          <XAxis dataKey="name" fontSize={10} />
          <YAxis AxisComp={3} fontSize={10} />
          <Tooltip />
          {/* <Legend style={{backgroundColor:"red"}} /> */}
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8}} /> */}
          <Line type="basis" dataKey="uv" stroke="#82ca9d" activeDot={{r:3}} />
          {/* <Line type="basis" dataKey="amt" stroke="#82ca9d" /> */}
        </ComposedChart>
      </ResponsiveContainer>
      </Box>
    );
  
}
export default LineCharts