import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

// 👇 IMPORTA os módulos nativos do Node usados na verificação do arquivo
import fs from "fs";
import path from "path";

describe("Footer", () => {
  test("deve exibir o texto de direitos autorais", () => {
    render(<Footer />);
    expect(screen.getByText("© 2025 Pousada Pedra Furada")).toBeInTheDocument();
  });
});

describe("Verifica se importou o React", () => {
  it('deve conter "import React from \\"react\\";" no topo do arquivo', () => {
    // 👇 Aponta para o arquivo do componente que está sendo testado
    const filePath = path.resolve(__dirname, "../../components/Footer.jsx");

    const content = fs.readFileSync(filePath, "utf-8");

    // Verifica se o arquivo começa com uma importação de React (ex: "import React ...")
    expect(/^\s*import\s+React\b/.test(content)).toBe(true);

  });
});
