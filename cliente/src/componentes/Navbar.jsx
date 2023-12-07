import { NavLink } from "react-router-dom";

function Navbar({ usuarioLogeado }) {
  const linksLogeado = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink
            className={` nav-link ${({ isActive }) =>
              isActive ? "active-style" : ""}`}
            aria-current="page"
            to={`/verunusuario/${usuarioLogeado.usuario._id}`}
          >
            {usuarioLogeado.usuario.email}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/CrearCategorias">
            Crear Categorias
          </NavLink>
        </li>
      </>
    );
  };
  const linkDeslogeado = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/formulario">
            Formulario
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </>
    );
  };
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#fff159" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/titulo">
          CFL 401
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/usuarios">
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/VerCategorias">
                Categorias
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {usuarioLogeado.logeado ? linksLogeado() : linkDeslogeado()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
