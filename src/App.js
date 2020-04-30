import React from 'react';
import Content from './Content';
import Counter from './Counter'
import Apartamento from './apartamento.jpg'
import NomeUsuario from "./NomeUsuario";
import NomeUsuarioRef from "./NomeUsuarioRef";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Cep from "./Cep";
import StarWars from "./StarWars";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Link to={"/"}>Apartamento</Link><br/>
            <Link to={"/contadores"}>Contadores</Link><br/>
            <Link to={"/usuario"}>Usuario</Link><br/>
            <Link to={"/cep"}>Cep</Link><br/>
            <Link to={"/starwars"}>StarWars</Link><br/>

            <Route exact path={"/"}>
                <img src={Apartamento} width="150px" alt=""/>
            </Route>

            <Route path={"/contadores"}>
                <Counter />
                <Counter />
                <Counter />
            </Route>

            <Route path={"/usuario"}>
                <NomeUsuario/>
                <NomeUsuarioRef/>
                <Content name={"Ana Morita"}/>
            </Route>

            <Route path={"/cep"}>
                <Cep/>
            </Route>

            <Route path={"/starwars"}>
                <StarWars/>
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
