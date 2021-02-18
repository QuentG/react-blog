import { useContext, useState } from "react"
import { useHistory } from 'react-router-dom'
import { AuthForm } from "../../components/Auth/AuthForm"
import { AuthContext } from "../../contexts/AuthContext"
import userService from "../../services/UserService"

export const Auth = () => {
    const history = useHistory()
    const [error, setError] = useState('');
    const { dispatch } = useContext(AuthContext)

    const onLogin = ({ email, password }) => {
        userService.login({ email, password })
            .then(user => {
                dispatch({ type: "LOGIN", payload: user })
                history.push('/')
            }).catch(() => setError('Mauvais couple email / mot de passe.'))
    }

    return (
        <div className="container py-5">
            <AuthForm
                onSubmit={onLogin}
                error={error}
                setError={setError}
            />
        </div>
    )
};