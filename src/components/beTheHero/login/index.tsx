import { MdExitToApp } from "react-icons/md";
import { Container, Content } from "./styles";

export function Login() {
  return (
    <Container>
      <Content>
        <div className="left">
          <img
            src="/assets/be-the-hero/images/logo.png"
            alt="Logo be the hero"
          />
          <div className="form">
            <strong>Faça seu logon</strong>
            <input type="email" placeholder="Sua ID" />
            <button type="submit">Login</button>
            <div>
              <a href="#register">
                <MdExitToApp size="1.2em" color="var(--red-hero)" />
                Não tenho cadastro
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            src="/assets/be-the-hero/images/pessoas.png"
            alt="Imagem com pessoas"
          />
        </div>
      </Content>
    </Container>
  );
}
