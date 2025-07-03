import {Container,Box,Grid,Breadcrumbs,Card,Button,useMediaQuery,Select,MenuItem,InputLabel,FormControl,SelectChangeEvent,} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Section {
  label: string;
  path: string;
}

const ProfileAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nameSlug } = useParams();
  const isMobile = useMediaQuery('(max-width:899px)');
  const [selectedSection, setSelectedSection] = useState<string>("");

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

  useEffect(() => {
    const lastSegment = location.pathname.split("/").pop() || "";
    setSelectedSection(lastSegment);

    if (location.pathname === `/Admin-dash/profile/${nameSlug}`) {
      navigate(`/Admin-dash/profile/${nameSlug}/personal`, { replace: true });
    }
  }, [location.pathname, nameSlug, navigate]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedPath = event.target.value;
    setSelectedSection(selectedPath);
    navigate(`/Admin-dash/profile/${nameSlug}/${selectedPath}`);
  };

  return (
    <Box className="px-10">
        <Grid container direction="column" spacing={4} className="!items-center">


          <Grid container spacing={2} size={12} className="py-10">
            <Grid size={{ xs: 12, md:4 }}>
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
                    <Button key={idx} variant="contained" onClick={() => navigate(`/Admin-dash/profile/${nameSlug}/${path}`)} className={`w-full h-11 !text-black !text-sm ${location.pathname.endsWith(path) ? '!bg-[#FFC20E]' : '!bg-[#E3EDF9]'}`}>
                      {label}
                    </Button>
                  ))
                )}
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Container>
                <Card className="px-10 py-5 w-100%">
                  <Outlet />
                </Card>
              </Container>
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
};

export default ProfileAdmin;
