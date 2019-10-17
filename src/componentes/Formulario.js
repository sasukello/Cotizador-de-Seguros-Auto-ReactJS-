import React, { Component } from 'react';


class Formulario extends Component {
    
    //refs  son para leer los valores de los campos de un formulario
    
    marca= React.createRef();
    year = React.createRef();
    basico = React.createRef();
    completo = React.createRef();
    
    CotizarSeguro=(e)=>{
        e.preventDefault();

        //LEER PLAN
    const plan = this.basico.current.checked ? 'basico' :'completo';
        
        //OBTENER LOS DATOS

        // console.log(this.marca.current.value);

        //CREAR LOS OBJETOS
        const infoAuto = {
            marca: this.marca.current.value,
            year: this.year.current.value,
            plan : plan
        }

        //console.log(infoAuto);

        //ENVIARLO AL COMPONENTE PRINCIAPL
        this.props.CotizarSeguro(infoAuto);

        //RESETEAR FORMULARIO EN REACT
        e.currentTarget.reset()

    }
    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.CotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marca} >
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.year}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" value="basico" ref={this.basico}/> Básico
                    <input type="radio" name="plan" value="completo" ref={this.completo}/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
                
            
            </form>

          
        );
    
    }
}

export default Formulario;