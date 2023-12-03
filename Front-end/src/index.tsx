import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";


import App from "./App";
import ListaClientes from "./pages/Clientes/ListaClientes";
import FormularioCadastroCliente from "./pages/Clientes/FormularioCadastroCliente";
import FormularioEditaCliente from "./pages/Clientes/FormularioEditaCliente";
import ListaPets from "./pages/Pets/ListaPets";
import FormularioCadastroPet from "./pages/Pets/FormularioCadastroPet";
import FormularioEditaPet from "./pages/Pets/FormularioEditaPet";
import ListaProdServ from "./pages/ProdutoServico/ListaProdServ";
import FormularioEditaVenda from "./pages/Vendas/FormularioEditaVenda";
import FormularioCadastroVenda from "./pages/Vendas/FormularioCadastroVenda";
import ListaVendas from "./pages/Vendas/ListaVendas";
import ClientesConsumidores from "./pages/Hanking/ClientesConsumidores";
import MaisConsumidos from "./pages/Hanking/MaisConsumidos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ListaClientes/>,
      },
      {
        path: "/CadastrarCliente",
        element: <FormularioCadastroCliente />,
      },

      {
        path: "/EditarCliente",
        element: <FormularioEditaCliente/>,
      },
      {
        path: "/ListaPets",
        element: <ListaPets/>,
      },
      {
        path: "/CadastrarPet",
        element: <FormularioCadastroPet />,
      },

      {
        path: "/EditarPet",
        element: <FormularioEditaPet/>,
      },
      {
        path: "/ListaProdServ",
        element: <ListaProdServ/>,
      },
      {
        path: "/ListaVendas",
        element: <ListaVendas/>,
      },
      {
        path: "/CadastrarVenda",
        element: <FormularioCadastroVenda/>,
      },

      {
        path: "/EditarVenda",
        element: <FormularioEditaVenda/>,
      },
      {
        path: "/ClientesConsumidores",
        element: <ClientesConsumidores/>,
      },      {
        path: "/MaisConsumidos",
        element: <MaisConsumidos/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);