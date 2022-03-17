import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/be-the-hero">Be The Hero</Link>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
