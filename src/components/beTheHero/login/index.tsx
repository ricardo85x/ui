import { MdExitToApp } from "react-icons/md";
import { RootComponent } from "..";
import { Container, Content } from "./styles";

export function Login() {
  const handleSubmit = () => {
    window.location.href = "/be-the-hero";
  };

  return (
    <RootComponent>
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
              <button onClick={handleSubmit} type="button">
                Login
              </button>
              <div>
                <a href="/be-the-hero/register">
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
    </RootComponent>
  );
}
