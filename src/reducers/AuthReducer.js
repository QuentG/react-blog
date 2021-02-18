export const initState = {
    isLogged: false,
    role: null,
    userInfos: null
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem('user', JSON.stringify(action.payload))
            localStorage.setItem('role', action.payload.role)
            return {
                ...state,
                isLogged: true,
                role: action.payload.role,
                userInfos: action.payload.userInfos
            }
        case "LOGOUT":
            localStorage.removeItem('user')
            localStorage.removeItem('role')
            return {
                ...state,
                isLogged: false,
                role: null,
                userInfos: null
            }
        default:
            return initState
    }
}
