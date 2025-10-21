import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

// Mocka o Header para isolar o teste do Layout
jest.mock("../components/Header", () => () => <header>Mock Header</header>);

describe("Layout.jsx — Estrutura principal da aplicação", () => {
  it("deve renderizar o Header, o conteúdo filho e o Footer", () => {
    render(
      <Layout>
        <p>Conteúdo interno</p>
      </Layout>
    );

    // Verifica se o cabeçalho foi renderizado
    expect(screen.getByText("Mock Header")).toBeInTheDocument();

    // Verifica se o conteúdo filho está presente
    expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();

    // Verifica se o rodapé com o nome da pousada foi renderizado
    expect(screen.getByText(/Pousada Pedra Furada/i)).toBeInTheDocument();
  });
});
