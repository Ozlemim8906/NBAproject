import logo from "../assets/nba-logo.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Header = () => {
  return (
    <Container>
      <Image src={logo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
};

export default Header;
