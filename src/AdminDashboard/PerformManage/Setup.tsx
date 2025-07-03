import { Grid,Card,Typography,TextField,Button } from "@mui/material";

const Setup = () =>{
    return (
        <>
            <Grid container size={12}>
                <Card className="w-full !rounded-3xl p-7">
                     <Grid className="py-6 flex flex-col gap-5">
                        <Grid container size={12} spacing={3}>
                            <Grid container gap={1} size={{xs:12,sm:6}}>
                                <Typography>Title</Typography>
                                <TextField variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                            </Grid>
                            <Grid container gap={1} size={{xs:12,sm:6}}>
                                <Typography>KPI Weight</Typography>
                                <TextField variant="outlined" className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                            </Grid>
                        </Grid>
                        <Grid container gap={1} size={12}>
                            <Typography>Description</Typography>
                            <TextField variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                        </Grid>
                        <Grid container gap={1} size={12}>
                            <Typography>Employees Name</Typography>
                            <TextField variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                        </Grid>
                        <Grid container size={12} spacing={3}>
                            <Grid container gap={1} size={{xs:12,sm:6}}>
                                <Typography>Start Date</Typography>
                                <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                            </Grid>
                            <Grid container gap={1} size={{xs:12,sm:6}}>
                                <Typography>End Date</Typography>
                                <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} size={12} mt={2}>
                            <Grid size={{xs:12,sm:6}}>
                                <Button variant="contained" className="w-full !bg-[#3F861E]">Submit</Button>
                            </Grid>
                            <Grid size={{xs:12,sm:6}}>
                                <Button variant="outlined" className="w-full !border-[#F50707] !text-[#F50707]">Reset</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </>
    )
}

export default Setup;