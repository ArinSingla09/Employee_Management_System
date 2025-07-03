import { Box, Breadcrumbs, Card, Container, Grid,Typography,Button } from "@mui/material";
import Navbar from "./Navbar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Data from "./Data";
import { useNavigate } from "react-router-dom";

const Leave = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box className="py-10">
            <Container>
                <Grid container direction={"column"} spacing={2}>
                    <Box className="bg-white p-4 shadow-md">
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                            <Link to="/dashboard" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                Dashboard
                            </Link>
                            <Link to="/dashboard/leave" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                Apply for Leave
                            </Link>
                        </Breadcrumbs>
                    </Box>
                    <Grid container className="bg-white p-5 shadow-md" spacing={4}>
                        <Grid container size={12} spacing={2} alignItems="center">
                            <ImportContactsIcon className="!color-black" />
                            <Typography className="!text-xl">Leave Application</Typography>
                        </Grid>
                        <Grid container spacing={3} size={12}>
                            <Grid size={4}>
                                <Card className="p-4 !bg-[#253D90] flex items-center justify-between">
                                    <Grid className="!rounded-full p-10 flex items-center justify-center !text-4xl !text-[#253D90] !bg-[#FFFFFF]" size={5}>
                                        60 
                                    </Grid>
                                    <Grid size={7} className="flex flex-col items-center gap-3">
                                        <Typography className="!text-lg !text-white">Annual Leave</Typography>
                                        <Button variant="contained" onClick={()=>navigate("/dashboard/leave/annual")} className="w-full !rounded-full !bg-[#FFC20E] !text-black">Apply</Button>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid size={4}>
                                <Card className="p-4 !bg-[#253D90] flex items-center justify-between">
                                    <Grid className="!rounded-full p-10 flex items-center justify-center !text-4xl !text-[#253D90] !bg-[#FFFFFF]" size={5}>
                                        20
                                    </Grid>
                                    <Grid size={7} className="flex flex-col items-center gap-3">
                                        <Typography className="!text-lg !text-white">Sick Leave</Typography>
                                        <Button variant="contained" onClick={()=>navigate("/dashboard/leave/sick")} className="w-full !rounded-full !bg-[#FFC20E] !text-black">Apply</Button>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid size={4}>
                                <Card className="p-4 !bg-[#253D90] flex items-center justify-between">
                                    <Grid className="!rounded-full p-10 flex items-center justify-center !text-4xl !text-[#253D90] !bg-[#FFFFFF]" size={5}>
                                        60
                                    </Grid>
                                    <Grid size={7} className="flex flex-col items-center gap-3">
                                        <Typography className="!text-lg !text-white">Maternity Leave</Typography>
                                        <Button variant="contained" className="w-full !rounded-full !bg-[#FFC20E] !text-black">Apply</Button>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Data />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </>
    );
}

export default Leave;