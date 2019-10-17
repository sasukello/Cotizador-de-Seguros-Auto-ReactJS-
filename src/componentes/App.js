import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import { obtenerDiferenciaAnio,calcularMarca, obtenerPlan } from '../Helper';


class App extends Component{
  state ={
    resultado : '',
    datos : {}
  }

  
  CotizarSeguro = (datos) =>{
    const {marca, plan ,year} = datos;

    //Agregar una base de 2000,
    let resultado = 2000;
    //obtener la diferencia de años 
    const diferencia = obtenerDiferenciaAnio(year);
    console.log('La diferencia es '+ diferencia);
    // y por cada año restar el 3 porciento  al valor del seguro
    resultado-=((diferencia * 3) * resultado ) / 100;
    //Americano 15 porciento, asiatico 5 porciento, europeo 30 porciento
    //al valor actual
    resultado = calcularMarca(marca)*resultado;
    //el plan del auto, el basico incrementa el valor 20 porciento
    //y cobertura completa 50 porciento

    let incrementoPlan = obtenerPlan(plan);
    

    //dependiendo del plan , se incrementa
    resultado = parseFloat( incrementoPlan * resultado).toFixed(2);


    //crear objeto para el resumen
    const dataAuto = {
      marca: marca,
      plan: plan,
      year: year
    }

    //ya tenemos el costo.
    this.setState({
      resultado : resultado,
      datos: dataAuto
    })
    console.log('aumento del plan '+incrementoPlan);
    console.log(resultado);

  }
  
  render(){
    return(
      <div className = "contenedor">
        <Header
        titulo = 'Cotizador de Seguro de Auto'
        />

          <div className="contenedor-formulario">
          <Formulario
          CotizarSeguro = {this.CotizarSeguro}
          />

          <Resumen
          datos={this.state.datos}
          //resultado={this.state.resultado}
          />

          <Resultado
              monto = {this.state.resultado}
           />

          </div>
      </div>
      
    );
  }
}
export default App;
