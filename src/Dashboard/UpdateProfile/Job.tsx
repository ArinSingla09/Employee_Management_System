import { Typography ,Grid,Box,Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

const Job =() =>{
    
    const navigate= useNavigate();
    
    const bulletPoints = [
    "Creating user-centered designs by understanding business requirements, and user feedback",
    "Creating user flows, wireframes, prototypes and mockups",
    "Translating requirements into style guides, design systems, design patterns and attractive user interfaces",
    "Designing UI elements such as input controls, navigational components and informational components",
    "Creating original graphic designs (e.g. images, sketches and tables)",
    "Identifying and troubleshooting UX problems (e.g. responsiveness)",
    "Collaborating effectively with product, engineering, and management teams",
    "Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience"
    ];

    return (
        <>
            <Typography>
                View Job Details
            </Typography>
            <Grid container className="py-5" spacing={2}>
                <Grid size={12} className="!text-center">
                    <Typography className="!text-[0.7rem] sm:!text-md">Job Role</Typography>
                    <Typography className="!font-bold !text-[0.76rem] sm:!text-xl">UI/UX Designer</Typography>
                </Grid>
                <Grid container size={12}>
                    <Grid size={6} className="!text-center">
                        <Typography className="!text-[0.7rem] sm:!text-md">Department</Typography>
                        <Typography className="!font-bold !text-[0.76rem] sm:!text-xl">Design & Marketing</Typography>
                    </Grid>
                    <Grid size={6} className="!text-center">
                        <Typography className="!text-[0.7rem] sm:!text-md">Line Manager</Typography>
                        <Typography className="!font-bold !text-[0.76rem] sm:!text-xl">Mr Domino’s Pizza</Typography>
                    </Grid>
                </Grid>
                <Typography className="!text-center w-full !font-bold">Job Description</Typography>
                <Typography>Your responsibilities will include:</Typography>
                <Box component="ul" className="pl-1">
                    {bulletPoints.map((point, index) => (
                    <li key={index}>
                        <Typography variant="body2">{index+1}. {point}</Typography>
                    </li>
                    ))}
                </Box>
                <Grid container spacing={3} size={12} mt={2}>
                    <Grid size={{xs:12,sm:6}}>
                        <Button onClick={()=>navigate("/dashboard/update-profile/job/upload")} variant="contained" className="w-full !bg-[#253D90]" >Upload Documents</Button>
                    </Grid>
                    <Grid size={{xs:12,sm:6}}>
                        <Button variant="outlined" className="w-full !border-[#F50707] !text-[#F50707]">View Documents</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Job;