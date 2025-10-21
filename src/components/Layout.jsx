import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>{children}</main>
      <footer>
        <small>© 2025 Pousada Pedra Furada</small>
      </footer>
    </div>
  );
}
