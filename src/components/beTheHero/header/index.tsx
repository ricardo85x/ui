import { MdPowerSettingsNew } from "react-icons/md";
import { RootComponent } from "..";
import { Content, Container } from "./styles";

export function Header() {
  return (
    <RootComponent>
      <Container>
        <Content>
          <div className="left">
            <img
              src="/assets/be-the-hero/images/logo.png"
              alt="Logo be the hero vermelho e preto"
            />
            <span>Bem vinda, APAD</span>
          </div>
          <div className="right">
            <button type="button">Cadastrar novo caso</button>
            <a href="/be-the-hero/login">
              <MdPowerSettingsNew size="1.3rem" color="var(--red-hero)" />
            </a>
          </div>
        </Content>
      </Container>
    </RootComponent>
  );
}
