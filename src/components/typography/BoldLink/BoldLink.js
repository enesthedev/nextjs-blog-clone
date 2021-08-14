import PropTypes from "prop-types"

function BoldLink({ content, to, className }) {
    return (
        <a className={`font-bold hover:underline ${className}`} target="_blank" href={to} rel="noreferrer">
            { content }
        </a>
    )
}

BoldLink.propTypes = {
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default BoldLink