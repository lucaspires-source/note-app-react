import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  
  
  
  constructor(){
    super()
    this.state={
      notas:[]
    }
  }
  
  criarNota(titulo,texto){
    const novaNota ={titulo,texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado ={
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let ArrayNotas = this.state.notas
    ArrayNotas.splice(index,1)
    this.setState({notas:ArrayNotas})
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
