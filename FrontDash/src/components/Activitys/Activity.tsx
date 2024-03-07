import './Activity.css'
import { MdOutlinePendingActions } from "react-icons/md";
import { SiProgress } from "react-icons/si";
import { MdFileDownloadDone } from "react-icons/md";
import React from 'react';

const Activity = ({ numero, status, total}) => {

  const Icon = () =>{
    if(status === "Pendente"){  
      return <MdOutlinePendingActions/>
    }else if(status === "Em andamento"){
      return <SiProgress/>
    }else{
      return <MdFileDownloadDone/>

    }
  }

  const calcPorcentagem = () =>{
    const porcent = (numero/total) * 100;
    return porcent
  }
  
  return (
    <div className='CardAct'>
      <div className="logo-act">
        {Icon()}
      </div>
      <div className="infosCardsD">
      <div className="num-est">
        <p>{numero}</p>  <span>{calcPorcentagem().toFixed(2)}%</span>
      </div>
      <div className="infoAct">
        <p>{status}</p>
      </div>
      </div>
    </div>
  )
}

export default Activity
