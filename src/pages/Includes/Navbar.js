import { useContext } from "react"
import { NavLink, Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import userService from "../../services/UserService"
import { getUser, isAdmin, isConnected } from "../../utils/Auth"

export const Navbar = () => {
    const { dispatch } = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        userService.logout()
            .then(() => dispatch({ type: "LOGOUT" }))
            .finally(() => history.push('/'))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">Exam 🚀</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/articles" className="nav-link">
                            Les articles
                        </Link>
                    </li>
                    {!isConnected() ?
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Connexion
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Inscription
                                </Link>
                            </li>
                        </>
                        :
                        <>
                            {isAdmin() ?
                                <>
                                    <li className="nav-item">
                                        <Link to="/admin/articles/add" className="nav-link">
                                            Ajouter un article
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/users" className="nav-link">
                                            Utilisateurs
                                        </Link>
                                    </li>
                                </>
                                : null
                            }
                        </>
                    }
                </ul>
                {isConnected() ?
                    <>
                        <span className="navbar-text">
                            <Link to="/user/settings">
                                {getUser().email}
                            </Link>
                            <button onClick={handleLogout}>Déconnexion</button>
                        </span>
                    </>
                    : null
                }
            </div>
        </nav>
    )
}