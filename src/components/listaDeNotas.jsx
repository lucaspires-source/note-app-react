import React from "react";
import  { Component } from "react";
import CardNota from "./CardNota";

class ListadeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
            <CardNota/>
            <CardNota/>
            <CardNota/>
        </li>
      </ul>
    );
  }
}export default  ListadeNotas 