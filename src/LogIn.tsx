import { Grid,Box,useMediaQuery,Typography,TextField,FormControlLabel,Checkbox,Link,Button} from "@mui/material";
import Logo from "./assets/Logo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () =>{

    const hide = useMediaQuery('(max-width:767px)');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (email === temp.id && password === temp.pwd) {
            navigate('/dashboard');
        } else {
            alert("Invalid email or password");
        }
    };

    const temp ={
        id:"arin@gmail.com",
        pwd:"arin0987"
    }

    return(
        <>
            <Box className="fixed top-5 left-5 z-1000">
                <Button variant="contained" onClick={() => navigate('/adminLogin')} className="">
                    Admin Login
                </Button>
            </Box>
            <Grid container className="bg-[linear-gradient(rgba(37,61,144,0.8),rgba(37,61,144,0.8)),url(./assets/LoginSideBg.png)] bg-cover bg-center md:bg-none h-screen">
                <Box component="img" src={Logo} className="absolute top-4 left-1/2 translate-x-[-50%] w-[15rem] md:top-5 md:left-auto md:translate-x-0 md:right-5 md:fixed"/>
                <Grid size={hide? 12:6} className="flex items-center justify-center">
                    <Box className="w-[75%] h-[60%] flex flex-col items-center justify-around">
                        <Typography className="md:text-[#253D90] text-white !font-bold md:!font-normal text-center md:text-left !text-xl sm:!text-2xl lg:!text-4xl">Login</Typography>
                        <Typography className="text-[#969696] text-center md:text-left !text-lg sm:!text-xl lg:!text-2xl">Login to your account</Typography>
                        <Box className="w-full gap-2">
                            <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth label="E-mail Address" slotProps={{input: {className: 'bg-white text-[#8F8F8F] rounded-md h-12 mb-5',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                            <TextField type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} label="Password" slotProps={{input: {className: 'bg-white text-[#8F8F8F] rounded-md h-12',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor:  hide?"#FFC20E":'#8F8F8F',},'&:hover fieldset': {borderColor: '#8F8F8F',},'&.Mui-focused fieldset': {borderColor: hide?"#FFC20E":'#8F8F8F',},},'& .MuiInputLabel-root': {color: '#253D90', fontWeight:"bold",fontSize:{md:"1rem",sm:"0.8rem",xs:"0.65rem"}},'& .MuiInputLabel-root.Mui-focused': {color: hide?"#FFC20E":'#253D90', fontWeight:"bold"}, }}/>  
                        </Box>
                        <Box className="flex justify-between items-center w-full">
                            <FormControlLabel control={<Checkbox sx={{color: hide?"white":"#8f8f8f",'&.Mui-checked': {color: hide?"white":"#8f8f8f",}}}/>} label="Remember Me" className="text-white md:text-[#8F8F8F]" sx={{'& .MuiTypography-root':{fontSize:{xs:"0.75rem",md:"1rem"}, '@media(max-width:391px)':{fontSize:"0.65rem"}}}}/>
                            <Link href="#" className="md:!text-[#253D90] !text-[#FFC20E] font-bold !decoration-[#FFC20E] md:!decoration-[#253D90]">Reset Password</Link>
                        </Box>
                            <Button variant="contained" onClick={handleLogin} sx={{backgroundColor:hide?"#FFC20E":"#253D90"}} className="h-9 md:!text-white !text-black w-full">
                                Login
                            </Button>
                        <Grid size={12} className="flex justify-center">
                            <Typography className="!text-[0.7rem] md:text-black text-white">Don't have an account yet?{' '}<Link href="/register" className="md:!text-[#253D90] !text-[#FFC20E] font-bold !decoration-[#FFC20E] md:!decoration-[#253D90] ">Join XCELTECH today</Link></Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={6} className="h-screen bg-[linear-gradient(rgba(37,61,144,0.8),rgba(37,61,144,0.8)),url(./assets/LoginSideBg.png)] bg-cover bg-center md:flex flex-col justify-end p-5 pb-50 gap-2 hidden">
                    <Typography className="text-white !font-bold !text-xl lg:!text-3xl">Manage all <span className="text-[#FFC20E]">HR Operations</span> from the comfort of your home.</Typography>
                </Grid>

            </Grid>
        </>
    );
}

export default LogIn;