import "./Home.css";
import Activity from "../../components/Activitys/Activity";
import { LuArrowDownCircle } from "react-icons/lu";
import React from "react";


const Home = () => {
  return (
    <div className="HomeContent">
      <div className="list-activities">
        <Activity numero={2} status={"Pendente"} total={19} />
        <Activity numero={4} status={"Em andamento"} total={19} />
        <Activity numero={13} status={"Concluido"} total={19} />
        <Activity numero={13} status={"Concluido"} total={19} />
      </div>
      <div className="Section-charts">
        <div className="quantity-acts">
          <div className="numRows">
            <p>Quantidade de Atividades para essa semana</p>
          </div>
          <div className="circleQua">
            <div className="numCircleQua">
              5
            </div>
          </div>

          <h4>Veja Mais...</h4>
        </div>



        <div className="content-charts">
            <div className="chartModule">

            </div>
        </div>

      </div>

      {/* <div className="content-modules">
          <div className="modulesCards">
            
          </div>
        </div> */}
    </div>
  );
};

export default Home;
