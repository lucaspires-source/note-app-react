import React, { Component } from 'react';
import  ListadeNotas  from './components/listaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';


class App extends Component {
  render(){
  return (
    <section>
      <FormularioCadastro/>
      <ListadeNotas/>
    </section>
  )
  
  }
}

export default App;
