import React from 'react'
import Style from './Lista.module.scss'
import '../../assets/img/check-mark.svg'
import Item from './item'

export function Lista(){

    const tarefas =[{
        id: 'React',
        tempo: '02:00:00'
    },
    
    {
    id: 'javascript',
    tempo: '01:00:00',
    },
    {
        id:'Typescript',
        tempo:'01:30:00'
    }
]
    
    return(

        <aside className={Style.listaTarefas}>

            <h2>Estudos do dia</h2>

            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    
                    />
                ))}
               
               </ul>

        </aside>
    )


}


export default Lista;
