import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../MyButton";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  Tooltip,
  tooltipClasses,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import logoheader2 from "../../assets/images/logoheader.png";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useState } from "react";
import { useEffect } from "react";
import AppsIcon from '@mui/icons-material/Apps';
import Aos from "aos";

const drawerWidth = 240;
const ButtonAppBar = (props) => {
  const { styleColor, setIsSideBarOpen, isSideBarOpen } = props
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState("");
  // const [isSideBarOpen,setIsSideBarOpen] = useState(false)

  // const [id,seId] =useState([])
  useEffect(() => {
    Aos.init()
  }, [])
  // const {Titles,setTitles} = useState({
  //   "home":" Go to Home",
  //   "cardList": " open Card list",
  //   "selectCard":"open select card"
  // })
  const [Titles, setTitles] = useState(["HOME", "CardList"]);
  // console.log("title:",Titles.cardList);
  // 'home','cardList','selectCard'

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
      // width: 50, 
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      width: "100%",
      textAlign: "center",
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCardList = () => {
    navigate("/card");
  };
  const ClickToHome = () => {
    console.log("home clicking");
    navigate("/");
    window.location.reload();
  };
  const ClickToSelectCard = () => {
    navigate("/home");
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
      }}

    >
      <Typography
        variant="h4"
        sx={{
          color: "black",
          backgroundColor: "#31996A",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif",
        }}
      >
        ClinicEdge
      </Typography>
      <Divider />
      <List>
        <ListItem sx={{ pt: 5 }}>
          <MyButton
            size="small"
            title="home"
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            // disabled={authState?.currentUser?true:false}
            fullWidth
            // Disabled={true}
            handleClick={ClickToHome}
          />
        </ListItem>
        <ListItem>
          <MyButton
            size="small"
            title="Card list"
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            handleClick={handleCardList}
            fullWidth
          />
        </ListItem>

        <ListItem>
          <MyButton
            size="small"
            title="Select Card"
            variant="contained"
            sx={{
              color: "grey",
              marginRight: "20px",
              backgroundColor: "#31996A",
            }}
            fullWidth
            handleClick={ClickToSelectCard}
          />
        </ListItem>
      </List>
    </Box>
  );

  const handleToggleDrawer = () => {
    setIsSideBarOpen(prev => !prev)
  }
  return (
    <Grid container justifyContent="center" maxHeight="10vh">
      header
    </Grid>
  );
};

export default ButtonAppBar;
