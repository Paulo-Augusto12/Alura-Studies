import React from 'react'
import Botao from './Botao.module.scss'

class Button extends React.Component <{buttonText: string}> {

    render(){
        return(
                <button className={Botao.botao}>

                {this.props.buttonText}    
                
                </button>
        )
    }

}

export default Button;
