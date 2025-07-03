import { useLocation } from "react-router-dom";
import { Grid, Typography,TextField,Button } from "@mui/material";
const GuarantDetails = () => {

    const location = useLocation();
    const record = location.state;

    return(
        <>
            <Grid container direction={"column"} spacing={2} className="py-5">
                <Typography className="!font-bold !text-xl">
                   View Guarantor Details
                </Typography>
                <Grid container direction={"column"} spacing={3} >
                    <Grid container size={12} spacing={2}>
                        <Grid container gap={2} size={12}>
                            <Typography>Guarantor’s Name</Typography>
                            <TextField variant="outlined" className="!w-full" value={record.name} type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                        </Grid>
                        <Grid container gap={2} size={12}>
                            <Typography>Job title / Occupation</Typography>
                            <TextField variant="outlined" className="!w-full" value={record.title} type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                        </Grid>
                        <Grid container size={12} gap={2}>
                            <Typography>Company</Typography>
                            <TextField variant="outlined" className="!w-full" value={record.company} type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9"},}}/>
                        </Grid>
                        <Grid container gap={2} size={12}>
                            <Typography>Number</Typography>
                            <TextField required variant="outlined" value={record.number} className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                        </Grid>
                    </Grid>
                    <Grid size={{xs:12,md:5}}>
                        <Button variant="contained" className="w-full !bg-[#3F861E]">Update</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default GuarantDetails;