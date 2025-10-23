import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

// 👇 Importa os módulos necessários do Node para ler e resolver caminhos
import fs from "fs";
import path from "path";

describe("Página inicial", () => {
  it("deve renderizar o título principal", () => {
    render(<Home />);
    expect(screen.getByText("Bem-vindo à Pousada Pedra Furada")).toBeInTheDocument();
  });
});

describe("Verifica se importou o React", () => {
  it('deve conter "import React from \\"react\\";" no topo do arquivo', () => {
    // Caminho absoluto para o arquivo index.jsx
    const filePath = path.resolve(__dirname, "../../src/pages/index.jsx");

    // Lê o conteúdo do arquivo como texto
    const content = fs.readFileSync(filePath, "utf-8");

    // Verifica se o arquivo começa com uma importação de React (ex: "import React ...")
    expect(/^\s*import\s+React\b/.test(content)).toBe(true);
  });
});

