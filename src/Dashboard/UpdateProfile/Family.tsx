import { Grid,Typography,Box } from "@mui/material";
import { Link } from "react-router-dom";

const Family = () => {
    const records = [
        {
            name:"Natnael Dawit",
            relationship:"Brother",
            address:"Djibouti street ,Addis Ababa",
            number:"9345545455"
        },
        {
            name:"Natnael Dawit",
            relationship:"Brother",
            address:"Djibouti street ,Addis Ababa",
            number:"9345545455"
        },
    ];

    return (
        <Grid container direction={"column"} spacing={2}>
            <Typography>Guarantor Details</Typography>

            {records.map((record, index) => (
                <Link key={index} to="details" state={record} style={{ textDecoration: 'none' }}>
                    <Box className="p-3 px-5 bg-[#E3EDF9] rounded-xl hover:opacity-90 my-2">
                        <Typography className="!text-md">{record.name}</Typography>
                        <Typography className="!text-[0.55rem]">
                            Relationship: {record.relationship} | Phone No :{record.number}
                        </Typography>
                        <Typography className="!text-[0.55rem]">
                            Address: {record.address}
                        </Typography>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
}

export default Family;