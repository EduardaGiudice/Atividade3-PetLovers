import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaClientes from "./pages/Clientes/ListaClientes";
import FormularioCadastroCliente from "./pages/Clientes/FormularioCadastroCliente";
import FormularioEditaCliente from "./pages/Clientes/FormularioEditaCliente";
import ListaPets from "./pages/Pets/ListaPets";
import FormularioCadastroPet from "./pages/Pets/FormularioCadastroPet";
import FormularioEditaPet from "./pages/Pets/FormularioEditaPet";
import ListaProdServ from "./pages/ProdutoServico/ListaProdServ";
import ListaVendas from "./pages/Vendas/ListaVendas";
import FormularioCadastroVenda from "./pages/Vendas/FormularioCadastroVenda";
import FormularioEditaVenda from "./pages/Vendas/FormularioEditaVenda";
import MaisConsumidos from "./pages/Hanking/MaisConsumidos";
import ClientesConsumidores from "./pages/Hanking/ClientesConsumidores";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaClientes />} />
        <Route path="/CadastrarCliente"element={<FormularioCadastroCliente/>}/>
        <Route path="/EditarCliente" element={<FormularioEditaCliente/>}/>
        <Route path="/ListaPets" element={<ListaPets/>}/>
        <Route path="/CadastrarPet"element={<FormularioCadastroPet/>}/>
        <Route path="/EditarPet" element={<FormularioEditaPet/>} />
        <Route path="/ListaProdServ" element={<ListaProdServ/>}/>
        <Route path="/ListaVendas" element={<ListaVendas/>}/>
        <Route path="/CadastrarVenda"element={<FormularioCadastroVenda/>}/>
        <Route path="/EditarVenda" element={<FormularioEditaVenda/>} />
        <Route path="/ClientesConsumidores"element={<ClientesConsumidores/>}/>
        <Route path="/MaisConsumidos" element={<MaisConsumidos/>} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
