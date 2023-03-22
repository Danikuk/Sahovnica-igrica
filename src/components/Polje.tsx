import React from 'react'
import './Polje.css'

type Props = {boja: boolean, modificirajStanje: Function, details: boolean, key: number}

const Polje = ({boja,modificirajStanje}: Props) => {
  return (
    <div onClick={()=>modificirajStanje()} className={
        boja? 'crveno': 'bijelo'
    }></div>
  )
}

export default Polje