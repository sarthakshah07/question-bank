import React, { useEffect, useState } from "react";
import "./_landingPage.css";
import WrapperComponent from "../../components/WrapperComponent";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import AboutUs from "../../components/aboutus";
import MyButton from "../../components/MyButton";
import FAQS from "../../components/FAQS";
import { StyledTypography } from "../../utils/services";
import FieldText from "../../components/fieldtext";
import { CommonColors } from "../../utils/colors/colors";
import { color } from "framer-motion";
import { questionBankData } from "../../mockData/questionBankData";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CommonToast from "../../components/CommontToast";


const secondarycolor = CommonColors.secondryColor;
const whiteColor = CommonColors.commonTextColor;
const LandingPage = () => {
  const handleDelete = () => { };

  //changes
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const current = new Date();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:900px)');
  const TommorowDate = `${current.getDate() + 1}/${current.getMonth() + 1
    }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <WrapperComponent isHeader isBall ref1>
      <Grid container width="100%" zIndex={999}>
        <Grid item xs={12} p={2} >
          <StyledTypography variant="h4" textAlign="center" >
            Question Bank
          </StyledTypography>

        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent="center">
          <Divider orientation="horizontal" sx={{ backgroundColor: secondarycolor, width: "90%" }} data-aos="fade-up" />
        </Grid>
        <Grid item mt={2} >
          <StyledTypography
            variant="h6"
            textAlign="center"
            p={4}
          // textTransform="full-width"
          >
            comprehensive digital resource that offers a vast collection of
            questions across various subjects and levels. It is designed to help
            users practice, learn, and master different topics through a
            structured and engaging approach
          </StyledTypography>
        </Grid>
        <Grid item xs={12} px={4} >
          <Grid container display={"flex"} justifyContent="space-between" alignItems={"center"} >
            <Grid item xs={12} md={6} >
              <StyledTypography variant="h6" textAlign="justify">
                Categories
              </StyledTypography>
            </Grid>
            {/* <Grid item xs={12} md={6}  display={"flex"} justifyContent={"flex-end"}>
              <FieldText
                label={<Typography sx={{ color: whiteColor }} >Search</Typography>}
                
                sx={{
                  color: whiteColor,
                  borderRadius: 2,
                  Padding:0,
                  
                  // backgroundColor: "#fff",
                lineHeight1: .7,
                  border: 1,
                  borderColor: whiteColor,
                  '& .MuiInputBase-input': {
                    color: whiteColor,
                    
                  },
                  '& .MuiInputLabel-root': {
                    color: whiteColor,
                  },
                }}
                InputProps={{ 
                  onFocus: (e) => {
                  e.target.style.backgroundColor = 'green';
                  e.target.style.border= '1px solid green';
                  e.target.color="white";

                },
                onBlur: (e) => {
                  e.target.style.borderColor = '';
                }, sx: { color: whiteColor } }}
                variant="outlined"
                className="input-landing"
                name="search"
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value) }}
                size="small"
              />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={12} px={isMobile ? 1 : 4} >
          {isLoading ? 
          <Grid container justifyContent="center" alignItems="center"  > <CircularProgress /> </Grid> : (
          <Grid container >
            {questionBankData.map((item, index) => {
              const { categoryIcon, categoryName, disabled,categoryId } = item
              return (
                <Grid item xs={6} md={3} p={2} key={categoryId} >
                  <Card
                  data-aos={index>3 ? "none" : "fade-right"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration={1000+index*100}
                  data-aos-delay={index*100}
                  onClick={() => {
                    if (disabled) {
                      CommonToast({ severity: "error", message: `${categoryName} is Coming Soon` });
                    }else{
                      navigate(`/category/${categoryName}?id=${categoryId}`);
                    }
                  }}
                    sx={{
                      border: 1,
                      borderColor: "green",
                      backgroundColor: "inherit",
                      position: "relative",
                      borderRadius: 2,
                      height: "100%",
                      cursor: "pointer",
                      boxShadow: `10px 10px 15px 0px ${secondarycolor}`,
                      '&:hover': {
                        borderColor: whiteColor,
                        boxShadow: `10px 10px 40px 0px ${whiteColor}`,
                        // backgroundColor: secondarycolor,
                        color: "black",
                      },
                    }}
                  >
                    {disabled &&
                      <Paper sx={{ height: "100%", width: "100%", cursor: "not-allowed", position: "absolute", opacity: .5 }} />
                    }
                    <CardMedia
                      component="img"
                      image={categoryIcon}
                      alt=""
                      sx={{
                        height: isMobile ? 50 : 100,
                        width: isMobile ? 50 : 100,
                        margin: "auto",
                        marginTop: 2,
                        objectFit: "contain",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: whiteColor }}
                        textAlign={"center"}
                      >
                        {categoryName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
          )}
        </Grid>
      </Grid>
    </WrapperComponent>
  );
};

export default LandingPage;

