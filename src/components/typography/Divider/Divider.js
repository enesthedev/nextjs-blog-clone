import PropTypes from "prop-types"

function Divider({ height = "2px", color = "black", opacity = "30" }) {
    switch (color) {
        case "black": {
            return (
                <div className={`w-full h-${height} bg-${color} bg-opacity-${opacity}`} />
            )
        }
    }
}

Divider.propTypes = {
    height: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.string
}

export default Divider