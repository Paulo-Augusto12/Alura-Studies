import React from 'react'

export function Metodos() {

    const metodos =[{
        id: 'pomodoro',
        tempo : '00:50:00 intervalo de 25 minutos'
    },
    
    {
        id: 'Comum',
        tempo:'01:30:00',
    },
    
    
    ]
    
    return (
        <div>
            <h2>
                Método a ser utilizado
                </h2>
                <ul>
                    {metodos.map((metodo, index) =>(

                            <li key={index}>

                                <h3>{metodo.id}</h3>

                                <span>{metodo.tempo}</span>

                            </li>
                    
                    ))}
                </ul>
        </div>
    )

}

export default Metodos;