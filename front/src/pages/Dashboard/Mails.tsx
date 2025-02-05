import { useNavigate, useParams } from "react-router";
import EnhancedTable from "../../components/Dashboard/mails/EnhancedTable";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const Mails = () => {
  const { isAuthenticated } = useAuth();
  const { carpeta } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated]);

  return <EnhancedTable carpeta={carpeta!} />;
};

export default Mails;
