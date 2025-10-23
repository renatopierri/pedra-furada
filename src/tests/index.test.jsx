import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Página inicial", () => {
  it("deve renderizar o título principal", () => {
    render(<Home />);
    expect(screen.getByText("Bem-vindo à Pousada Pedra Furada")).toBeInTheDocument();
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

