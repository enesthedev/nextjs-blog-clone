import PropTypes from "prop-types"

function Divider({ height = "px", color = "black", opacity = "30" }) {
    return (
        <div className={`w-full h-${height} bg-${color} bg-opacity-${opacity}`} />
    )
}

Divider.propTypes = {
    height: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.string
}

export default Divider