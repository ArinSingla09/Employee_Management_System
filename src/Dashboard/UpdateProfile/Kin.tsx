import { Grid,Typography,TextField,Button } from "@mui/material";

const Kin = () =>{
    return (
        <Grid className="py-6 flex flex-col gap-5">
            <Grid container size={12} spacing={3}>
                <Grid container gap={3} size={{xs:12,sm:6}}>
                    <Typography>Next Of Kin Name</Typography>
                    <TextField variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                </Grid>
                <Grid container gap={3} size={{xs:12,sm:6}}>
                    <Typography>Job / Occupation</Typography>
                    <TextField required variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                </Grid>
                <Grid container size={{xs:12,sm:6}} gap={3}>
                    <Typography>Phone Number</Typography>
                    <TextField required variant="outlined" className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                </Grid>
                <Grid container gap={3} size={{xs:12,sm:6}}>
                    <Typography>Relationship</Typography>
                    <TextField required variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                </Grid>
            </Grid>
            <Grid size={12} className="flex flex-col justify-center gap-2">
                <Typography>Residential Address</Typography>
                <TextField required variant="outlined" className="!w-full" multiline rows={4} size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
            </Grid>
            <Grid size={{xs:12,md:5}}>
                <Button variant="contained" className="w-full !bg-[#3F861E]">Submit</Button>
            </Grid>
        </Grid>
    )
}

export default Kin;