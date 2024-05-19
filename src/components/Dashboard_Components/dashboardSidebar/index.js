import React, { useEffect } from 'react'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
// import RadialBarChart from "../../components/radialBar";
import { Box, Divider, Grid, ListItem, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "../../WrapperComponent/_wrapperComponent.css"
import { CommonColors } from '../../../utils/colors/colors';


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  zIndex: 1,
  showConfirmButton: false,
  timer: 8000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});


const DashboardSideBar = (props) => {
  // const {setSelected } = props
  const { setIsSideBarOpen, isSideBarOpen } = props
  const [selected, setSelected] = useState(window.location.pathname.slice(1))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width:600px)')



  const handleMouseEnter = () => {
    console.log("hover in");
    setIsSideBarOpen(true)
  }
  const handleMouseLeave = () => {
    console.log("hover out");
    setIsSideBarOpen(false)
  }


  const sideBarList = [
    {
      id: 1,
      title: "Dashboard",
      path: "",
      icon: <DashboardIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
    {
      id: 2,
      title: "Patient Record",
      path: "user/patientRecord",
      icon: <PostAddIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
    {
      id: 3,
      title: "Expenses",
      path: "user/expenses",
      icon: <LocalGroceryStoreIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
    {
      id: 4,
      title: "Appointments",
      path: "user/appointments",
      icon: <AttachMoneyIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
    {
      id: 5,
      title: "Stock Manager",
      path: "user/stockManager",
      icon: <BookOnlineIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
    {
      id: 6,
      title: "To-do",
      path: "user/todo",
      icon: <FormatListNumberedIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
    {
      id: 7,
      title: "Study Material",
      path: "user/ studyMaterial",
      icon: <MenuBookIcon sx={{ height:"25px",width:"20px" }} className="icon" />
    },
  ]
  useEffect(()=>{
    setIsSideBarOpen(true)
    setTimeout(() => {
      setIsSideBarOpen(false)
    }, 2500);
  },[window.location.pathname])
  return (
    <>
      <Box sx={{ width: isSideBarOpen ? "55vh" : ".5%", border:1,
      translate: isSideBarOpen ? 0 : -10, transition: "all .8s ease-in-out",
       display: "flex", alignItems: "center", position:isMobile?"fixed":"sticky",  zIndex: 999,
       }}
       bgcolor={isMobile && "whitesmoke"} 
        onMouseEnter={!isMobile && handleMouseEnter} onMouseLeave={!isMobile && handleMouseLeave}
      >
        <Stack whiteSpace="pre-wrap" spacing={2} mt={2} height="100%" width="100%" zIndex={99}>
          {sideBarList?.map((item, index) => <>
            <ListItem
              key={item.id}
              
              sx={{p:0,wordWrap:"break-word",whiteSpace:"nowrap", boxShadow:0}}
              className={selected === item.path ? "listitem active" : "listitem"}
              onClick={(e) => {
                navigate(`/${item.path}`)
              }}
              
            // sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid container  justifyContent="space-between" width="100%">
                <Grid item xs={2}>
                  {item.icon}
                </Grid>
                <Grid item xs={10} >
                  <Typography variant='body1' fontSize={15} sx={{ wordWrap: "break-word" }}>{item.title}</Typography>
                </Grid>
              </Grid>
            </ListItem>
          </>)}
        
          {isMobile &&
            <>
              <Divider sx={{ width: "80%", alignSelf: "center", border: ".5 solid grey" }} />
              <ListItem
                 sx={{p:0,wordWrap:"break-word",whiteSpace:"nowrap", boxShadow:0}}
                 className={selected === "Userinfo "  ? "listitem active" : "listitem"}
                onClick={() => navigate("/Userinfo")}
              >
                <AccountCircleIcon sx={{ height:"25px",width:"20px" }}  className="icon1" />
                <Typography  variant='body1' fontSize={15} sx={{ wordWrap: "break-word" }}>Account Info</Typography>
              </ListItem>
              <ListItem
                sx={{p:0,wordWrap:"break-word",whiteSpace:"nowrap", boxShadow:0}}
                className="listitem"
              >
                <LogoutIcon sx={{ height:"25px",width:"20px" }}  className="icon1" />
                <Typography  variant='body1' fontSize={15} sx={{ wordWrap: "break-word" }}>Logout</Typography>
              </ListItem>
            </>}
        </Stack>
        {/* <Stack display={{ xs: "flex", md: "none" }} justifyContent="center" alignItems="center" marginTop={6}>
         
        </Stack> */}
        <Box height="99%" display={isMobile ? "none" : "flex"} alignItems="center" sx={{ backgroundColor:CommonColors.secondryColor, borderRadius: "0px 20px 20px 0px" }}

        >
          <Tooltip title="Expand Menu" >
            <NavigateNextIcon sx={{
              cursor: "pointer", scale: "1", fontWeight: "300px", transition: "all 1s ease-in-out",
              transform: isSideBarOpen ? "rotateY(180deg)" : ""
            }} />
          </Tooltip>
        </Box>
      </Box>
    </>
  )
}

export default DashboardSideBar
