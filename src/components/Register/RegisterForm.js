import PropTypes from "prop-types"

export const RegisterForm = ({ onSubmit, handleChange, email, password, role, error }) => {
    return (
        <>
            <h1>Créer un compte</h1>

            {error !== ''
                ? <div className="alert alert-danger" role="alert">
                    {error}
                </div>
                : ""
            }

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Adresse mail</label>
                    <input type="email" name="email" required={true} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input type="password" name="password" required={true} className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputRole">Role</label>
                    <br />
                    <select className="form-select" name="role" value={role} id="exampleInputRole" aria-label="Default select example" onChange={handleChange}>
                        <option value="regular">Regular</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Se connecter</button>
            </form>
        </>
    )
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
}