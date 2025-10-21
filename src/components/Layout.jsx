import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main style={{ padding: "1rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
