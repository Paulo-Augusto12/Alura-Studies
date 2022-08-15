import React from 'react'
import Style from '../Lista.module.scss'


export default function Item({id,tempo}: {id:string,tempo:string}){

    
    return(
        
        <li className={Style.item}>
                        <h3>{id}</h3>
                        
                        <span>{tempo}</span>
                    
                    </li>
    )
}