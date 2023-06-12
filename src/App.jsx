import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Orders } from "./pages/Orders/Orders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Home />} />
          <Route path="/pedidos" element={<Orders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
