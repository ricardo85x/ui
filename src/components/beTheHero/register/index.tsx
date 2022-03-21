import { MdArrowLeft } from "react-icons/md";
import { RootComponent } from "..";
import { Container, Content } from "./styles";

export function Register() {
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
            <strong>Cadastro</strong>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>

            <a href="/be-the-hero/login">
              <MdArrowLeft size="2.5em" color="var(--red-hero)" />
              Voltar para o logon
            </a>
          </div>

          <div className="right">
            <input type="text" name="nome-da-ong" placeholder="Nome da ONG" />
            <input type="email" name="email" placeholder="E-Mail" />
            <input type="tel" name="whatsapp" placeholder="WhatsApp" />
            <div className="location">
              <input type="text" name="cidade" placeholder="Cidade" />
              <input width={2} type="text" name="estado" placeholder="UF" />
            </div>
            <button onClick={handleSubmit} type="button">
              Cadastrar
            </button>
          </div>
        </Content>
      </Container>
    </RootComponent>
  );
}
