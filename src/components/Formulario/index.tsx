import React from 'react'
import Style from'./Formulario.module.scss'
import Button from '../Botão';

class Formulario extends React.Component {

    render() {
        
        return(
            <form className={Style.novaTarefa}>
            
            <div className={Style.inputContainer}>
            <label htmlFor='Tarefa'>
                Adicione um novo conteúdo de estudo
                <input
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="Insira o que você deseja estudar ?"
                required
                >
                
                </input>
            
            </label>
            
            </div>

            
            <div className={Style.inputContainer}>
            <label htmlFor='Tempo'>
                Por quanto tempo você deseja estudar ? 
                <input
                placeholder="Por quanto tempo você irá estudar ?"
                type="time"
                step="1"
                min="00:00:00"
                max="01:30:00"
                name="tempo"
                id="tempo"
                required
                >
                
                </input>
            
            </label>
            
            
            </div>

            <Button 
            
            buttonText='Adicionar'
            
            />
                
            
                    
            
            
            
        
            </form>
     )



    }}

    export default Formulario;