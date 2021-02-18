import { useState } from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const AuthForm = ({ onSubmit, error, setError }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitForm = e => {
        e.preventDefault()
        setError('') // Reset error message
        onSubmit({ email, password })
    }

    const handleChange = e => {
        const { name, value } = e.target

        switch (name) {
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                break
        }
    }

    return (
        <>
            {error !== ''
                ? <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                : ""
            }

            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Adresse mail</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <button className="btn btn-primary" type="submit">Se connecter</button>
                <Link to="/register">
                    <button className="btn btn-primary">
                        Créer un compte
                    </button>
                </Link>
            </form>
        </>
    );
};

AuthForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
}