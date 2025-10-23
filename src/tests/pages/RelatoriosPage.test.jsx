// src/tests/pages/RelatoriosPage.test.jsx
import { render, screen } from "@testing-library/react";
import RelatoriosPage from "../../pages/RelatoriosPage";

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
    const filePath = path.resolve(__dirname, "../pages/index.jsx");

    // Lê o conteúdo do arquivo como texto
    const content = fs.readFileSync(filePath, "utf-8");

    // Remove espaços e quebras de linha do início e verifica se começa com o import
    expect(content.trimStart().startsWith('import React from "react";')).toBe(
      true
    );
  });
});
