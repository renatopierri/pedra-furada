import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
// Importa os módulos necessários do Node
import fs from "fs";
import path from "path";

describe("Header", () => {
  test("deve renderizar o título da pousada", () => {
    render(<Header />);
    expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
  });
});

describe("Verifica se importou o React", () => {
  it('deve conter "import React from \\"react\\";" no topo do arquivo', () => {
    // Caminho absoluto para o arquivo index.jsx
    const filePath = path.resolve(__dirname, "../../components/Header.jsx");

    // Lê o conteúdo do arquivo como texto
    const content = fs.readFileSync(filePath, "utf-8");

    // Verifica se o arquivo começa com uma importação de React (ex: "import React ...")
    expect(/^\s*import\s+React\b/.test(content)).toBe(true);

  });
});
