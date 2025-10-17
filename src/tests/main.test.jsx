import React from "react";
import * as ReactDOMClient from "react-dom/client";

// Mocka o BrowserRouter para evitar dependência real do react-router-dom
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

// Mocka o App — precisa usar caminho absoluto para o Jest resolver direito
jest.mock("../App", () => () => <div>Mocked App</div>, { virtual: true });


// Mocka o ReactDOM.createRoot() e sua função render()
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe("main.jsx", () => {
  it("deve montar o App dentro do elemento root", () => {
    // Simula o DOM com um elemento root
    document.body.innerHTML = '<div id="root"></div>';

    // Reseta módulos para garantir que o require reexecute o main.jsx
    jest.resetModules();
    const ReactDOMClient = require("react-dom/client");
    const mockCreateRoot = jest.spyOn(ReactDOMClient, "createRoot");

    // Importa o main.jsx — isso aciona a renderização mockada
    require("../main.jsx");

    // Verifica se o createRoot foi chamado
    expect(mockCreateRoot).toHaveBeenCalled();

    // Verifica se o root existe
    expect(document.getElementById("root")).not.toBeNull();
  });
});

