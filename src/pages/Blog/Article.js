import { useState, useEffect } from 'react'
import { useLocation, useParams} from 'react-router-dom'
import blogService from "../../services/BlogService"
import { BlogArticle } from "../../components/Blog/BlogArticle"

export const Article = () => {
    const location = useLocation()
    const params = useParams()

    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        if (location.state && location.state.article) {
            setArticle(location.state.article)
            setLoading(false)
        } else {
            blogService.getArticleById(params.id)
                .then(res => setArticle(res))
                .finally(() => setLoading(false))
        }
    },[location,params])

    return (
        <div className="container py-5">
            {!loading ?
                <BlogArticle
                    id={article.id}
                    title={article.title}
                    description={article.description}
                    content={article.content}
                />
                : <p>Loading...</p>
            }
        </div>
    )
}