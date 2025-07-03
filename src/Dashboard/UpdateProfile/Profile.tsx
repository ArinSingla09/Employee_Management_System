import Navbar from "../Navbar";
import {Container,Box,Grid,Breadcrumbs,Card,Button,useMediaQuery,Select,MenuItem,InputLabel,FormControl,SelectChangeEvent} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, Outlet, useNavigate,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface Section {
    label: string;
    path: string;
}

const Profile = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:899px)');
    const [selectedSection, setSelectedSection] = useState<string>("personal");
    const location = useLocation();

    useEffect(() => {
    if (location.pathname === "/dashboard/update-profile") {
        navigate("personal", { replace: true });
    }
}, [location.pathname, navigate]);

    const sections: Section[] = [
        { label: "Personal Details", path: "personal" },
        { label: "Contact Details", path: "contact" },
        { label: "Next of kin Details", path: "next-of-kin" },
        { label: "Education Qualifications", path: "education" },
        { label: "Guarantor Details", path: "guarantor" },
        { label: "Family Details", path: "family" },
        { label: "Job Details", path: "job" },
        { label: "Financial Details", path: "financial" },
    ];

    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedPath = event.target.value;
        setSelectedSection(selectedPath);
        navigate(selectedPath);
    };

    return (
        <>
            <Navbar />
            <Box className=" py-10">
                <Container>
                    <Grid container direction="column" spacing={4} className="!items-center">
                        <Grid size={12}>
                            <Box className="bg-white p-4 shadow-md">
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                                    <Link to="/dashboard" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                        Dashboard
                                    </Link>
                                    <Link to="/dashboard/update-profile" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                        Update Profile
                                    </Link>
                                </Breadcrumbs>
                            </Box>
                        </Grid>

                        <Grid container size={12} spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Card className="px-7 py-5 flex flex-col gap-4">
                                    {isMobile ? (
                                        <FormControl fullWidth>
                                            <InputLabel id="profile-section-label">Select Section</InputLabel>
                                            <Select labelId="profile-section-label" value={selectedSection} onChange={handleChange} label="Select Section" sx={{ backgroundColor: "#E3EDF9", borderRadius: "8px" }}>
                                                {sections.map(({ label, path }, idx) => (
                                                    <MenuItem key={idx} value={path}>
                                                        {label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    ) : (
                                        sections.map(({ label, path }, idx) => (
                                            <Button key={idx} variant="contained" onClick={() => navigate(path)} className={`w-full h-11 !text-black !text-sm ${location.pathname.endsWith(path) ? '!bg-[#FFC20E]' : '!bg-[#E3EDF9]'}`}>
                                                {label}
                                            </Button>
                                        ))
                                    )}
                                </Card>
                            </Grid>

                            <Grid size={{ xs: 12, md: 8 }}>
                                <Card className="px-10 py-5">
                                    <Outlet />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Profile;
