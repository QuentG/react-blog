export const isConnected = () => null !== localStorage.getItem('user')

export const getUser = () => JSON.parse(localStorage.getItem('user'))

export const getRole = () => localStorage.getItem('role')

export const isAdmin = () => "regular" !== getRole()