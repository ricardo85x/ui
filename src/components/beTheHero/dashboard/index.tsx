import { BsTrash } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { RootComponent } from "../index";
import { Container, Content, PageStyle } from "./styles";

export function Dashboard() {
  const data = [
    {
      id: "case1",
      name: "Cadelinha Atropelada",
      description:
        "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
      value: "R$ 120,00 reais",
    },
    {
      id: "case2",
      name: "Cadelinha Atropelada",
      description:
        "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
      value: "R$ 120,00 reais",
    },
    {
      id: "case3",
      name: "Cadelinha Atropelada",
      description:
        "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
      value: "R$ 120,00 reais",
    },
    {
      id: "case4",
      name: "Cadelinha Atropelada",
      description:
        "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
      value: "R$ 120,00 reais",
    },
    {
      id: "case5",
      name: "Cadelinha Atropelada",
      description:
        "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
      value: "R$ 120,00 reais",
    },
  ];
  return (
    <RootComponent>
      <Container>
        <Header />
        <Content>
          <strong>Casos Cadastrados</strong>
          <div className="cards">
            {data.map((card) => (
              <div key={card.id} className="card">
                <div className="left">
                  <div>
                    <strong>Caso</strong>
                    <p>{card.name}</p>
                  </div>
                  <div>
                    <strong>Descrição</strong>
                    <p>{card.description}</p>
                  </div>
                  <div>
                    <strong>valor</strong>
                    <p>{card.value}</p>
                  </div>
                </div>

                <div className="right">
                  <a href="#delete">
                    <BsTrash color="var(--gray-300)" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Content>
        <PageStyle />
        <Outlet />
      </Container>
    </RootComponent>
  );
}
