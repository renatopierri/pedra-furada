// src/tests/pages/TarefasPage.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../../pages/TarefasPage";
import fs from "fs";
import path from "path";


describe("TarefasPage.jsx — Gerenciamento das tarefas diárias", () => {
  test("deve atualizar o status da tarefa ao clicar no botão", () => {
    // Renderiza o componente
    render(<TarefasPage />);

    // Seleciona o primeiro botão "Atualizar"
    const botao = screen.getAllByText("Atualizar")[0];

    // Simula o clique do usuário no primeiro item
    fireEvent.click(botao);

    // Verifica se o status do primeiro item mudou para "Em andamento"
    expect(screen.getByText("Em andamento")).toBeInTheDocument();
  });
});

describe("Verifica se importou o React", () => {
  it('deve conter "import React from \\"react\\";" no topo do arquivo', () => {
    // Caminho absoluto para o arquivo index.jsx
    const filePath = path.resolve(__dirname, "../../pages/index.jsx");

    // Lê o conteúdo do arquivo como texto
    const content = fs.readFileSync(filePath, "utf-8");

    // Verifica se o arquivo começa com uma importação de React (ex: "import React ...")
    expect(/^\s*import\s+React\b/.test(content)).toBe(true);

  });
});
