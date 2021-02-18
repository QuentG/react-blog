import PropTypes from "prop-types"

export const SettingsProfileForm = ({ user, handleSubmit, handleChange }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Adresse email</label>
                    <input type="email" name="email" value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input type="password" name="password" value={user.password} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>
        </>
    )
}

SettingsProfileForm.propTypes = {
    user: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}