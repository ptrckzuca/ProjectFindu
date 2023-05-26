import React from "react";
import Entrada from ":./src/css/Entrada";

const btn_ent =()=> {
  
}

function Entrance() {
  return (
    <><div className="body">
      <div>
        <p className="logo">FindU</p>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="box_ big"
            name="Username"
          />
          <input
            type="text"
            placeholder="Password"
            className="box_big"
            name="Password"
          />
        </form>
      </div>
      <div>
        <button onClick={btn_ent} className="box">
          Entrar
        </button>
      </div>
      <div>
        <button onClick={btn_registar} className="box">
          Registar
        </button>
      </div>
    </div>
    </>
  );
}

export default Entrance;
