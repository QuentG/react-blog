import { useState } from "react"
import { RegisterForm } from "../../components/Register/RegisterForm"
import userService from "../../services/UserService"
import { useHistory } from "react-router-dom"

export const Register = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('regular')
    const [error, setError] = useState('')

    const onSubmitForm = e => {
        e.preventDefault()
        setError('')
        userService.register({ email, password, role })
            .then(() => history.push('/login'))
            .catch(() => setError('Email déjà utilisé'))
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
            case "role":
                setRole(value)
                break
            default:
                break
        }
    }

    return (
        <div className="container py-5">
            <RegisterForm
                onSubmit={onSubmitForm}
                handleChange={handleChange}
                email={email}
                password={password}
                role={role}
                error={error}
            />
        </div>
    );
}