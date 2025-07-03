import { Box, Card, Typography } from "@mui/material";
import leave from "../../assets/leave.png";
import Arrow from "../../assets/arrow.png";
const Index = () =>{
    return (
        <>
            <Card className="px-10 !bg-[#0F2B8F] flex justify-center md:justify-between items-center !rounded-2xl">
                <Box className="flex flex-col h-full justify-between">
                    <Box component="img" src={Arrow} className="w-30 rotate-220 object-cover h-20 overflow-hidden"/>
                    <Box>
                        <Typography className="!text-2xl text-center lg:!text-3xl !text-white !font-semibold">Manage ALL <span className="!text-[#FFC20E]">Leave Applications</span></Typography>
                        <Typography className="!text-white text-center !text-sm !font-medium">A relaxed employee is a performing employee.</Typography>
                    </Box>
                    <Box component="img" src={Arrow} className="w-20 rotate-45 mr-0 ml-auto object-cover h-20 overflow-hidden"/>
                </Box>
                <Box component="img" src={leave} className="w-60 lg:w-80 hidden md:flex"/>
            </Card>
        </>
    )
}

export default Index;