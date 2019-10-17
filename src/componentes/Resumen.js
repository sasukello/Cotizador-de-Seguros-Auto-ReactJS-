import React, { Component } from 'react';
import {primeraMayuscula} from '../Helper';
//import Resultado from './Resultado';

class Resumen extends Component {
    mostrarResumen = () => {
    const {marca,year,plan} = this.props.datos;

    if(!marca || !year || !plan) return null;

        return(
            <div className="resumen" >
                <h2>Resumen de la Cotizacion</h2>
                <p>Marca: { primeraMayuscula( marca ) }</p>
                <p>Año: { year}</p>
                <p>Plan: { primeraMayuscula( plan ) }</p>
            </div>
        )
        
    }
    render() {
        
        return (
            <div>
                { this.mostrarResumen() }
        
            </div>
        );
    }
}

export default Resumen;