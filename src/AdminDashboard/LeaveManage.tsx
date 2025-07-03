import { Container, Typography, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, useOutletContext, useNavigate, useLocation } from "react-router-dom";

const LeaveManage = () => {
  const openDrawer = useOutletContext();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getFontSize = () => {
    if (isSmallScreen) return { sm: "0.63rem", xs: "0.67rem" };
    return openDrawer ? "0.7rem" : "0.8rem";
  };

  const buttonSx = {
    width: "100%",
    py: 2,
    fontSize: getFontSize(),
  };

  const buttons = [
    { label: "Leave Settings", path: "settings" },
    { label: "Leave Recall", path: "recall" },
    { label: "Leave History", path: "history" },
    { label: "Relief Officers", path: "relief" },
  ];

  const getCurrentPath = () => location.pathname.split("/").pop();

  return (
    <Container className="py-3">
      <Grid container spacing={3} direction="column">
        <Typography className="!font-semibold !text-xl">Leave Management</Typography>
        <Grid container spacing={{ xs: 1, sm: 2 }}>
          {buttons.map(({ label, path }) => (
            <Grid key={path} size={{xs:6,sm:3}}>
              <Button variant="contained" onClick={() => navigate(path)} sx={{...buttonSx,backgroundColor: getCurrentPath() === path ? "#FFCC00" : "#253D90",color: getCurrentPath() === path ? "#000" : "#FFF","&:hover": {backgroundColor: getCurrentPath() === path ? "#FFCC00" : "#1e326c",}, }}>
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Outlet />
      </Grid>
    </Container>
  );
};

export default LeaveManage;
