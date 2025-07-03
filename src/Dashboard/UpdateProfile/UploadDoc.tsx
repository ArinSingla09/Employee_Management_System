import { Grid,Typography,TextField,Button } from "@mui/material";

const UploadDoc = () =>{
    return(
        <>
            <Grid className="flex flex-col gap-15">
                <Grid>
                    <Typography>
                        Upload Documents
                    </Typography>
                    <Grid container className="py-5" spacing={2}>
                        <Grid className="flex flex-col justify-center gap-1" size={12}>
                            <Typography className="!font-bold !text-sm">Upload Offer Letter</Typography>
                            <TextField required type="file" size="small"  sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                        </Grid>
                        <Grid className="flex flex-col justify-center gap-1" size={12}>
                            <Typography className="!font-bold !text-sm">Upload Birth Certificate</Typography>
                            <TextField required type="file" size="small"  sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                        </Grid>
                        <Grid className="flex flex-col justify-center gap-1" size={12}>
                            <Typography className="!font-bold !text-sm">Upload Guarantor's Form</Typography>
                            <TextField required type="file" size="small"  sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                        </Grid>
                        <Grid className="flex flex-col justify-center gap-1" size={12}>
                            <Typography className="!font-bold !text-sm">Upload Degree Certificate</Typography>
                            <TextField required type="file" size="small"  sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Button variant="contained" className="w-[50%] !bg-[#253D90]">Upload Documents</Button>
                </Grid>
            </Grid>
        </>
    );
};


export default UploadDoc;