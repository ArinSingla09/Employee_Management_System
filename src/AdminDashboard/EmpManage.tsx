import { AgGridReact } from "ag-grid-react";
import {Button,Card,CardContent,Grid,Typography,Box,IconButton} from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";


const EmpManage = () => {
    const navigate = useNavigate();
  const rowData = [
    {
      name: "yeabsire abebe",
      dept: "Design",
      title: "UI UX Designer",
      start: "28/04/2022",
      category: "Full time",
      gender: "Female",
    },
    {
      name: "feven tesfaye",
      dept: "IT",
      title: "Backend Engineer",
      start: "28/04/2022",
      category: "Remote",
      gender: "Female",
    },
    {
      name: "AMANUEL BEYENE",
      dept: "Design",
      title: "UI UX Designer",
      start: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "tedla atalay",
      dept: "Design",
      title: "UI UX Designer",
      start: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "redwan husein",
      dept: "Design",
      title: "UI UX Designer",
      start: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "abel beyené",
      dept: "Design",
      title: "UI UX Designer",
      start: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "temesgen melak",
      dept: "Design",
      title: "UI UX Designer",
      start: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
  ];

  const ViewProfileCellRenderer = (params: any) => {
  const handleClick = () => {
  const nameSlug = params.data.name.toLowerCase().replace(/\s+/g, "-");
  navigate(`/Admin-dash/profile/${nameSlug}/personal`);
};


  return (
    <Box display="flex" justifyContent="center">
      <Button variant="contained" size="small" sx={{backgroundColor: "#0052CC",textTransform: "none",borderRadius: "6px",fontWeight: "bold",minWidth: "110px", }} onClick={handleClick}>
        View Profile
      </Button>
    </Box>
  );
};


  const columnDefs = [
    { headerName: "Name(s)", field: "name", flex: 1 ,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
    { headerName: "Dept", field: "dept", flex: 1 ,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
    { headerName: "Job Title", field: "title", flex: 1 ,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
    { headerName: "Start Date", field: "start", flex: 1 ,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
    { headerName: "Category", field: "category", flex: 1 ,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
    { headerName: "Gender", field: "gender", flex: 1 ,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
    {headerName: "Actions",field: "actions",cellRenderer: ViewProfileCellRenderer,flex: 1,suppressMenu: true,sortable: false,autoHeight: true,cellStyle: { textAlign: "center",padding:10 },
    headerClass: "ag-header-center"},
  ];

  return (
    <Card sx={{ margin: 4,height: "100%",borderRadius: "12px", boxShadow: 3 }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Employee Management
          </Typography>
          <Box>
            <IconButton sx={{ mr: 1 }} title="Filter">
              <FilterListIcon />
            </IconButton>
            <Button variant="contained" color="success" startIcon={<DownloadIcon />} sx={{textTransform: "none",borderRadius: "6px",fontWeight: "bold", }}>
              Export
            </Button>
          </Box>
        </Grid>
        
        <div className="ag-theme-alpine" style={{ width: "100%", height: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            domLayout="autoHeight"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EmpManage;
