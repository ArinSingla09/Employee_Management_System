import { Box, Grid, TextField, Typography,Button,FormControlLabel,Checkbox, Link } from "@mui/material"
import Logo from "./assets/Logo.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin =() =>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (email === admin.id && password === admin.pwd) {
            navigate('/Admin-dash');
        } else {
            alert("Invalid email or password");
        }
    };

    const admin ={
        id:"arin@gmail.com",
        pwd:"arin0987"
    }
    return (
        <Grid className="justify-center">
            <Box component="img" src={Logo} className="absolute top-5 left-1/2 translate-x-[-50%] w-[15rem] sm:left-auto sm:translate-x-0 sm:fixed"/>
            <Grid container className="w-screen h-screen bg-[linear-gradient(rgba(37,61,144,0.8),rgba(37,61,144,0.8)),url(./assets/LoginBg.jpg)] bg-cover bg-center" justifyContent="center" alignItems="center">
                <Box className="text-white sm:w-[45%] lg:w-[30%] h-[55%] flex flex-col justify-between text-center">
                    <Typography variant="h4" className="font-bold">Login</Typography>
                    <Typography variant="h6">Login to your account.</Typography>
                    <TextField type="email" fullWidth label="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)}  slotProps={{input: {className: 'bg-white text-black rounded-md',}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor: 'black',},'&:hover fieldset': {borderColor: 'black',},'&.Mui-focused fieldset': {borderColor: 'black',},},'& .MuiInputLabel-root': {color: 'black',},'& .MuiInputLabel-root.Mui-focused': {color: 'black',}, }}/>
                    <TextField type="password" fullWidth label="Password" onChange={(e) => setPassword(e.target.value)} slotProps={{input: {className: 'bg-white text-black rounded-md' ,}, }} sx={{'& .MuiOutlinedInput-root': {borderRadius: '0.375rem','& fieldset': {borderColor: 'black',},'&:hover fieldset': {borderColor: 'black',},'&.Mui-focused fieldset': {borderColor: 'black',},},'& .MuiInputLabel-root': {color: 'black',},'& .MuiInputLabel-root.Mui-focused': {color: 'black',}, }}/>
                    <Box className="flex justify-between items-center">
                        <FormControlLabel control={<Checkbox sx={{color: "white",'&.Mui-checked': {color: "white",}}}/>} label="Remember Me" sx={{ color: "white" }}/>
                        <Link href="#" sx={{color:"white"}} underline="none" >Reset Password?</Link>
                    </Box>
                    <Button variant="contained" onClick={handleLogin} sx={{backgroundColor:"#FFC20E",color:"black"}}>Sign In</Button>
                </Box>
            </Grid>
        </Grid>

    )
}

export default AdminLogin;