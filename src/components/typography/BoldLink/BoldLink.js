import PropTypes from "prop-types"

function BoldLink({ content, to, className }) {
    return (
        <a className={`font-bold hover:underline ${className}`} href={to}>
            { content }
        </a>
    )
}

BoldLink.propTypes = {
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default BoldLink