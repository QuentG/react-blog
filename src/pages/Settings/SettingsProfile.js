import { useState, useEffect, useContext }  from 'react'
import userService from "../../services/UserService"
import { SettingsProfileForm } from "../../components/Settings/SettingsProfileForm"
import { AuthContext } from "../../contexts/AuthContext"

export const SettingsProfile = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const { dispatch } = useContext(AuthContext)

    useEffect(() => {
        setLoading(true)
        userService.getMe()
            .then(user => setUser(user))
            .finally(() => setLoading(false))
    },[])

    const handleChange = e => {
        const { name, value } = e.target

        switch (name) {
            case "email":
                setNewEmail(value)
                break
            case "password":
                setNewPassword(value)
                break
            default:
                break
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        userService.edit({ newEmail, newPassword })
            .then(() => dispatch({ type: "LOGIN", payload: { email: newEmail, password: newPassword, role: user.role } }))
            .finally(() => setLoading(false))
    }

    return (
        <>
            {loading
                ? <p>Loading...</p>
                : <SettingsProfileForm user={user} handleSubmit={handleSubmit} handleChange={handleChange} />
            }
        </>
    );
};

