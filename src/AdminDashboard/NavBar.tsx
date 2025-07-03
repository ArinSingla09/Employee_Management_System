import {Grid,IconButton,TextField,Button,Badge,useTheme,useMediaQuery,Drawer,Box, Typography, Link,} from "@mui/material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from "@mui/icons-material/Build";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import { MenuOutlined } from "@mui/icons-material";
import Logo from "../assets/Logo.png";
import { Outlet } from "react-router-dom";
import ProfilePic from "../assets/dp1.png";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import foot from "../assets/image.png";
import { useNavigate,useLocation } from "react-router-dom";
const drawerWidth = 240;

const NavBar = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(true);
    const location = useLocation();
    const currentPath = location.pathname;


    const handleDrawerToggle = () => {
        setOpenDrawer((prev) => !prev);
    };

    return (
    <Box className="flex">
       <Drawer variant={isSmallScreen ? "temporary" : "persistent"} open={openDrawer} onClose={handleDrawerToggle} sx={{width: drawerWidth,flexShrink: 0,"& .MuiDrawer-paper": {width: drawerWidth,boxSizing: "border-box",backgroundColor: "#121C3E",height: "100vh",overflowY: "scroll",scrollbarWidth: "none","&::-webkit-scrollbar": {display: "none",},},}}>
            <Box className="p-2">
                <Box component="img" src={Logo} className="!w-[90%] mt-6" />
                <Box className="flex items-center justify-around py-7">
                    <Box component="img" src={ProfilePic} className="!bg-[#FFC20E] !w-[30%] !rounded-full"/>
                    <Box>
                        <Typography className="!text-lg !font-bold !text-white !text-center">Aman Admin</Typography>
                        <Typography className="!text-sm !text-white !text-center !mt-2">Admin</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography className="py-2 !text-white !text-xs">Features</Typography>
                    <Link underline="none" href="/Admin-dash" className={`flex p-2 px-0 rounded-xl px-5 items-center gap-2  ${currentPath === "/Admin-dash" ? "!bg-[#FFC20E] !text-black" : "!bg-transparent !text-white"}`}>
                        <DashboardIcon className={`${currentPath.includes("/Admin-dash") ? "!text-black":" !text-white"}`} sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.9rem"}}>Dashboard</Typography>
                    </Link>
                    <Link underline="none" href="" className="flex p-2 px-0 !mt-2 !rounded-xl px-5 items-center gap-2 !text-white">
                        <MailIcon className="!text-white" sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.9rem"}}>Messages</Typography>
                    </Link>
                </Box>
                <Box>
                    <Typography className="py-2 !text-white !text-xs">Recruitment</Typography>
                    <Link underline="none" href="" className="flex p-2 px-0 !rounded-xl px-5 items-center gap-2 !text-white">
                        <WorkIcon className="!text-white" sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.9rem"}}>Jobs</Typography>
                    </Link>
                    <Link underline="none" href="" className="flex p-2 px-0 !mt-2 !rounded-xl px-5 items-center gap-2 !text-white">
                        <PeopleAltIcon className="!text-white" sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.9rem"}}>Candidates</Typography>
                    </Link>
                    <Link underline="none" href="/dashboard" className="flex p-2 px-0 !mt-2 !rounded-xl px-5 items-center gap-2 !text-white">
                        <FeedIcon className="!text-white" sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.9rem"}}>Resumes</Typography>
                    </Link>
                </Box>
                <Box>
                    <Typography className="py-2 !text-white !text-xs">Organization</Typography>
                    <Link underline="none" onClick={() => navigate("EmpManage")} className={`flex p-2 px-0 rounded-xl px-5 items-center gap-2 ${currentPath.includes("/Admin-dash/EmpManage") ? "!bg-[#FFC20E] !text-black" : "!bg-transparent !text-white" }`}>
                        <PersonIcon className={`${currentPath.includes("/Admin-dash/EmpManage") ? "!text-black":" !text-white"}`} sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.77rem"}}>Employee Management</Typography>
                    </Link>
                    <Link underline="none" onClick={() => navigate("LeaveManage")} className={`flex p-2 px-0 rounded-xl px-5 items-center gap-2 ${currentPath.includes("/Admin-dash/LeaveManage") ? "!bg-[#FFC20E] !text-black" : "!bg-transparent !text-white"}`}>
                        <ImportContactsIcon className={`${currentPath.includes("/Admin-dash/LeaveManage") ? "!text-black":" !text-white"}`} sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.9rem"}}>Leave Management</Typography>
                    </Link>
                    <Link underline="none" onClick={() => navigate("Performance")} className={`flex p-2 px-0 rounded-xl px-5 items-center gap-2 ${currentPath.includes("/Admin-dash/Performance") ? "!bg-[#FFC20E] !text-black" : "!bg-transparent !text-white" }`}>
                        <AssignmentIcon className={`${currentPath.includes("/Admin-dash/Performance") ? "!text-black":" !text-white"}`} sx={{fontSize:"0.9rem"}}/>
                        <Typography sx={{fontSize:"0.83rem"}}>Performance Management</Typography>
                    </Link>
                </Box>
                <Button variant="contained" className="!my-2 w-full"><ExitToAppIcon/>Log Out</Button>
            </Box>
            <Box component="img" src={foot} />
        </Drawer>
        <Box sx={{marginLeft:isSmallScreen? 0 : openDrawer ?0: `-${drawerWidth}px`,width: `calc(100% - ${isSmallScreen?0:openDrawer ? drawerWidth : 0}px)`}}>
            <Grid container className="p-6" justifyContent="space-between">
                <Grid size={{xs:1,md:2}}>
                    <IconButton className="!px-2" onClick={handleDrawerToggle}>
                    <MenuOutlined />
                    </IconButton>
                </Grid>

                <Grid size={8} className="relative hidden sm:flex items-center justify-center" >
                    <Button variant="contained" size="small" className="!h-10 !bg-[#253D90] !min-h-0 !text-[0.68rem] !leading-none !px-2 !w-[30%] !rounded-l-lg !z-10">
                    All Candidates
                    </Button>
                    <TextField size="small" className="!h-10 !min-h-0 !text-xs !leading-none !w-[50%] -ml-6 !z-0 !rounded-l-none" InputProps={{endAdornment: (<SearchIcon fontSize="small" className="ml-2 mr-1 text-gray-500"/>),style: { height: "40px", fontSize: "0.75rem" },}}/>
                </Grid>
                <Grid size={{xs:5,sm:3,md:2}} className="flex justify-around">
                    <Badge color="error" badgeContent={4} overlap="circular" className="p-2 bg-[#253D90] !rounded-full">
                    <NotificationsIcon sx={{ color: "white" }} className="!w-5 sm:!w-6"/>
                    </Badge>
                    <Badge overlap="circular" className="p-2 bg-[#FFC20E] !rounded-full">
                    <BuildIcon sx={{ color: "black" }} className="!w-5 sm:!w-6" />
                    </Badge>
                    <Badge color="error" badgeContent={4} overlap="circular" className="p-2 bg-[#3F861E] !rounded-full">
                    <MailIcon sx={{ color: "white" }} className="!w-5 sm:!w-6" />
                    </Badge>
                </Grid>
            </Grid>
            <Outlet context={openDrawer} />
        </Box>
    </Box>
    );
};

export default NavBar;
