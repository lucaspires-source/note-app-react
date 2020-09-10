import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(){
    super();
    this.titulo=""
    this.texto=""
  }
  
  handleMudançaTitulo(event){
    this.titulo= event.target.value;
  }
  handleMudançaTexto(event){
    this.texto=event.target.value;  
  }
  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudançaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudançaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
