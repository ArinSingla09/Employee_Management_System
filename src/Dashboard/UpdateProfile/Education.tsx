import { Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Education = () => {
    const records = [
        {
            title: "Jimma University",
            description: "B.Sc in Computer Science",
            duration: "May 2014 - May 2018",
            type: "Academic Record"
        },
        {
            title: "Cathederal School",
            description: "High School Education",
            duration: "Sep 2008 - June 2012",
            type: "Academic Record"
        },
        {
            title: "CCNA Certification",
            description: "at Addis Ababa University",
            duration: "May 2019 - September 2021",
            type: "Certification"
        },
        {
            title: "Google UI / UX Certification",
            description: "Design Principles & UX Best Practices",
            duration: "September 2021 - September 2022",
            type: "Certification"
        }
    ];

    return (
        <Grid container direction={"column"} spacing={2}>
            <Typography>Academic Records</Typography>

            {records.map((record, index) => (
                <Link key={index} to="records" state={record} style={{ textDecoration: 'none' }}>
                    <Box className="p-3 px-5 bg-[#E3EDF9] rounded-xl hover:opacity-90 my-2">
                        <Typography className="!text-md">{record.title}</Typography>
                        <Typography className="!text-[0.55rem]">
                            {record.description}, {record.duration}
                        </Typography>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
};

export default Education;
