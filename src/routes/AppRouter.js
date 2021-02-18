import { Switch, Route, Redirect } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import { getRole } from "../utils/Auth"
import { Home } from "../pages/Home/Home"
import { Auth } from "../pages/Auth/Auth"
import { Register } from "../pages/Register/Register"
import { SettingsProfile } from "../pages/Settings/SettingsProfile"
import { Articles } from "../pages/Blog/Articles"
import { Article } from "../pages/Blog/Article"
import { AddArticle } from "../pages/Admin/Blog/AddArticle"
import { Admin } from "../pages/Admin/Admin"

import { NotFound } from "../pages/HttpErrors/NotFound"
import { Unauthorized } from "../pages/HttpErrors/Unauthorized"
import { User } from "../pages/Admin/Settings/User";

export const AppRouter = () => {
    return (
        // App Router who registered all routes
        <Switch>
            <Route exact path={'/'} component={Home} />

            <Route path={'/login'} component={Auth} />
            <Route path={'/register'} component={Register} />
            <Route exact path={'/articles'} component={Articles} />
            <Route path={'/articles/:id'} component={Article} />

            <ProtectedRoute path={"/user/settings"} isGranted={null !== getRole()} component={SettingsProfile} />

            <ProtectedRoute exact path={"/admin"} isGranted={"regular" !== getRole()} component={Admin} />
            <ProtectedRoute path={"/admin/users"} isGranted={"regular" !== getRole()} component={User} />
            <ProtectedRoute path={"/admin/articles/add"} isGranted={"regular" !== getRole()} component={AddArticle} />

            <Route path={'/404'} component={NotFound} />
            <Route path={'/401'} component={Unauthorized} />
            <Route path={'*'} render={() => <Redirect to={'/404'}/>} />
        </Switch>
    )
}