import { Card, Grid, Typography,TextField,MenuItem,Button } from "@mui/material";
import { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Settings = () => {

    const [recall, setRecall] = useState("");
    const [bonus,setBonus]=useState("");
    const columnDefs = [
    { headerName: "Leave Plan", field: "leavePlan", flex: 1,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center" },
    { headerName: "Duration(s)", field: "duration", flex: 1,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center" },
    { headerName: "Recall /Autorenew", field: "recallAuto", flex: 1,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center" },
    {
      headerName: "Actions",
      field: "actions",
      flex: 1,
      cellRendererFramework: () => (
        <Button variant="contained" size="small">
          Actions ⏷
        </Button>
      ),cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center",
    },
  ];

  const rowData = [
    { leavePlan: "Maternity", duration: 60, recallAuto: "No / No" },
    { leavePlan: "Sick", duration: 14, recallAuto: "No / Yes" },
    { leavePlan: "Compassionate", duration: 30, recallAuto: "No / No" },
    { leavePlan: "Exam", duration: 20, recallAuto: "No / No" },
    { leavePlan: "Paternity", duration: 60, recallAuto: "No / No" },
    { leavePlan: "Casual", duration: 10, recallAuto: "Yes / No" },
    { leavePlan: "Exam", duration: 20, recallAuto: "No / No" },
  ];



    return(
        <>
            <Grid container spacing={3}>
                <Grid size={{md:6,xs:12}} >
                    <Card className="!p-4 !rounded-xl">
                        <Grid container direction="column" spacing={2}>
                            <Typography className="!text-xl !font-bold">Create Leave Settings</Typography>
                            <Grid container size={12} spacing={3}>
                                <Grid container gap={1} size={{xs:12,sm:6}}>
                                    <Typography className="!text-xs !font-semibold">Leave Plan Name</Typography>
                                    <TextField required variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                                </Grid>
                                <Grid container gap={1} size={{xs:12,sm:6}}>
                                    <Typography className="!text-xs !font-semibold">Duration (days)</Typography>
                                    <TextField required variant="outlined" className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                                </Grid>
                            </Grid>
                            <Grid container gap={1} size={12}>
                                <Typography className="!text-xs !font-semibold">Do you want to activate Leave Recall for this plan ?</Typography>
                                <TextField select required variant="outlined" className="!w-full" size="small" value={recall} onChange={(e) => setRecall(e.target.value)}sx={{"& .MuiOutlinedInput-root": {borderRadius: "12px",backgroundColor: "#E3EDF9",},}}>
                                    <MenuItem value="Yes">Yes</MenuItem>
                                    <MenuItem value="No">No</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid container size={12} spacing={3}>
                                <Grid container gap={1} size={{xs:12,sm:6}}>
                                    <Typography className="!text-xs !font-semibold">Would you like to activate leave bonus</Typography>
                                    <TextField select required variant="outlined" className="!w-full" size="small" value={bonus} onChange={(e) => setBonus(e.target.value)}sx={{"& .MuiOutlinedInput-root": {borderRadius: "12px",backgroundColor: "#E3EDF9",},}}>
                                        <MenuItem value="Yes">Yes</MenuItem>
                                        <MenuItem value="No">No</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid container gap={1} size={{xs:12,sm:6}}>
                                    <Typography className="!text-xs !font-semibold">How much percentage of leave bonus?</Typography>
                                    <TextField required variant="outlined"  disabled={bonus !== "Yes"} className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                                </Grid>
                            </Grid>
                            <Grid container gap={1} size={12}>
                                <Typography className="!text-xs !font-semibold">Select Leave Allocation</Typography>
                                <TextField required variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                            </Grid>
                            <Grid size={12}>
                                <Button variant="contained" className="w-full !bg-[#3F861E] !rounded-xl" >Create</Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid size={{md:6,xs:12}} spacing={2}>
                    <Card className="!p-4 !rounded-xl">
                        <Grid container direction="column" spacing={2}>
                            <Typography className="!text-xl !font-bold">Manage Leave Settings</Typography>
                            <Grid className="ag-theme-alpine" sx={{ height: 358, width: "100%" }}>
                                <AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={{ resizable: true, sortable: true, }} rowHeight={45}/>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Settings;