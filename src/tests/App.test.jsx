import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

// Mocka os componentes e páginas para testar apenas o roteamento
jest.mock("../components/Layout", () => ({ children }) => (
  <div data-testid="layout">{children}</div>));

jest.mock("../pages/LoginPage", () => () => <div>Login Page Mock</div>);
jest.mock("../pages/TarefasPage", () => () => <div>Tarefas Page Mock</div>);
jest.mock("../pages/RelatoriosPage", () => () => <div>Relatórios Page Mock</div>);

describe("App.jsx — Roteamento principal da SPA", () => {
  it("deve redirecionar '/' para '/login'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>
    );
    expect(screen.getByText("Login Page Mock")).toBeInTheDocument();
  });
  it("deve renderizar a página de login ao acessar '/login'", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}><App /></MemoryRouter>
    );
    expect(screen.getByText("Login Page Mock")).toBeInTheDocument();
  });

  it("deve renderizar a página de tarefas ao acessar '/tarefas'", () => {
    render(
      <MemoryRouter initialEntries={["/tarefas"]}> <App /></MemoryRouter>
    );
    expect(screen.getByText("Tarefas Page Mock")).toBeInTheDocument();
  });

  it("deve renderizar a página de relatórios ao acessar '/relatorios'", () => {
    render(
      <MemoryRouter initialEntries={["/relatorios"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Relatórios Page Mock")).toBeInTheDocument();
  });

  it("deve exibir 'Página não encontrada' ao acessar uma rota inválida", () => {
    render(
      <MemoryRouter initialEntries={["/rota-invalida"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Páginanão encontrada")).toBeInTheDocument();
  });
});
