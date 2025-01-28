import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Auth/Login";
import AuthLayout from "./layout/AuthLayout";
import Register from "./pages/Auth/Register";
import DashBoardLayout from "./layout/DashBoardLayout";
import Mails from "./pages/Dashboard/Mails";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="dashboard" element={<DashBoardLayout />}>
          <Route index path="mails" element={<Mails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
