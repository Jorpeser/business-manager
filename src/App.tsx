import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import PatientsPage from "./pages/PatientsPage";
import InventoryPage from "./pages/InventoryPage";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import ReportsPage from "./pages/ReportsPage";

const Wrapper = styled.div`
  margin-top: 7rem;
  padding: 2.4rem 3.2rem;
`

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
