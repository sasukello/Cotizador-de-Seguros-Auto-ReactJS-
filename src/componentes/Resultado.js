import React, { Component } from 'react';
//import Resumen from './Resumen';
import{TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
    render() {
        const sexo = this.props.monto;
         const mensaje = (!sexo) ? 'Elije Marca, Año y Tipo de Seguro' : 'El Total  es = $';
        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component ="span" className="resultado">
                    <CSSTransition className="resultado" key={sexo} timeout={{enter:500, exit:500}}>
                        <span>{sexo}</span>
                    </CSSTransition>

                </TransitionGroup>

            </div>
           
        );
    }
}

export default Resultado;