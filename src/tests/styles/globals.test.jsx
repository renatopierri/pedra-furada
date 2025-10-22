// src/tests/styles/globals.test.jsx
test("o arquivo de estilos globais deve ser importável", () => {
  const css = require("../../styles/globals.css");
  expect(css).toBeDefined();
});
