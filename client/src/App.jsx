import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import Leads from "@/pages/Leads";
import Deals from "@/pages/Deals";
import Contacts from "@/pages/Contacts";
import Tasks from "@/pages/Tasks";
import Settings from "@/pages/Settings";
import Analytics from "@/pages/Analytics";

import DashboardLayout from "@/layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;