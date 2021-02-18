import { useState } from "react"
import PropTypes from "prop-types"

export const ArticleForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({ title, description, content })
    }

    const handleChange = e => {
        const { name, value } = e.target

        switch (name) {
            case "title":
                setTitle(value)
                break
            case "description":
                setDescription(value)
                break
            case "content":
                setContent(value)
                break
            default:
                break
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Titre</label>
                <input type="text" className="form-control" id="title" name="title" required={true} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description" required={true} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="content">Contenu</label>
                <textarea className="form-control" id="content" name="content" required={true} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Créer</button>
        </form>
    )
}

ArticleForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}