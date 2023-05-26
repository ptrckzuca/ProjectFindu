import React from 'react'

function Registar() {
  return (
    <>
      <div>
        <p>FindU</p>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Novo Username"
            className="box"
            name="Username"
          />
          <input
            type="text"
            placeholder="Password"
            className="box"
            name="Password"
          />
          <input
            type="text"
            placeholder="Confirmar Password"
            className="box"
            name="Conf_Password"
          />
        </form>
        <div>
          <div>
            <button onClick={btn_entrar} className="box">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registar