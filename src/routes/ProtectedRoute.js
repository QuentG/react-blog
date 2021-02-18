import { Route, Redirect } from "react-router-dom"
import { isConnected } from "../utils/Auth"

const ProtectedRoute = ({ component: Component, path, isGranted = null, ...rest }) => {
    let granted = isGranted === null ? true : isGranted

    return (
        <Route path={path} {...rest}
            render={props => {
               return isConnected() ? granted ? <Component {...props} /> : <Redirect to={"/401"} /> : <Redirect to={"/login"} />
           }}
        />
    )
}

export default ProtectedRoute