import { MdPowerSettingsNew } from "react-icons/md";
import { RootComponent } from "..";
import { Content, Container } from "./styles";

export function Header() {
  const handleNewCase = () => {
    window.location.href = "/be-the-hero/new-case";
  };
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
            <button
              onClick={handleNewCase}
              title="Cadastrar novo caso"
              type="button"
            >
              Cadastrar novo caso
            </button>
            <a href="/be-the-hero/login" title="Sair">
              <MdPowerSettingsNew size="1.3rem" color="var(--red-hero)" />
            </a>
          </div>
        </Content>
      </Container>
    </RootComponent>
  );
}
