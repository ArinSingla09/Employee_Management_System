import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container,Grid, LinearProgress, Typography,useMediaQuery } from "@mui/material";
import ProfilePic from "../assets/ProfilePic.png"
import Arrow from "../assets/arrow.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ExpandMore } from "@mui/icons-material";
import {AgGridReact } from 'ag-grid-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import Navbar from "./Navbar";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const Dashboard = () =>{
    const isMobile = useMediaQuery("(max-width:767px)");
    const navigate= useNavigate();

    const [rowData, setRowData] = useState([
        { Earnings: "Basic Wage", Amount: 150000, Deductions: -30000, Total:120000 },
        { Earnings: "Tax", Amount:15000, Deductions: -3000, Total:12000 },
        { Earnings: "Pension", Amount:15000, Deductions: -3000, Total:12000 },
        { Earnings: "Total Earnings", Amount: 150000, Deductions: -36000, Total:114000},
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "Earnings", flex:1}    ,
        { field: "Amount", flex:1},
        { field: "Deductions",flex:1},
        { field: "Total", flex:1}
    ]);

    const toDosSummaries: string[] = [
    "Complete Onboarding Document Upload",
    "Follow up on clients on documents",
    "Design wireframes for LMS",
    "Create case study for next IT project",
    "Follow up on clients on documents"
    ];

    const announceSummaries: string[] = [
    "Complete Onboarding Document Upload",
    "Follow up on clients on documents",
    "Design wireframes for LMS",
    "Create case study for next IT project",
    ];

    return (
        <>
            <Navbar />
            <Box className="py-10">
                <Container>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid container direction={"column"} spacing={1}>
                            <Typography>Dashboard</Typography>
                            <Box className="bg-[#193288] relative py-8 pl-3 sm:pl-8 flex justify-between items-center">
                                <Box className="flex gap-2 sm:gap-5">
                                    <Box className="rounded-full p-1 border-2 border-white"><Box component="img" src={ProfilePic} className="w-12 md:w-17 rounded-4xl bg-[#FFC20E]" /></Box>
                                    <Box className="flex-col justify-around flex">
                                        <Typography className="text-white !text-md sm:!text-lg md:!text-2xl">Redwan husein</Typography>
                                        <Typography className="text-white !text-[0.6rem] sm:!text-sm md:!text-md">UI / UX Designer & UX Writer</Typography>
                                    </Box>
                                </Box>
                                <Button variant="contained" onClick={()=>navigate('/dashboard/update-profile')} className="!bg-[#FFC20E] relative !text-[0.55rem] sm:!text-[1rem] !w-26 sm:!w-auto right-2 sm:right-25 md:right-35 !text-black !mt-3">Edit Profile</Button>
                                <Box component="img" src={Arrow} className="w-25 md:w-35 absolute right-0 p-0 hidden sm:inline" />
                            </Box>
                        </Grid>
                        <Grid container direction="column" spacing={1}>
                            <Typography>Ouick Access</Typography>
                            <Grid container>
                                <Grid size={{xs:4,md:2}}>
                                    <Button variant="contained" onClick={()=>navigate('/dashboard/leave')} className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                                        Apply for Leave
                                    </Button>
                                </Grid>
                                <Grid size={{xs:4,md:2}}>
                                    <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                                        KPI goals
                                    </Button>
                                </Grid>
                                <Grid size={{xs:4,md:2}}>
                                    <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                                        Take Appraisal
                                    </Button>
                                </Grid>
                                <Grid size={{xs:4,md:2}}>
                                    <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                                        View Payslip
                                    </Button>
                                </Grid>
                                <Grid size={{xs:4,md:2}}>
                                    <Button variant="contained" onClick={()=>navigate('/dashboard/update-profile')} className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                                        Update Profile
                                    </Button>
                                </Grid>
                                <Grid size={{xs:4,md:2}}>
                                    <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                                        Events
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={4} columnSpacing={3}>
                            <Grid container direction="column" size={isMobile?12:6} className="p-3 !bg-white" spacing={2}>
                                <Grid className="flex justify-between">
                                    <Typography className="!text-2xl !text-[#545559]">Available Leave Days</Typography>
                                    <MoreVertIcon className="!h-[100%]"/>
                                </Grid>
                                <Grid container direction="column" className="p-2">
                                    <Box className="flex justify-between">
                                        <Typography className="!text-xs !text-[#545559]">Annual Leave</Typography>
                                        <Typography className="!text-xs !text-[#545559]">10 of 60 day(s)</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate"value={(10 / 60) * 100}sx={{height: 20,'& .MuiLinearProgress-bar': {backgroundColor: '#253D90',},backgroundColor: '#e0e0e0'}}/>
                                </Grid>
                                <Grid container direction="column" className="p-2">
                                    <Box className="flex justify-between">
                                        <Typography className="!text-xs !text-[#545559]">Sick Leave</Typography>
                                        <Typography className="!text-xs !text-[#545559]">0 of 10 day(s)</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate"value={(0 / 10) * 100}sx={{height: 20,'& .MuiLinearProgress-bar': {backgroundColor: '#253D90',},backgroundColor: '#e0e0e0'}}/>
                                </Grid>
                                <Grid container direction="column" className="p-2">
                                    <Box className="flex justify-between">
                                        <Typography className="!text-xs !text-[#545559]">Compassionate Leave</Typography>
                                        <Typography className="!text-xs !text-[#545559]">8 of 15 day(s)</Typography>
                                    </Box>
                                    <LinearProgress variant="determinate"value={(8 / 15) * 100}sx={{height: 20,'& .MuiLinearProgress-bar': {backgroundColor: '#253D90',},backgroundColor: '#e0e0e0'}}/>
                                </Grid>
                            </Grid>
                            <Grid container direction="column" spacing={2} size={isMobile?12:6} className="p-3 !bg-white">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-2xl  !text-[#545559]">To-dos</Typography>
                                    <MoreVertIcon />
                                </Grid>
                                <Box className="max-h-60 overflow-y-auto space-y-2">
                                    {toDosSummaries.map((summary, i) => (
                                        <Accordion key={i} className="!bg-[#E3EDF9] !rounded-xl !text-sm  !text-[#545559]">
                                        <AccordionSummary expandIcon={<ExpandMore />}>
                                            {summary}
                                        </AccordionSummary>
                                        <AccordionDetails className=" !text-[#545559]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut veniam numquam excepturi adipisci reprehenderit totam laudantium tempore earum minima quos, sint dolore quia a fugit dolorum provident vero fugiat repellat!
                                        </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Box>

                            </Grid>
                            <Grid container direction="column" spacing={2} size={isMobile?12:6} className="p-3 !bg-white">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-2xl  !text-[#545559]">Announcement(s)</Typography>
                                    <MoreVertIcon />
                                </Grid>
                                <Box className="max-h-60 overflow-y-auto space-y-2 scrollbar-hide">
                                    {announceSummaries.map((summary, i) => (
                                        <Accordion key={i} className="!bg-[#E3EDF9] !rounded-xl !text-sm  !text-[#545559]">
                                        <AccordionSummary expandIcon={<ExpandMore />}>
                                            {summary}
                                        </AccordionSummary>
                                        <AccordionDetails className=" !text-[#545559]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut veniam numquam excepturi adipisci reprehenderit totam laudantium tempore earum minima quos, sint dolore quia a fugit dolorum provident vero fugiat repellat!
                                        </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Box>

                            </Grid>
                            <Grid container direction="column" spacing={2} size={isMobile?12:6} className="p-3 !bg-white">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-2xl  !text-[#545559]">April Pay slip breakdown</Typography>
                                    <MoreVertIcon />
                                </Grid>
                                <Grid className="h-55">
                                    <AgGridReact rowData={rowData} columnDefs={colDefs}/>
                                </Grid>
                            </Grid>
                            <Grid size={isMobile?12:6} className="p-3 !bg-white">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-2xl  !text-[#545559]">Birthdays</Typography>
                                    <MoreVertIcon />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Dashboard;