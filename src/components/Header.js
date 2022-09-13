import {Link} from 'react-router-dom'

function Header () {
    return(
        <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Listado">Listado</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header