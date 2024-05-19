import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header";
import Footer from "../Footer";
import "./_wrapperComponent.css"
import { Grid, Tooltip } from "@mui/material";
import DashboardSideBar from "../Dashboard_Components/dashboardSidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import { useState } from "react";
import { CommonColors } from "../../utils/colors/colors";

function WrapperComponent(props) {
  const { children, isHeader, isFooter, isBall, ref1, styleColor, } = props;

  const current = new Date();
  const navigate = useNavigate()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [selected, setSelected] = useState()

  const [newData, setNewData] = useState({
    series: [76, 67, 61, 90],
    options: {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }]
    },
  })
  const BackgroundColor = CommonColors.mainThemeColor
  const TommorowDate = `${current.getDate() + 1}/${current.getMonth() + 1
    }/${current.getFullYear()}`;
  const tommorrow = new Date(TommorowDate + 1);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);


  const handleMouseEnter = () => {
    console.log("hover in");
    setIsSideBarOpen(true)
  }
  const handleMouseLeave = () => {
    console.log("hover out");
    setIsSideBarOpen(false)
  }



  return (
    <Grid container sx={{ scrollBehavior: "smooth", padding: 0, margin: 0}} bgcolor={BackgroundColor}   >

      {/* <Box  sx={{fontFamily:"apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif"}} > */}
      {/* {isHeader && <Grid item xs={12} border={1} ><Header styleColor={BackgroundColor} setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} /></Grid>} */}

      <Grid item xs={12} display="flex"  p={0} border={1} >
          {children}
      </Grid>
      <CssBaseline />
    </Grid>
  );
}
export default WrapperComponent;
