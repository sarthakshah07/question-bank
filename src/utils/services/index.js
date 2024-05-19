import { Typography, styled, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

 export const AppNavigate =(str)=>{
    const navigate = useNavigate();
    navigate(str)
 } 

 export const StyledTypography = styled(Typography)(({ theme }) => ({
   color: "white",
 }));



export const IsMobile = () => {
   return useMediaQuery('(max-width:900px)');
}

