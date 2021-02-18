import { useState, useEffect } from "react"
import userService from "../../../services/UserService"

export const User = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        userService.getAll()
            .then(users => setUsers(users))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container py-5">
            {loading ?
                <p>Loading...</p>
                :
                <>
                    <ul>
                        {users.map(u => {
                            return (
                                <>
                                    <li>{u.email} role :{u.role} <button onClick={() => userService.delete(u.id)}>Supprimer</button></li>
                                </>
                            )
                        })}
                    </ul>
                </>

            }
        </div>
    )
}