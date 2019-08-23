import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import RouterComponent from "./components/RouterComponent.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <RouterComponent />
    </main>
  );
}
