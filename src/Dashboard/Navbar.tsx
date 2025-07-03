import {Grid,Box,Button,Badge,Drawer,IconButton,useMediaQuery} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ProfilePic from "../assets/ProfilePic.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState<string>("Dashboard");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:767px)");
    const navigate = useNavigate();

    const tabs: string[] = ["Dashboard", "Requests", "Payroll", "Company", "Extras"];

    const tabRoutes: Record<string, string> = {
        Dashboard: "/dashboard",
        Requests: "/requests",
        Payroll: "/payroll",
        Company: "/company",
        Extras: "/extras"
    };

    const DrawerTabs = (
        <Box className="w-[200px] p-5 flex flex-col gap-5">
            {tabs.map((tab: string) => (
                <Button key={tab} onClick={() => {setActiveTab(tab);setDrawerOpen(false);navigate(tabRoutes[tab]);}} className={`justify-start !text-left !text-xs !rounded-none !py-2`}>
                    {tab}
                </Button>
            ))}
        </Box>
    );

    return (
        <Grid>
            <Box className="flex justify-between md:justify-around items-center px-4 py-3 bg-white shadow-md">
                {isMobile ? (
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box className="flex gap-5">
                        {tabs.map((tab: string) => (
                            <Button key={tab} disableRipple onClick={() => {setActiveTab(tab);navigate(tabRoutes[tab]); }} className={`md:!text-xs lg:!text-sm md:w-22 lg:w-30 !py-6 !rounded-none ${activeTab === tab ? "!border-b-2 !border-[#FFC20E]" : ""}`}>
                                {tab}
                            </Button>
                        ))}
                    </Box>
                )}

                <Box className="flex md:gap-2 gap-3 lg:gap-7">
                    <Badge color="error" badgeContent={4} overlap="circular" className="p-2 bg-[#253D90] !rounded-full">
                        <NotificationsIcon sx={{ color: "white" }} className="!w-5 sm:!w-6" />
                    </Badge>
                    <Badge color="error" badgeContent={4} overlap="circular" className="p-2 bg-[#3F861E] !rounded-full">
                        <MailIcon sx={{ color: "white" }} className="!w-5 sm:!w-6" />
                    </Badge>
                    <Badge overlap="circular" className="bg-[#FFC20E] !rounded-4xl">
                        <Box component="img" src={ProfilePic} className="w-10" />
                    </Badge>
                </Box>
            </Box>
            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {DrawerTabs}
            </Drawer>
        </Grid>
    );
};

export default Navbar;
