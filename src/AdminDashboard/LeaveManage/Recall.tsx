import CallIcon from '@mui/icons-material/Call';
import React, { useState, useCallback } from "react";
import {Card,CardContent,Typography,Dialog,DialogTitle,DialogContent,DialogActions,Button,Grid,TextField
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface LeaveRecord {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

const Recall: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>("");

  const handleRecallClick = useCallback((name: string) => {
    setSelectedUser(name);
    setOpenDialog(true);
  }, []);

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedUser("");
  };

  const rowData: LeaveRecord[] = [
  { name: "aebeb geechu", duration: 5, startDate: "2022-04-22", endDate: "2022-04-28", type: "Casual", reason: "Personal" },
  { name: "aman bey", duration: 7, startDate: "2022-04-22", endDate: "2022-04-30", type: "Casual", reason: "Personal" },
  { name: "feven tesfaye", duration: 7, startDate: "2022-04-22", endDate: "2022-06-28", type: "Casual", reason: "Personal" },
  { name: "yanet tesfaye", duration: 5, startDate: "2022-04-22", endDate: "2022-04-28", type: "Casual", reason: "Personal" },
  { name: "beti wolec", duration: 5, startDate: "2022-04-22", endDate: "2022-04-28", type: "Casual", reason: "Personal" },
  { name: "dawit int", duration: 5, startDate: "2022-04-22", endDate: "2022-04-28", type: "Casual", reason: "Personal" },
  { name: "gelila oges", duration: 5, startDate: "2022-04-22", endDate: "2022-04-28", type: "Casual", reason: "Personal" },
];


  const RecallButtonRenderer = (params: any) => {
    const handleClick = () => {
      handleRecallClick(params.data);
    };

    return (
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Recall
      </button>
    );
  };

  const centerStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

  const columnDefs: ColDef<LeaveRecord>[] = [
    { headerName: "Name(s)", field: "name", flex: 1, headerClass: "ag-header-center", cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" } },
    { headerName: "Duration(s)", field: "duration", flex: 1, headerClass: "ag-header-center", cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" } },
    { headerName: "Start Date", field: "startDate", flex: 1, headerClass: "ag-header-center", cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" } },
    { headerName: "End Date", field: "endDate", flex: 1, headerClass: "ag-header-center", cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" } },
    { headerName: "Type", field: "type", flex: 1, headerClass: "ag-header-center", cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" } },
    { headerName: "Reason(s)", field: "reason", flex: 1, headerClass: "ag-header-center", cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" } },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: RecallButtonRenderer,
      flex: 1,
      headerClass: "ag-header-center", 
      cellStyle: { textAlign: "center", display: "flex", justifyContent: "center",alignItems:"center" },
    },
  ];

  return (
    <>
      <Card elevation={3} sx={{ padding: 2, borderRadius: 5 }}>
        <CardContent>
          <Typography variant="h6" className="!font-semibold !mb-4" gutterBottom>
            Ongoing Leave Applications
          </Typography>
          <div className="ag-theme-alpine" style={{ width: "100%", height: "auto" }}>
            <AgGridReact<LeaveRecord>
              rowData={rowData}
              columnDefs={columnDefs}
              domLayout="autoHeight"
              getRowStyle={(params) =>
                params.node.rowIndex % 2 === 0 ? { background: "#f4f8fb" } : {}
              }
              headerHeight={40}
              rowHeight={45}
            />
          </div>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={handleClose} maxWidth={false} PaperProps={{sx: {width: "60%",borderRadius: "16px",padding:1}, }}>
        
        <DialogContent sx={{
      overflowY: 'auto',
      scrollbarWidth: 'none', // Firefox
      '&::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari
      },
    }}>
          <Grid container direction="column" spacing={2}>
            <Grid container direction="column" spacing={0}>
                <CallIcon fontSize='large'/>
                <Typography variant="h6" className="!font-semibold !mt-2">Leave Recall</Typography>
                <Typography className='!text-xs'>Fill in the required details to recall this employee</Typography>
            </Grid>
            <Grid container spacing={1}>
                <Grid container gap={1} size={12}>
                    <Typography>Employee Name</Typography>
                    <TextField required variant="outlined" value={selectedUser?.name || ""} disabled className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                </Grid>
                <Grid container gap={1} size={12}>
                    <Typography>Department</Typography>
                    <TextField required variant="outlined" value={selectedUser?.name || ""} disabled className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                </Grid>
                <Grid container size={12} spacing={3}>
                    <Grid container gap={1} size={{xs:12,sm:6}}>
                        <Typography>Start Date</Typography>
                        <TextField required variant="outlined" value={selectedUser?.startDate || ""} disabled className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                    </Grid>
                    <Grid container gap={1} size={{xs:12,sm:6}}>
                        <Typography>End Date</Typography>
                        <TextField required variant="outlined" value={selectedUser?.endDate || ""} disabled className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                    </Grid>
                </Grid>
                <Grid container size={12} spacing={3}>
                    <Grid container gap={1} size={{xs:12,sm:6}}>
                        <Typography>Remaining Days</Typography>
                        <TextField required variant="outlined" value={selectedUser?.duration -2 || ""} disabled className="!w-full" type="number" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>
                    </Grid>
                    <Grid container gap={1} size={{xs:12,sm:6}}>
                        <Typography>New Resumption date</Typography>
                        <TextField required variant="outlined" className="!w-full" type="date" size="small" sx={{"& .MuiOutlinedInput-root":{borderRadius:'12px', backgroundColor:"#E3EDF9"}}}/>    
                    </Grid>
                </Grid>
                <Grid container gap={1} size={12}>
                    <Typography>Relief Officer</Typography>
                    <TextField required variant="outlined" className="!w-full" type="text" size="small" sx={{"& .MuiOutlinedInput-root": {borderRadius: '12px',backgroundColor: "#E3EDF9","& input[type=number]": {MozAppearance: "textfield",},"& input[type=number]::-webkit-outer-spin-button": {WebkitAppearance: "none",margin: 0,},"& input[type=number]::-webkit-inner-spin-button": {WebkitAppearance: "none",margin: 0,},},}}/>
                </Grid>
                <Grid container spacing={3} size={12} mt={2}>
                    <Grid size={{xs:12,sm:6}}>
                        <Button variant="contained" className="w-full !bg-[#3F861E]" >Initiate Recall</Button>
                    </Grid>
                    <Grid size={{xs:12,sm:6}}>
                        <Button variant="outlined" onClick={()=>handleClose()} className="w-full !border-[#F50707] !text-[#F50707]">Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Recall;
