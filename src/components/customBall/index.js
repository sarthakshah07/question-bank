import React from 'react'
import { Avatar, Box, IconButton, Tooltip } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const CustomBall = ({ref1}) => {
    console.log("ref1",ref1);
    return (
        <Box sx={{ height: "10vh", width: "10vh", position: "fixed", top: "80%", right: "8%" }}>
            <IconButton onClick={()=>ref1.current?.scrollIntoView({behavior: 'smooth'})}>
                <Tooltip title="Back To Top">
                    <Avatar sx={{ backgroundColor: "lightblue" }}>
                        <KeyboardDoubleArrowUpIcon />
                    </Avatar>
                </Tooltip>
            </IconButton>
        </Box>
    )
}

export default CustomBall
