import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "./layout/AuthLayout";
import DashBoardLayout from "./layout/DashBoardLayout";
import AuthProvider from "./pages/Auth/AuthProvider";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Mail from "./pages/Dashboard/Mail";
import Mails from "./pages/Dashboard/Mails";
import NewMail from "./pages/Dashboard/NewMail";
export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index path="auth/login" element={<Login />} />
            <Route path="auth/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </Route>
          <Route element={<DashBoardLayout />}>
            <Route path="dashboard/mails/:carpeta" element={<Mails />} />
            <Route path="dashboard/mail/:idMensaje" element={<Mail />} />
            <Route path="dashboard/new-mail" element={<NewMail />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
