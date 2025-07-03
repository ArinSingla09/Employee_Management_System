import { Container, Typography, Button, Grid } from "@mui/material";
import { Outlet, useNavigate,useLocation } from "react-router-dom";

const PerformManage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const current = location.pathname.split("/").pop();

  const getButtonClass = (match: string) =>
    current === match
      ? "!bg-[#FFC20E] !text-black !font-semibold"
      : "!bg-white !text-[#1d1d1d]";

  return (
    <Container className="py-3">
      <Grid container spacing={3} direction="column">
        <Typography className="!font-semibold !text-xl">Performance Management</Typography>
        <Grid container columns={15} justifyContent={"center"}>
            <Grid size={{xs:5,md:3}}>
                <Button variant="contained" onClick={() => navigate("setup")} className={`${getButtonClass("setup")} w-full h-10 !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]`}>
                    Target Setup
                </Button>
            </Grid>
            <Grid size={{xs:5,md:3}}>
                <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                    Targets
                </Button>
            </Grid>
            <Grid size={{xs:5,md:3}}>
                <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                    Appraisals
                </Button>
            </Grid>
            <Grid size={{xs:5,md:3}}>
                <Button variant="contained" className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                    Settings
                </Button>
            </Grid>
            <Grid size={{xs:5,md:3}}>
                <Button variant="contained" onClick={()=>navigate('/dashboard/update-profile')} className="!bg-white w-full h-10 !text-[#1d1d1d] !rounded-full text-nowrap sm:!text-[0.8rem] !text-[0.65rem]">
                    Reports
                </Button>
            </Grid>
        </Grid>
        <Outlet />
      </Grid>
    </Container>
  );
};

export default PerformManage;
