import { Grid, Typography,TextField,Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const Details = () => {

    const location = useLocation();
    const record = location.state;

    return (
        <>
            <Grid container direction={"column"} spacing={2} className="py-5">
                <Typography>
                   Academic Records / Academic Details
                </Typography>
                <Grid container direction={"column"} spacing={2} >
                    <Grid container size={12} spacing={3}>
                        <Grid container gap={3} size={{xs:12,sm:6}}>
                            <Typography>Name of Institution</Typography>
                            <TextField variant="outlined" className="!w-full" value={record.title} type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                        </Grid>
                        <Grid container gap={3} size={{xs:12,sm:6}}>
                            <Typography>Department</Typography>
                            <TextField required variant="outlined" className="!w-full" value={"Computer Dept"} type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                        </Grid>
                        <Grid container size={{xs:12,sm:6}} gap={3}>
                            <Typography>Course</Typography>
                            <TextField required variant="outlined" className="!w-full" value={"Computer Science"} type="number" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                        </Grid>
                        <Grid container gap={3} size={{xs:12,sm:6}}>
                            <Typography>Location</Typography>
                            <TextField required variant="outlined" className="!w-full" value={"Jimma Ethiopia"} type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                        </Grid>
                        <Grid container gap={3} size={{xs:12,sm:6}}>
                            <Typography>Start Date</Typography>
                            <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                        </Grid>
                        <Grid container gap={3} size={{xs:12,sm:6}}>
                            <Typography>End Date</Typography>
                            <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                        </Grid>
                    </Grid>
                    <Grid size={12} className="flex flex-col justify-center gap-2">
                        <Typography>Description</Typography>
                        <TextField required variant="outlined" className="!w-full" multiline rows={4} value={record.description} size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                    </Grid>
                    <Grid size={{xs:12,md:5}}>
                        <Button variant="contained" className="w-full !bg-[#3F861E]">Update</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Details;