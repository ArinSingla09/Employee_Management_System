import { Box,Grid, IconButton, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ProfilePic from "../../assets/dp.png";
const Profile = () => {
    return (
        <>
            <IconButton className="float-right">
                <ModeEditOutlineOutlinedIcon />
            </IconButton>
            <Grid className="flex flex-col items-center justify-center gap-4 py-6">
                <Box component="img" src={ProfilePic} className="!bg-[#FFC20E] !rounded-full"/>
                <Box className="flex flex-col items-center gap-1">
                    <Typography className="!text-sm">Employee Name</Typography>
                    <Typography className="!text-xl !font-bold">Biruk Dawit</Typography>
                </Box>
                <Box className="flex flex-col items-center gap-1">
                    <Typography className="!text-sm">Department</Typography>
                    <Typography className="!text-xl !font-bold">Design & Marketing</Typography>
                </Box>
                <Box className="flex justify-around w-full items-center gap-1 mt-7">
                    <Box className="flex flex-col items-center gap-1">
                        <Typography className="!text-xs">Job Title</Typography>
                        <Typography className="!text-md !font-bold">UI / UX Designer</Typography>
                    </Box>
                    <Box className="flex flex-col items-center gap-1">
                        <Typography className="!text-xs">Job Category</Typography>
                        <Typography className="!text-md !font-bold">Full time</Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}

export default Profile;