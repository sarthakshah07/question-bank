import React, { useEffect, useState } from "react";
import WrapperComponent from "../../components/WrapperComponent";
import { Accordion, AccordionDetails, AccordionSummary, Button, CardMedia, Divider, Grid, useMediaQuery } from "@mui/material";
import { StyledTypography } from "../../utils/services";
import { CommonColors } from "../../utils/colors/colors";
import { useNavigate, useSearchParams } from "react-router-dom";
import { questionBankData } from "../../mockData/questionBankData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowBackOutlined } from "@mui/icons-material";
import Aos from "aos";

const QuesAnswerPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(Object?.fromEntries(searchParams?.entries()));
    const secondarycolor = CommonColors?.secondryColor;
    const [displayData, setDisplayData] = useState([]);
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
        if (search?.id) {
            setDisplayData(questionBankData.find((item) => item.categoryId == search?.id));
            
        }
    },[search?.id]);

    console.log("displayData", displayData);
    return (
        <WrapperComponent>
            <Grid container >
                <Grid item xs={12} pt={2} >
                    <StyledTypography variant="h4" textAlign="center" >
                        Question Bank
                    </StyledTypography>

                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                    <Divider orientation="horizontal" sx={{ backgroundColor: secondarycolor, width: "90%", height: 2 }} data-aos="fade-right" />
                </Grid>
                <Grid item xs={12} mt={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <CardMedia
                        component="img"
                        image={displayData.categoryIcon}
                        alt=""
                        sx={{
                            height: 100,
                            width: 100,
                            margin: "auto",
                            marginTop: 2,
                            objectFit: "contain",
                        }}
                    />
                </Grid>

                <Grid item xs={12} p={2} >
                    <StyledTypography variant="h4" textAlign="center" data-aos="fade-right" >
                        {displayData.categoryName}
                    </StyledTypography>

                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                    <StyledTypography variant="h6" textAlign="center" onClick={() => navigate("/")}
                        sx={{ cursor: "pointer", display: "flex", alignItems: "center", height: "fit-content", mr: 4, color: secondarycolor }}>
                        <ArrowBackOutlined /> {" "} Back
                    </StyledTypography>

                </Grid>
                <Grid item xs={12} p={2}  >
                    {displayData?.questionAnswers?.map((item, index) => {
                        const { questionId, question, answer } = item
                        return (

                            <Accordion
                                key={item.questionId}
                                expanded={expanded === questionId}
                                onChange={handleChange(questionId)}
                                sx={{ backgroundColor: "inherit", border: `1px solid ${expanded === questionId ? secondarycolor : "white"}` }}

                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: expanded === questionId ? secondarycolor : "white" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ color: expanded === questionId ? secondarycolor : "white", borderBottom: `1px solid ${expanded === questionId ? secondarycolor : "white"}` }}
                                >
                                    <StyledTypography variant="h6" textAlign="justify" sx={{ color: expanded === questionId ? secondarycolor : "white" }} >
                                        {question}
                                    </StyledTypography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: secondarycolor }}>
                                    <StyledTypography variant="h6" textAlign="justify" sx={{ backgroundColor: secondarycolor }}>
                                        {answer}
                                    </StyledTypography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}

                </Grid>
            </Grid>
        </WrapperComponent>
    );
};

export default QuesAnswerPage