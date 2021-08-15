import PropTypes from "prop-types"

function Divider(props) {
    const { height, color, opacity } = props
    return (
        <div className={`w-full h-${height} bg-${color} bg-opacity-${opacity}`} />
    )
}

Divider.propTypes = {
    height: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.string
}

Divider.defaultProps = {
    height: "px",
    color: "black",
    opacity: "30"
}

export default Divider