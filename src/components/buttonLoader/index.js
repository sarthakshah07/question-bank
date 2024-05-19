import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { lemSelector } from "../../redux/lem/lemSlice"
import {HashLoader} from "react-spinners"
import {Dna,BallTriangle,InfinitySpin} from "react-loader-spinner"

const ButtonLoader = ( {background}) => {
  const lemData = useSelector(lemSelector);
  const { loading, buttonLoading} = lemData;

  if (buttonLoading) {
    return (
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     //   height: "100vh",
    //       width:"100%",
    //     //   backgroundColor:"white",
    //     //   position:"fixed",
    //       zIndex:1
    //     }}
    //   >
        // {/* <CircularProgress size={100} color="error" /> */}
        <HashLoader color="#31996A"  size={20}/>
    //   </Box>
    );
  }
  return null;
};

export default ButtonLoader;
