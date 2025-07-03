import { Box, Card, Typography } from "@mui/material";
import leave from "../../assets/Perform.png";

const PerformIndex =() =>{
    return (
        <>
            <Card className="px-10 !bg-[#0F2B8F] flex justify-center py-10 sm:py-0 sm:justify-between items-center !rounded-2xl">
                <Box className="flex flex-col h-full justify-between">
                    <Box className="flex flex-col justify-center">
                        <Typography className="!text-3xl sm:!text-xl text-center lg:!text-3xl !text-white !font-semibold">Stay Updated on</Typography>
                        <Typography className="!text-[#FFC20E] text-center !text-3xl sm:!text-xl lg:!text-3xl !font-semibold">Employees KPI’s</Typography>
                    </Box>
                </Box>
                <Box component="img" src={leave} className="w-60 sm:w-80 md:w-100 hidden sm:flex"/>
            </Card>
        </>
    )
}

export default PerformIndex;