// src/tests/pages/RelatoriosPage.test.jsx
import { render, screen } from "@testing-library/react";
import RelatoriosPage from "../../pages/RelatoriosPage";

// 👇 Importa os módulos necessários do Node para ler e resolver caminhos
import fs from "fs";
import path from "path";

describe("RelatoriosPage.jsx — Exibição de relatórios de desempenho", () => {
  test("deve renderizar os dados do relatório corretamente", () => {
    render(<RelatoriosPage />);

    // Verifica os principais indicadores
    expect(screen.getByText("Total de tarefas: 10")).toBeInTheDocument();
    expect(screen.getByText("Concluídas: 6")).toBeInTheDocument();
    expect(screen.getByText("Em andamento: 3")).toBeInTheDocument();
    expect(screen.getByText("Pendentes: 1")).toBeInTheDocument();
  });
});

describe("Verifica se importou o React", () => {
  it('deve conter "import React from \\"react\\";" no topo do arquivo', () => {
    // Caminho absoluto para o arquivo index.jsx
    const filePath = path.resolve(__dirname, "../../pages/RelatoriosPage.jsx");

    // Lê o conteúdo do arquivo como texto
    const content = fs.readFileSync(filePath, "utf-8");

    // Verifica se o arquivo começa com uma importação de React (ex: "import React ...")
    expect(/^\s*import\s+React\b/.test(content)).toBe(true);

  });
});
