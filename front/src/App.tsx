import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./layout/AuthLayout";
import DashBoardLayout from "./layout/DashBoardLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Mails from "./pages/Dashboard/Mails";
import AuthProvider from "./pages/Auth/AuthProvider";
export const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};
