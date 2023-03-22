import React, {useState} from 'react'
import Polje from './Polje'

import './Sahovnica.css';

type Props = {}

const Sahovnica = (props: Props) => {
    const [polja, setPolja] = useState([true,false,false,true,true,false,false,true,false,
        true,false,false,true,true,false,false,true,false,true,false,false,true,true,false,false])

    const promijeniBojePolja = (indexPolja: number) => {
        setPolja((trenutnoStanje)=>{
            let novoStanje = trenutnoStanje.map((clan)=>clan);
            novoStanje[indexPolja]=!novoStanje[indexPolja];
            return novoStanje;
        })
    }

    return (
    <div className="sahovnica">
         {/*{polja.map(
           (polje, index)=>{
               return <Polje boja={polje} modificirajStanje={()=>promijeniBojePolja(index)}/>
            }
           )
        }
    */}
     
        {
            polja.map(
                (polje, index)=> <Polje boja={polje} modificirajStanje={()=>
                promijeniBojePolja(index)} details={polje} key={index}/>)}
           
    </div>
  )
}

export default Sahovnica