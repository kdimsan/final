import { Container } from "./style";

import Logout from "../../assets/logout.svg";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth";

export function LogoutButton({ title }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    signOut();
  };

  return (
    <Container onClick={handleSignOut}>
      <img src={Logout} alt="Sair da conta" />
      <span> {title} </span>
    </Container>
  );
}
