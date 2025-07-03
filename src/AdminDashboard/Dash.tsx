import {  Typography,Grid,Card, Box, Container,useMediaQuery, IconButton , CircularProgress} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Access from "../assets/Access.png";
import GridLogo from "../assets/GridLogo.png";
import Tpay from "../assets/Tpay.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import Aman from "../assets/Aman.png"
import Gelila from "../assets/Gelila.png"
import Biruk from "../assets/Biruk.png"

const Dash =() =>{

    const isMobile = useMediaQuery("(max-width:767px)");

    return (
        <>
            <Container className="py-3">
                <Grid container direction="column" spacing={2} size={12}>
                    <Typography>Dashboard</Typography>
                    <Grid container size={12} className="!justify-center" columnSpacing={1} rowSpacing={1}>
                        <Grid size={{xs:6,sm:4}}>
                            <Card className="!w-full p-5 flex justify-around !bg-[#FFC20E] !rounded-2xl">
                                <MailIcon sx={{fontSize:{xs:"4rem",sm:"5rem"}}}/>
                                <Box className="flex flex-col items-center justify-around">
                                    <Typography className="!text-4xl !font-bold">4</Typography>
                                    <Typography className="!text-sm !font-bold">Messages</Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{xs:6,sm:4}} >
                            <Card className="!w-full p-5 flex justify-around !bg-[#253D90] !rounded-2xl">
                                <WorkIcon sx={{fontSize:{xs:"4rem",sm:"5rem"}}} className="!text-white"/>
                                <Box className="flex flex-col items-center justify-around">
                                    <Typography className="!text-4xl !font-bold !text-white">1</Typography>
                                    <Typography className="!text-sm !font-bold !text-white">Jobs</Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{xs:6,sm:4}} >
                            <Card className="!w-full p-5 flex justify-around !bg-[#3F861E] !rounded-2xl">
                                <PeopleAltIcon sx={{fontSize:{xs:"4rem",sm:"5rem"}}} className="!text-white"/>
                                <Box className="flex flex-col items-center justify-around">
                                    <Typography className="!text-4xl !font-bold !text-white">30</Typography>
                                    <Typography className="!text-sm !font-bold !text-white">Candidates</Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{xs:6,sm:4}} >
                            <Card className="!w-full p-5 flex justify-around !bg-[#232423] !rounded-2xl">
                                <FeedIcon sx={{fontSize:{xs:"4rem",sm:"5rem"}}} className="!text-white"/>
                                <Box className="flex flex-col items-center justify-around">
                                    <Typography className="!text-4xl !font-bold !text-white">2</Typography>
                                    <Typography className="!text-sm !font-bold !text-white">Resumes</Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{xs:6,sm:4}} >
                            <Card className="!w-full p-5 flex justify-around !bg-[#FFC20E] !rounded-2xl">
                                <PersonIcon sx={{fontSize:{xs:"4rem",sm:"5rem"}}}/>
                                <Box className="flex flex-col items-center justify-around">
                                    <Typography className="!text-4xl !font-bold">20</Typography>
                                    <Typography className="!text-sm !font-bold">Employees</Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{xs:6,sm:4}} >
                            <Card className="!w-full p-5 flex justify-around !bg-[#253D90] !rounded-2xl">
                                <ImportContactsIcon sx={{fontSize:{xs:"4rem",sm:"5rem"}}} className="!text-white"/>
                                <Box className="flex flex-col items-center justify-around">
                                    <Typography className="!text-4xl !font-bold !text-white">8</Typography>
                                    <Typography className="!text-sm !font-bold !text-white">Leaves</Typography>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid size={isMobile ? 12 : 6} className="h-full">
                            <Card className="!p-5 flex flex-col gap-3">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-md">Applied Jobs</Typography>
                                    <MoreVertIcon className="!h-[100%]"/>
                                </Grid>
                                <Card className="p-1 px-2 flex items-center !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Access} />
                                    <Box className="w-full">
                                        <Typography className="!font-bold !text-md">Sales Executive</Typography>
                                        <Box className="flex justify-between !text-gray-500 !w-full">
                                            <Typography className="!text-xs">Access Bank</Typography>
                                            <Typography className="!text-xs">20mins ago</Typography>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-1 px-2 flex items-center !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={GridLogo} />
                                    <Box className="w-full">
                                        <Typography className="!font-bold !text-md">User Experience Designer</Typography>
                                        <Box className="flex justify-between !text-gray-500 !w-full">
                                            <Typography className="!text-xs">Paystack</Typography>
                                            <Typography className="!text-xs">10mins ago</Typography>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-1 px-2 flex items-center !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Tpay} />
                                    <Box className="w-full">
                                        <Typography className="!font-bold !text-md">Product Manager</Typography>
                                        <Box className="flex justify-between !text-gray-500 !w-full">
                                            <Typography className="!text-xs">T-Pay</Typography>
                                            <Typography className="!text-xs">5mins ago</Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Card>
                        </Grid>
                        <Grid size={isMobile ? 12 : 6} className="h-full">
                            <Card className="!p-5 flex flex-col gap-3">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-md">Employees</Typography>
                                    <MoreVertIcon className="!h-[100%]"/>
                                </Grid>
                                 <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Aman} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Aman</Typography>
                                            <Typography className="!text-[0.55rem] !text-gray-500">Role: Product Manager</Typography>
                                        </Box>
                                        <Box className="flex gap-2">
                                            <Box className="flex flex-col justify-center items-center">
                                                <Typography className="!text-[0.6rem]">View</Typography>
                                                <IconButton className="!bg-[#3F861E] "><VisibilityIcon className="!text-white !cursor-pointer" /></IconButton>
                                            </Box>
                                            <Box className="flex flex-col justify-center items-center">
                                                <Typography className="!text-[0.6rem]">Download</Typography>
                                                <IconButton className="!bg-[#253D90] "><DownloadIcon className="!text-white !cursor-pointer" /></IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Gelila} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Gelila</Typography>
                                            <Typography className="!text-[0.55rem] !text-gray-500">Role: Sales Executive</Typography>
                                        </Box>
                                        <Box className="flex gap-2">
                                            <Box className="flex flex-col justify-center items-center">
                                                <Typography className="!text-[0.6rem]">View</Typography>
                                                <IconButton className="!bg-[#3F861E] "><VisibilityIcon className="!text-white !cursor-pointer" /></IconButton>
                                            </Box>
                                            <Box className="flex flex-col justify-center items-center">
                                                <Typography className="!text-[0.6rem]">Download</Typography>
                                                <IconButton className="!bg-[#253D90] "><DownloadIcon className="!text-white !cursor-pointer" /></IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Biruk} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Biruk</Typography>
                                            <Typography className="!text-[0.55rem] !text-gray-500">Role: UI/UX Designer</Typography>
                                        </Box>
                                        <Box className="flex gap-2">
                                            <Box className="flex flex-col justify-center items-center">
                                                <Typography className="!text-[0.6rem]">View</Typography>
                                                <IconButton className="!bg-[#3F861E] "><VisibilityIcon className="!text-white !cursor-pointer" /></IconButton>
                                            </Box>
                                            <Box className="flex flex-col justify-center items-center">
                                                <Typography className="!text-[0.6rem]">Download</Typography>
                                                <IconButton className="!bg-[#253D90] "><DownloadIcon className="!text-white !cursor-pointer" /></IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Card>
                            </Card>
                        </Grid>
                        <Grid size={isMobile ? 12 : 6} className="h-full">
                            <Card className="!p-5 flex flex-col gap-3">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-md">Candidates</Typography>
                                    <MoreVertIcon className="!h-[100%]"/>
                                </Grid>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Aman} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Feven Tesfaye</Typography>
                                            <Typography className="!text-[0.6rem] !text-gray-500">Applied for : backend Engineer</Typography>
                                        </Box>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Typography className="!text-[0.6rem]">View</Typography>
                                            <IconButton className="!bg-[#3F861E] "><VisibilityIcon className="!text-white !cursor-pointer" /></IconButton>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Gelila} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Yanet mekuriya</Typography>
                                            <Typography className="!text-[0.6rem] !text-gray-500">Applied for : Sales</Typography>
                                        </Box>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Typography className="!text-[0.6rem]">View</Typography>
                                            <IconButton className="!bg-[#3F861E] "><VisibilityIcon className="!text-white !cursor-pointer" /></IconButton>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Aman} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Aman beyene</Typography>
                                            <Typography className="!text-[0.6rem] !text-gray-500">Applied for : Product Manager</Typography>
                                        </Box>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Typography className="!text-[0.6rem]">View</Typography>
                                            <IconButton className="!bg-[#3F861E] "><VisibilityIcon className="!text-white !cursor-pointer" /></IconButton>
                                        </Box>
                                    </Box>
                                </Card>
                            </Card>
                        </Grid>
                        <Grid size={isMobile ? 12 : 6} className="h-full">
                            <Card className="!p-5 flex flex-col gap-3">
                                <Grid className="flex justify-between">
                                    <Typography className="!text-md">April Payrolls</Typography>
                                    <MoreVertIcon className="!h-[100%]"/>
                                </Grid>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Aman} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Aman</Typography>
                                            <Typography className="!text-[0.65rem] !text-gray-500">Salary Amount: 30,000 Birr</Typography>
                                        </Box>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Typography className="!text-[0.6rem]">Paid</Typography>
                                            <CircularProgress variant="determinate" value={100} className="!text-[#3F861E]"/>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Gelila} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Gelila</Typography>
                                            <Typography className="!text-[0.65rem] !text-gray-500">Salary Amount: 50,000 Birr</Typography>
                                        </Box>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Typography className="!text-[0.6rem]">Processing</Typography>
                                            <CircularProgress className="!text-red-500"/>
                                        </Box>
                                    </Box>
                                </Card>
                                <Card className="p-2 flex items-center gap-2 !bg-[#E3EDF9] rounded-lg">
                                    <Box component="img" src={Biruk} />
                                    <Box className="flex justify-between w-full items-center">
                                        <Box className="flex flex-col gap-1">
                                            <Typography className="!font-bold !text-md">Biruk</Typography>
                                            <Typography className="!text-[0.65rem] !text-gray-500">Salary Amount: 40,000 Birr</Typography>
                                        </Box>
                                        <Box className="flex flex-col justify-center items-center">
                                            <Typography className="!text-[0.6rem]">Processing</Typography>
                                            <CircularProgress className="!text-red-500"/>
                                        </Box>
                                    </Box>
                                </Card>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
};

export default Dash;