import { Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

 export const AppNavigate =(str)=>{
    const navigate = useNavigate();
    navigate(str)
 } 

 export const StyledTypography = styled(Typography)(({ theme }) => ({
   color: "white",
 }));





