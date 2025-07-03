import { Grid,Box, Typography,TextField, FormControlLabel,Checkbox, Button, Link, Divider, ButtonGroup,useMediaQuery } from "@mui/material";
import Logo from "./assets/Logo.png"
const UserRegister = () =>{

    const hide = useMediaQuery('(max-width:767px)');

    return (
        <Grid container className="bg-[linear-gradient(rgba(37,61,144,0.8),rgba(37,61,144,0.8)),url(./assets/UserRegisterBg.png)] bg-cover bg-center md:bg-none h-screen">
            <Box component="img" src={Logo} className="absolute top-4 md:bg-transparent md:top-5 left-1/2 translate-x-[-50%] w-[15rem] md:left-auto md:translate-x-0 md:fixed md:!left-5 "/>
            <Grid container>
                <Grid size={5} className="h-screen bg-[linear-gradient(rgba(37,61,144,0.8),rgba(37,61,144,0.8)),url(./assets/UserRegisterBg.png)] bg-cover bg-center md:flex flex-col justify-center p-10 gap-2 hidden">
                    <Typography className="text-white !font-bold !text-3xl lg:!text-4xl">HR Management Platform</Typography>
                    <Divider className="w-30 h-3 bg-white rounded-xl"/>
                    <Typography className="text-white !text-sm lg:!text-lg !mt-5">Manage all employees, payrolls, and other human resource operations.</Typography>
                    <ButtonGroup className="gap-5">
                        <Button variant="contained" sx={{backgroundColor:"#FFC20E",color:"black",fontSize:{sm:"0.65rem",md:"0.8rem"}}}>
                            Learn More
                        </Button>
                        <Button variant="outlined" sx={{color: "#FFFFFF",fontSize:{sm:"0.65rem",md:"0.8rem"},borderColor: "#FFFFFF",'&:hover': {borderColor: "#FFFFFF",backgroundColor: "rgba(255, 255, 255, 0.1)",},}} >
                            Our Features
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid size={hide? 12:7} spacing={hide?2:0} container className="flex flex-col py-20 px-12 md:p-15 md:items-inherit items-center ">
                    <Grid size={12}>
                        <Typography className="md:text-[#253D90] text-white !font-bold md:!font-normal text-center md:text-left !text-xl sm:!text-2xl lg:!text-4xl">Welcome to XCELTECH</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography className="text-[#969696] text-center md:text-left !text-lg sm:!text-xl lg:!text-2xl">Register your account</Typography>
                    </Grid>
                    <Grid container columnSpacing={{xs:1,md:5}} rowSpacing={3}>
                        <Grid size={6}>
                            <TextField type="text" fullWidth label="First Name" slotProps={{input: {className: 'bg-white text-#8F8F8F rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor: hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Grid>
                        <Grid size={6}>
                            <TextField type="text" fullWidth label="Last Name" slotProps={{input: {className: 'bg-white text-#8F8F8F rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor: hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Grid>
                        <Grid size={6}>
                            <TextField type="email" fullWidth label="E-mail Address" slotProps={{input: {className: 'bg-white text-#8F8F8F rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Grid>
                        <Grid size={6}>
                            <TextField type="number" fullWidth label="Phone Number" slotProps={{input: {className: 'bg-white text-#8F8F8F rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Grid>
                        <Grid size={6}>
                            <TextField type="password" fullWidth label="Password" slotProps={{input: {className: 'bg-white text-#8F8F8F rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor: hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Grid>
                        <Grid size={6}>
                            <TextField type="password" fullWidth label="Confirm Password" slotProps={{input: {className: 'bg-white text-#8F8F8F rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Grid>
                    </Grid>
                    <Grid size={12}>
                        <Grid>
                            <FormControlLabel control={<Checkbox sx={{color: hide?"white":"#8f8f8f",'&.Mui-checked': {color: hide?"white":"#8f8f8f",}}}/>} label="Yes, I want to receive XCELTECH newsletters" className="text-white md:text-[#8F8F8F]" sx={{'& .MuiTypography-root':{fontSize:{xs:"0.75rem",md:"1rem"}, '@media(max-width:391px)':{fontSize:"0.65rem"}}}}/>
                        </Grid>
                        <Grid>
                            <FormControlLabel control={<Checkbox sx={{color: hide ? "white" : "#8f8f8f","&.Mui-checked": {color: hide ? "white" : "#8f8f8f",},}} />}label={<Typography variant="body2" className="text-white md:text-[#8F8F8F] [@media(max-width:386px)]:!text-[0.78rem]">I agree to all the <Link href="#" className="md:!text-[#253D90] !text-[#FFC20E] font-bold !decoration-[#FFC20E] md:!decoration-[#253D90] ">Terms, Privacy Policy</Link></Typography>}/>
                        </Grid>
                    </Grid>
                    <Grid size={12} className=" flex justify-center md:justify-start">
                        <Button variant="contained" sx={{backgroundColor:hide?"#FFC20E":"#253D90"}} className="h-9 md:!text-white !text-black">
                            Create Account
                        </Button>
                    </Grid>
                    <Grid size={12} className=" flex justify-center md:justify-start">
                        <Typography className="text-sm md:text-black text-white">Already have an Account?{' '}<Link href="/login" className="md:!text-[#253D90] !text-[#FFC20E] font-bold !decoration-[#FFC20E] md:!decoration-[#253D90] ">Log In</Link></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default UserRegister;