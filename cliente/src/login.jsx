import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUsuarioLogeado }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  function manejarUsuario(evento) {
    setUsuario(evento.target.value);
  }
  function manejarPassword(evento) {
    setPassword(evento.target.value);
  }
  function enviar() {
    fetch("http://localhost:3000/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usuario,
        password: password,
      }),
      credentials: "include",
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((usuario) => {
        setUsuarioLogeado(usuario);
        if (usuario.logeado) {
          navigate("/");
        }
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={manejarUsuario}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={manejarPassword}
      />
      <br />
      <button onClick={enviar}>Login</button>
      <br />
    </div>
  );
}
export default Login;
