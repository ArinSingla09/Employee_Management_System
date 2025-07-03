import { Grid,Typography,TextField,Button } from '@mui/material';
const Contact = () => {
    return (
        <Grid className="py-6 flex flex-col gap-5">
            <Grid container size={12} spacing={3}>
                <Grid container gap={1} size={{xs:12,sm:6}}>
                    <Typography>Phone Number 1</Typography>
                    <TextField required variant="outlined" placeholder='Phone Number 1' className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                </Grid>
                <Grid container gap={1} size={{xs:12,sm:6}}>
                    <Typography>Phone Number 2</Typography>
                    <TextField required variant="outlined" placeholder='Phone Number 2' className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                </Grid>
            </Grid>
            <Grid container gap={1} size={12}>
                <Typography>E-mail Address</Typography>
                <TextField required variant="outlined" placeholder='Email Address' className="!w-full" type="email" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
            </Grid>
            <Grid container gap={1} size={{md:6,xs:12}}>
                <Typography>City of Residence</Typography>
                <TextField required variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
            </Grid>
            <Grid size={12} className="flex flex-col justify-center gap-2">
                <Typography>Residential Address</Typography>
                <TextField required variant="outlined" className="!w-full" multiline rows={4} size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
            </Grid>
            <Grid size={{xs:12,md:5}}>
                <Button variant="contained" className="w-full !bg-[#3F861E]">Submit</Button>
            </Grid>
        </Grid>
    );
}

export default Contact;