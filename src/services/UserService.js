class UserService {
    login({ email, password }) {
        const users = JSON.parse(localStorage.getItem('users'))
        const user = users.find(u => u.email === email)
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (user && user.password === password) {
                    res(user)
                } else {
                    rej(false)
                }
            },1000)
        })
    }

    getMe() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(JSON.parse(localStorage.getItem('user')))
            },1000)
        })
    }

    getAll() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(JSON.parse(localStorage.getItem('users')))
            },1000)
        })
    }

    edit({ email, newEmail, newPassword }) {
        const users = JSON.parse(localStorage.getItem('users'))
        const user = users.find(u => u.email === email)
        const alreadyExist = users.find(u => u.email === newEmail)
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (alreadyExist) {
                    rej(false)
                } else {
                    res(true)
                }
            },1000)
        })
    }

    register({ email, password, role }) {
        let users = JSON.parse(localStorage.getItem('users'))
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (users.find(u => u.email === email)) { // Email already exists
                    rej(false)
                } else {
                    users.push({
                        'email': email,
                        'password': password,
                        'role': role
                    })

                    localStorage.setItem('users', JSON.stringify(users))
                    res(true)
                }
            },1000)
        })
    }

    delete(id) {
        let users = JSON.parse(localStorage.getItem('users'))
        return new Promise((res, rej) => {
            setTimeout(() => {
                let filteredUsers = users.filter(a => Number.parseInt(a.id) !== Number.parseInt(id))
                localStorage.setItem('articles', JSON.stringify(filteredUsers))
                res(true)
            },1000)
        })
    }

    logout() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(true)
            },1000)
        })
    }
}

const userService = new UserService()

export default userService