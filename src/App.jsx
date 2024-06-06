import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import StudentList from "./pages/StudentList.jsx";
import Accounts from "./pages/Accounts.jsx";
import DormList from "./pages/DormList.jsx";
import RoomList from "./pages/RoomList.jsx";
import UserList from "./pages/UserList.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/students" element={<StudentList />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/dorms" element={<DormList />} />
        <Route exact path="/rooms" element={<RoomList />} />
        <Route exact path="/users" element={<UserList />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;