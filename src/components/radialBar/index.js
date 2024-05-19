import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import "../../screens/dashboard/_dashboard.css"
  
  
const RadialBarDialog = () => {
  
// Sample data
const data = [
  {name:'A', x:1,fill:"blue"},
  {name:'B', x:2, fill:"green"},
  {name:'C', x:3, fill:"red"},
  
];
  
  
return (
  <RadialBarChart  height={180} barSize={10}  data={data} className='radialBar'  innerRadius="20%" outerRadius="70%">
    <RadialBar minAngle={15}  dataKey="x" clockWise label  />
  </RadialBarChart>
);
}
  
export default RadialBarDialog;