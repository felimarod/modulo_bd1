import { useNavigate, useParams } from "react-router";
import EnhancedTable from "../../components/Dashboard/mails/EnhancedTable";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const Mails = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { carpeta } = useParams();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, []);

  return <EnhancedTable carpeta={carpeta!} />;
};

export default Mails;
