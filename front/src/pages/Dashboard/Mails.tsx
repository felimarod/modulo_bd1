import { useNavigate } from "react-router";
import EnhancedTable from "../../components/Dashboard/mails/EnhancedTable";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const Mails = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, []);

  return <EnhancedTable />;
};

export default Mails;
