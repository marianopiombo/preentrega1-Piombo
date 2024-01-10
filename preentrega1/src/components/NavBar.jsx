import CarWidget from "./CarWidget";
import LogoEna from "./LogoEna";

const NavBar = () =>{
    return(
        <div className="container-fluid bg-light">
        <div className="container my-3">
            <div className="row align-items-center">
            <div className="col-md-2">
                <LogoEna/>
            </div>
            <div className="col-md-8 text-center">
                <ul className="nav">
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Segun su objetivo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Combos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="#">Sobre Nosotros</a>
            </li>
            </ul>
            </div>
            <div className="col-md-2 align-items-center justify-content-end">
        <CarWidget/>
        </div>
            </div>
        </div>
        </div>
    )
}

export default NavBar;
