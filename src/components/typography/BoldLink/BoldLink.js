import PropTypes from "prop-types"

function BoldLink({ highlight = 'yellow-400', content, to, className }) {
    return (
        <a className={`font-bold hover:underline hover:text-${highlight} ${className}`} target="_blank" href={to} rel="noreferrer">
            { content }
        </a>
    )
}

BoldLink.propTypes = {
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default BoldLink