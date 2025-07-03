import { Grid,Typography,Box } from "@mui/material";
import { Link } from "react-router-dom";

const Finance = () => {
    const records = [
        {
            number:"100013455451",
            name:"John Doe",
            bank:"CBE",
            accountType:"Savings"
        },
        {
            number:"100055563301",
            name:"Doe Johnn",
            bank:"Awash Bank",
            accountType:"Savings"
        },
    ];

    return (
        <Grid container direction={"column"} spacing={2}>
            <Typography>Guarantor Details</Typography>

            {records.map((record, index) => (
                <Link key={index} to="details" state={record} style={{ textDecoration: 'none' }}>
                    <Box className="p-3 px-5 bg-[#E3EDF9] rounded-xl hover:opacity-90 my-2">
                        <Typography className="!text-md">{record.number} | {record.name}</Typography>
                        <Typography className="!text-[0.55rem]">
                            {record.bank} | Phone No :{record.accountType} Account
                        </Typography>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
}

export default Finance;