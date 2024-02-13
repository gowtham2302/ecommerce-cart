import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import {Store} from "./pages/Store";
import {Transactions} from "./pages/Transactions";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import MultiTab from "./components/MultiTab";

function App() {
  return (
    <ShoppingCartProvider>
    <Navbar/>
    <Container fluid>
      <Routes>
        <Route path="/" element={<Store/>} />
        <Route path="/tabs" element={<MultiTab />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}
export default App;
