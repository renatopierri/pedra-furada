// src/tests/pages/LoginPage.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import fs from "fs";
import path from "path";

describe("LoginPage.jsx — Comportamento do formulário de login", () => {
  beforeEach(() => {
    window.alert = jest.fn(); // mock do alert
    jest.clearAllMocks();     // limpa mocks antes de cada teste
  });

  test("deve exibir alerta se usuário ou senha estiverem vazios", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Simula clique no botão "Entrar" sem preencher campos
    fireEvent.click(screen.getByText("Entrar"));

    // Espera que apareça o alerta de campos vazios
    expect(window.alert).toHaveBeenCalledWith("Por favor, preencha usuário e senha.");
  });

  test("deve redirecionar ao preencher login corretamente", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Preenche os campos
    fireEvent.change(screen.getByLabelText("Usuário:"), { target: { value: "Maria" } });
    fireEvent.change(screen.getByLabelText("Senha:"), { target: { value: "123" } });

    // Clica no botão "Entrar"
    fireEvent.click(screen.getByText("Entrar"));

    // Espera o alerta de sucesso
    expect(window.alert).toHaveBeenCalledWith("Bem-vindo, Maria!");
  });
});

describe("Verifica se importou o React", () => {
  it('deve conter "import React from \\"react\\";" no topo do arquivo', () => {
    // Caminho absoluto para o arquivo index.jsx
    const filePath = path.resolve(__dirname, "../../pages/LoginPage.jsx");

    // Lê o conteúdo do arquivo como texto
    const content = fs.readFileSync(filePath, "utf-8");

    // Verifica se o arquivo começa com uma importação de React (ex: "import React ...")
    expect(/^\s*import\s+React\b/.test(content)).toBe(true);


  });
});

