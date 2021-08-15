import PropTypes from "prop-types"

function BoldLink(props) {
    const { highlight, content, to, className } = props
    return (
        <a className={`font-bold hover:underline hover:text-${highlight} ${className}`} target="_blank" href={to} rel="noreferrer">
            { content }
        </a>
    )
}

BoldLink.propTypes = {
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    highlight: PropTypes.string
}

BoldLink.defaultProps = {
    highlight: "yellow-400"
}

export default BoldLink