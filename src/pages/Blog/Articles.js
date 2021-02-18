import { useState, useEffect } from 'react'
import blogService from "../../services/BlogService"
import { NavLink } from "react-router-dom"
import { ArticleCard } from "../../components/Blog/ArticleCard"

export const Articles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        blogService.getArticles()
            .then(res => setArticles(res))
            .finally(() => setLoading(false))
    },[])

    return (
        <div className="container py-5">
            {!loading ?
                <div className="row">
                    {articles.map(a => {
                        return (
                            <NavLink key={a.id} to={{
                                pathname:`/articles/${a.id}`,
                                state: {
                                    article: a
                                }
                            }}>
                                <ArticleCard title={a.title} description={a.description} />
                            </NavLink>
                        )
                    })
                    }
                </div>
                : <p>Loading...</p>
            }
        </div>
    );
};