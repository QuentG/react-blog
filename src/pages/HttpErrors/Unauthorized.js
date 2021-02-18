import { NavLink } from "react-router-dom"

export const Unauthorized = () => {
    return (
        <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">401</span>
                        <div className="mb-4 lead">Unauthorized</div>
                        <NavLink to="/">
                            <button className="btn btn-info">Back to Home</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}