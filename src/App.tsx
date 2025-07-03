import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserRegister from './UserRegister';
import Leave from './Dashboard/Leave';
import LogIn from './LogIn';
import DashBoard from './Dashboard/Dashboard';
import Annual from './Dashboard/Annual';
import Sick from './Dashboard/Sick';
import Profile from './Dashboard/UpdateProfile/Profile';
import Personal from './Dashboard/UpdateProfile/Personal';
import Contact from './Dashboard/UpdateProfile/Contact';
import Kin from './Dashboard/UpdateProfile/Kin';
import Details from './Dashboard/UpdateProfile/Details';
import Education from './Dashboard/UpdateProfile/Education';
import Guarantor from './Dashboard/UpdateProfile/Guarantor';
import GuarantDetails from './Dashboard/UpdateProfile/GuarantDetails';
import Family from './Dashboard/UpdateProfile/Family';
import ViewFamily from './Dashboard/UpdateProfile/ViewFamily';
import Finance from './Dashboard/UpdateProfile/Finance'; 
import FinDetails from './Dashboard/UpdateProfile/FinDetails';
import Job from './Dashboard/UpdateProfile/Job';
import UploadDoc from './Dashboard/UpdateProfile/UploadDoc';
import AdminLogin from './AdminLogin';
import NavBar from './AdminDashboard/NavBar';
import Dash from './AdminDashboard/Dash';
import LeaveManage from './AdminDashboard/LeaveManage';
import Index from './AdminDashboard/LeaveManage/Index';
import Settings from './AdminDashboard/LeaveManage/Settings';
import Recall from './AdminDashboard/LeaveManage/Recall';
import History from './AdminDashboard/LeaveManage/History';
import EmpManage from './AdminDashboard/EmpManage';
import ProfileAdmin from './AdminDashboard/EmpManage/ProfileAdmin';
import ContactAdmin from './AdminDashboard/EmpManage/ContactAdmin';
import PerformManage from './AdminDashboard/PerfromManage';
import PerformIndex from './AdminDashboard/PerformManage/Index';
import Setup from './AdminDashboard/PerformManage/Setup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/leave" element={<Leave />} />
        <Route path="/dashboard/leave/annual" element={<Annual />} />
        <Route path="/dashboard/update-profile" element={<Profile />} >
          <Route index element={<Personal />} />
          <Route path="personal" element={<Personal />} />
          <Route path="contact" element={<Contact />} />
          <Route path="next-of-kin" element={<Kin />} />
          <Route path='education' element={<Education />} />
          <Route path="education/records" element={<Details />} />
          <Route path="guarantor" element={<Guarantor />} />
          <Route path="guarantor/details" element={<GuarantDetails />} />
          <Route path="family" element={<Family />} />
          <Route path="family/details" element={<ViewFamily />} />
          <Route path="job" element={<Job />} />
          <Route path="job/upload" element={<UploadDoc /> } />
          <Route path='financial' element={<Finance />} />
          <Route path='financial/details' element={<FinDetails />} />
        </Route>
        <Route path="/dashboard/leave/sick" element={<Sick />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<LogIn />} />

        <Route path="/Admin-dash" element={<NavBar />}>
            <Route index element={<Dash />} />
            
            <Route path="LeaveManage" element={<LeaveManage />}>
              <Route index element={<Index />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recall" element={<Recall />} />
              <Route path="history" element={<History />} />
            </Route>

            <Route path="EmpManage" element={<EmpManage />} />
            <Route path="Performance" element={<PerformManage />}>
              <Route index element={<PerformIndex />}/>
              <Route path="setup" element={<Setup />} />
            </Route>
            
            <Route path="profile/:nameSlug" element={<ProfileAdmin />}>
              <Route path="personal" element={<Personal />} />
              <Route path="contact" element={<ContactAdmin />} />
              <Route path="next-of-kin" element={<Kin />} />
              <Route path="education" element={<Education />} />
              <Route path="education/records" element={<Details />} />
              <Route path="guarantor" element={<Guarantor />} />
              <Route path="guarantor/details" element={<GuarantDetails />} />
              <Route path="family" element={<Family />} />
              <Route path="family/details" element={<ViewFamily />} />
              <Route path="job" element={<Job />} />
              <Route path="job/upload" element={<UploadDoc />} />
              <Route path="financial" element={<Finance />} />
              <Route path="financial/details" element={<FinDetails />} />
            </Route>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
