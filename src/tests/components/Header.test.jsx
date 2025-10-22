import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header", () => {
  test("deve renderizar o título da pousada", () => {
    render(<Header />);
    expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
  });
});
