// src/tests/pages/TarefasPage.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../../pages/TarefasPage";

describe("TarefasPage.jsx — Gerenciamento das tarefas diárias", () => {
  test("deve atualizar o status da tarefa ao clicar no botão", () => {
    render(<TarefasPage />);
    // Seleciona o primeiro botão "Atualizar"
    const botao = screen.getAllByText("Atualizar")[0];
    // Simula o clique do usuário
    fireEvent.click(botao);
    // Verifica se o status foi alterado para "Em andamento" ou "Concluída"
    expect(screen.getByText(/Em andamento|Concluída/)).toBeInTheDocument();
  });
});
