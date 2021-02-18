class BlogService {
    getArticles() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(JSON.parse(localStorage.getItem('articles')))
            },1000)
        })
    }

    getArticleById(id) {
        const articles = JSON.parse(localStorage.getItem('articles'))
        const article = articles.find(a => Number.parseInt(a.id) === Number.parseInt(id))
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(article)
            },2000)
        })
    }

    addArticle({ title, description, content }) {
        let articles = JSON.parse(localStorage.getItem('articles'))
        return new Promise((res, rej) => {
            setTimeout(() => {
                let id = Number.parseInt(articles.length) + 1
                articles.push({
                    'id': id,
                    'title': title,
                    'description': description,
                    'content': content
                })

                localStorage.setItem('articles', JSON.stringify(articles))
                res(id)
            },2000)
        })
    }

    deleteArticle(id) {
        let articles = JSON.parse(localStorage.getItem('articles'))
        return new Promise((res, rej) => {
            setTimeout(() => {
                let filteredArticles = articles.filter(a => Number.parseInt(a.id) !== Number.parseInt(id))
                localStorage.setItem('articles', JSON.stringify(filteredArticles))
                res(true)
            },1000)
        })
    }
}

const blogService = new BlogService()

export default blogService