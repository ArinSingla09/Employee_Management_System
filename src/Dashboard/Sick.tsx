import Navbar from "./Navbar";
import { Container,Box, Grid, Breadcrumbs,Card, Typography, TextField, Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useState } from "react";
import like from "../assets/like.png";
const Sick =() =>{

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Navbar />
            <Box className=" py-10">
                <Container>
                    <Grid container direction={"column"} spacing={2} className="!items-center">
                        <Grid size={12}>
                            <Box className="bg-white p-4 shadow-md">
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                                    <Link to="/dashboard" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                        Dashboard
                                    </Link>
                                    <Link to="/dashboard/leave" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                        Apply for Leave
                                    </Link>
                                    <Link to="/dashboard/leave/sick" className="text-[#253D90] hover:underline !text-[0.7rem]">
                                        Sick Leave
                                    </Link>
                                </Breadcrumbs>
                            </Box>
                        </Grid>
                        <Grid size={{xs:12,sm:10}}>
                            <Card className="py-13 px-10 flex flex-col items-center gap-6">
                                <Typography className="flex items-center gap-2 !text-2xl">
                                    <ImportContactsIcon className="!color-black" fontSize="medium" />
                                    Leave Application
                                </Typography>
                                <Typography className="!text-sm !text-center">Fill the required fields below to apply for annual leave.</Typography>
                                <Grid size={12} className="flex flex-col justify-center gap-2">
                                    <Typography>Leave Type</Typography>
                                    <TextField variant="outlined" className="!w-full" defaultValue="Sick Leave" disabled  size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                </Grid>
                                <Grid container size={12} spacing={3}>
                                    <Grid container gap={1} size={{xs:12,sm:6}}>
                                        <Typography>Start Date*</Typography>
                                        <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                    </Grid>
                                    <Grid container gap={1} size={{xs:12,sm:6}}>
                                        <Typography>End Date*</Typography>
                                        <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                                    </Grid>
                                    <Grid container size={{xs:12,sm:6}} gap={1}>
                                        <Typography>Duration*</Typography>
                                        <TextField required variant="outlined" type="number" placeholder="20" size="small" className="w-full" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                    </Grid>
                                    <Grid container gap={1} size={{xs:12,sm:6}}>
                                        <Typography>Resumption Date*</Typography>
                                        <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                    </Grid>
                                </Grid>
                                <Grid size={12} className="flex flex-col justify-center gap-2">
                                    <Typography>Reason for Leave*</Typography>
                                    <TextField required variant="outlined" className="!w-full" multiline rows={4} size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                </Grid>
                                <Grid className="flex flex-col justify-center gap-2" size={12}>
                                    <Typography className="!text-xs sm:!text-sm md:!text-base">Attach handover document (pdf, jpg, docx or any other format)*</Typography>
                                    <TextField required type="file" size="small"  sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                </Grid>
                                <Grid className="flex flex-col justify-center gap-2" size={12}>
                                    <Typography>Choose Relief Officer*</Typography>
                                    <TextField required type="text" size="small"  sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                </Grid>
                                <Grid container spacing={3} size={12} mt={2}>
                                    <Grid size={{xs:12,sm:6}}>
                                        <Button variant="contained" className="w-full !bg-[#3F861E]" onClick={handleClickOpen}>Submit</Button>
                                    </Grid>
                                    <Grid size={{xs:12,sm:6}}>
                                        <Button variant="outlined" className="w-full !border-[#F50707] !text-[#F50707]">Reset</Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent className="flex flex-col items-center gap-2">
          <Box component="img" src={like} alt="" className="!w-[12rem]"/>
          <Typography className="!text-[#253D90] !font-bold">
            Great Job!
          </Typography>
          <Typography className="!w-[70%] !text-[#253D90] !text-center !font-bold">
            Your leave application will be reviewed by the admin
          </Typography>
        </DialogContent>
        <DialogActions className="flex justify-center w-full">
          <Button variant="contained" onClick={handleClose} className="!bg-[#1242EB] w-full">
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default Sick;