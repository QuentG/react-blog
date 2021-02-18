import PropTypes from "prop-types"

export const ArticleCard = ({ title, description }) => {
    return (
        <div className="col-12">
            <div className="card bg-light mb-3">
                <div className="card">
                    <div className="card-header">
                        <strong>{title}</strong>
                    </div>
                    <div className="card-body">
                        Description : {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}