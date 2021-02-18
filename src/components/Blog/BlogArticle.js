import PropTypes from "prop-types"
import { isAdmin, isConnected } from "../../utils/Auth"
import blogService from "../../services/BlogService";
import { useHistory } from "react-router-dom";

export const BlogArticle = ({ id, title, description, content }) => {
    const history = useHistory()

    const handleDelete = () => {
        blogService.deleteArticle(id)
            .then(() => history.push('/articles'))
    }

    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <h1>{title}</h1>
                    <br />
                    {isConnected() && isAdmin() ?
                        <div>
                            <button className="btn btn-info">Editer l'article</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Supprimer l'article</button>
                        </div>
                        : null
                    }
                    <h5 className="py-5">Description de l'article : </h5>
                    <p>{description}</p>
                </div>
            </div>

            <div className="container">
                <h2 className="mb-3">Contenu</h2>
                {content}
            </div>
        </>
    )
}

BlogArticle.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}