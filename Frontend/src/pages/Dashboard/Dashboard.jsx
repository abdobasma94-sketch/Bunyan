import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Developers from "./Developers";  
import Projects from "./Projects";
import FormDashboard from "../../components/Dashborad/UI/FormDashboard/FormDashboard";
import TableDashboard from "../../components/Dashborad/UI/TableDashboard/TableDashboard";

function Dashboard() {
  return (
    <>
      <Navbar adminName="Basma" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            
            <Route path="/Users" element={<Users />}> 
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="/Developers" element={<Developers />}> 
              <Route index element={<TableDashboard isDeveloper={true} />} />
              <Route path="add" element={<FormDashboard isDeveloper={true} />} />
            </Route>

            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;