
import React from 'react'
import { Avatar, Badge, Box, Card, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography, useTheme } from '@mui/material'
import logo from "../../assets/Images/logo.png"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InventoryIcon from '@mui/icons-material/Inventory';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./_categoryHeader.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryHeader = (mobileOpen) => {
  const [value, setValue] = React.useState(window.location.pathname.split("/")[1]);
  const theme = useTheme()
  const navigate = useNavigate()
  console.log("window.location.pathname", window.location.pathname.split("/")[1]);
  const handleChange = (newValue) => {
    console.log("new value",newValue);
    setValue(newValue);
    navigate("/owner/orders")
  };
  
  const categoryList = [
    {
      id: 1,
      label: <><span style={{color:value==="dashboard"?theme.palette.primary.main: "white"}}>Dashbord</span></>,
      // label:"new dhashboard",
      value: "dashboard",
      icon: <><DashboardCustomizeIcon  sx={{color: value==="dashboard" && theme.palette.primary.main}}/></>
    },
    {
      id: 2,
      // label: <><span style={{color:value==="orderList"?"":  "white"}}>Order List</span></>,
      label:"Order List",
      value: "orderList",
      icon: <><ShoppingCartIcon sx={{color: value==="orderList" && theme.palette.primary.main}} /></>
    },
    {
      id: 3,
      // label:  <><span style={{color:value==="orderHistory"?"":  "white"}}>History</span></>,
      label:"History",
      value: "orderHistory",
      icon: <><ManageSearchIcon sx={{color: value==="orderHistory" && theme.palette.primary.main}}/></>
    },
    {
      id: 4,
      // label: <><span style={{color:value==="stocks"?"":  "white"}}>Stocks </span></>,
      label:"Stocks",
      value: "stocks",
      icon: <><InventoryIcon sx={{color: value==="stocks" && theme.palette.primary.main}}/></>
    },
    {
      id: 5,
      // label: <><span style={{color:value==="notification"?"":  "white"}}>Notification</span></>,
      label:"Notification",
      value: "notification",
      icon: <> 
      <Badge badgeContent={4}  color="error" sx={{marginRight:"10px"}}>
        {/* <Avatar sx={{ backgroundColor: "white" }}> */}
          <NotificationsActiveIcon sx={{color: value==="notifivation" && theme.palette.primary.main}} />
        {/* </Avatar> */}
      </Badge></>
    },
  ]
  return (
    <Card sx={{ backgroundColor:theme.palette.primary.main,height:mobileOpen? {xs:"100%",md:"90%"}: "70%", 
    width:mobileOpen? {xs:"100%",md:"90%"}:"90%", borderRadius: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}>
        <img src={logo} alt='' style={{ height: "15vh", width: "60%" }} />
      </Box>
      <Typography variant='h6' textAlign={"center"} fontFamily={"cursive"} fontWeight={"bolder"}
        color={"whitesmoke"}>CafeOs</Typography>
      <Divider sx={{ mt: 2 }} />

      <List >
      {categoryList?.map((item, index) => (
        <ListItem
        className='item'
          sx={{display:"flex",justifyContent:"center",p:1,color:(item.value===value) ? theme.palette.primary.main:"white ",backgroundColor:(item.value===value)&& "white",border:0,
          '&:hover':{transition:"all .8s ease-in",
          cursor:"pointer",
          boxShadow:" inset 400px 0px 0px 0px whitesmoke",
          color:theme.palette.primary.main}
        }}
            key={item.id}
            // value={item.value}
            onClick={()=>handleChange(item.value)}
          >
             <ListItemIcon className='listIcon' style={{color:(item.value===value)&& theme.palette.primary.main+"!important"}}>
                {item.icon}
              </ListItemIcon>
           <ListItemText primary={item.label} /></ListItem>
        ))}
      </List>
      {/* <Tabs
        value={value}
        orientation='vertical'
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        TabIndicatorProps={{style:{backgroundColor:theme.palette.primary.light,width:"8px"}}}
      >
        {categoryList?.map((item, index) => (
        <Tab
          sx={{display:"flex",justifyContent:"space-evenly", border:1}}
          className='tabsItem'
            key={item.id}
            // sx={{border:1}}
            icon={item.icon}
            iconPosition='start'
            value={item.value}
            label={item.label}
            
            wrapped
          />
        ))}
      </Tabs> */}
    </Card>
  )
}

export default CategoryHeader
