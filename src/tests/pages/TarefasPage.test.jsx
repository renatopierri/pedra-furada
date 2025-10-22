// src/tests/pages/TarefasPage.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../../pages/TarefasPage";

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
