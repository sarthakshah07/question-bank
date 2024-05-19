// Filename - App.js

import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";
import {OrderData} from "../../../mock-data/ordersDataCharts"
import { useMediaQuery, useTheme } from "@mui/material";
const CommonAreaChart = ({data}) => {
	// Sample data
const theme = useTheme()
const isSmallMobile = useMediaQuery('(max-width:600px)');
const isMobile = useMediaQuery('(max-width:800px)');
const isTablet = useMediaQuery('(max-width:1200px)');
const isSmalLaptop = useMediaQuery('(max-width:2500px)');
console.log("thenme",theme);
	return (
		<AreaChart width={ isSmallMobile? 300 : isMobile ? 650 : isTablet ? 700: isSmalLaptop? 610 :610} height={160} data={OrderData} >
			{/* <CartesianGrid /> */}
			<XAxis dataKey="name"  height={20}/>
			<YAxis  width={25}/>
			<Tooltip />
			<Area
				dataKey="x"
				stackId="1"
				stroke={theme.palette.primary.main}
				fill={theme.palette.primary.main}
                type="monotone"
			/>
			{/* <Area
				dataKey="y"
				stackId="1"
				stroke="blue"
				fill="blue"
			/> */}
		</AreaChart>
	);
};

export default CommonAreaChart;
