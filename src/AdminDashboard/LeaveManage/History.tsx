import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Card,
  Grid,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Action cell renderer
const ActionCellRenderer = forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    event.stopPropagation(); // Prevent AG Grid row click
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleAction = (action) => {
    handleCloseMenu();
    console.log(`${action} clicked for`, props.data);
  };

  useImperativeHandle(ref, () => ({
    refresh: () => true,
  }));

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Button
        variant="contained"
        size="small"
        className="!bg-[#253D90]"
        onClick={handleOpenMenu}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.75rem",
          minWidth: 90,
        }}
      >
        Actions ⏷
      </Button>
      <Menu anchorEl={anchorEl} className="" open={Boolean(anchorEl)} onClose={handleCloseMenu} onClick={(e) => e.stopPropagation()} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}>
        <MenuItem onClick={() => handleAction("Approve")}>Approve</MenuItem>
        <MenuItem onClick={() => handleAction("Decline")}>Decline</MenuItem>
        <MenuItem onClick={() => handleAction("View Details")}>
          View Details
        </MenuItem>
      </Menu>
    </Box>
  );
});

const History = () => {
  const columnDefs = [
    {
      headerName: "Name(s)",
      field: "name",
      flex: 1,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
    {
      headerName: "Duration(s)",
      field: "duration",
      flex: 1,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
    {
      headerName: "Start Date",
      field: "startDate",
      flex: 1,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
    {
      headerName: "End Date",
      field: "endDate",
      flex: 1,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
    {
      headerName: "Type",
      field: "type",
      flex: 1,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
    {
      headerName: "Reason(s)",
      field: "reason",
      flex: 1,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
    {
      headerName: "Actions",
      field: "actions",
      flex: 1,
      cellRenderer: ActionCellRenderer,
      cellStyle: { textAlign: "center", padding: "10px" },
      headerClass: "ag-header-center",
    },
  ];

  const rowData = [
    {
      name: "abebe gemechu",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "aman bey",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Exam",
      reason: "Examination",
    },
    {
      name: "feven Tesfaye",
      duration: 120,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Maternity",
      reason: "Child Care",
    },
    {
      name: "gella moges",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "yanet tesfaye",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "beti woloe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "dawit int",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
  ];

  return (
    <Card className="!p-4 !rounded-xl">
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Typography className="!text-xl !font-bold">Leave History</Typography>
        <Button variant="contained" className="!bg-green-600 text-white">
          Export
        </Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: 450, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          frameworkComponents={{ actionCellRenderer: ActionCellRenderer }}
          defaultColDef={{ resizable: true, sortable: true }}
          rowHeight={55} // increased to give menu space
        />
      </div>
    </Card>
  );
};

export default History;
