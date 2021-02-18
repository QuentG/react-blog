import { ArticleForm } from "../../../components/Admin/Blog/ArticleForm"
import blogService from "../../../services/BlogService"
import { useHistory } from "react-router-dom"

export const AddArticle = () => {
    const history = useHistory()

    const handleSubmit = ({ title, description, content }) => {
        blogService.addArticle({ title, description, content })
            .then(id => history.push(`/articles/${id}`))
    }

    return (
        <div className="container py-5">
            <h1>Ajouter un article</h1>

            {<ArticleForm onSubmit={handleSubmit} />}
        </div>
    )
}