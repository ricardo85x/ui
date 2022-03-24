import { MdArrowLeft } from "react-icons/md";
import { RootComponent } from "..";
import { Container, Content } from "./styles";

export function NewCase() {
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
              alt="Logo be the hero preto e vermelho"
            />

            <strong>Cadastrar novo caso</strong>

            <p>
              Escreva o caso detalhadamente para encontrar um heroi para
              resolver isto
            </p>

            <a href="/be-the-hero">
              <MdArrowLeft size="2.5em" color="var(--red-hero)" />
              Voltar para o home
            </a>
          </div>
          <div className="right">
            <input type="text" name="title" placeholder="Titulo do caso" />
            <textarea name="description" placeholder="Descrição" />
            <input type="text" name="amount" placeholder="Valores em reais" />
            <div>
              <button type="button">Cancelar</button>
              <button onClick={handleSubmit} type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </Content>
      </Container>
    </RootComponent>
  );
}
