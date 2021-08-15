import PropTypes from "prop-types"

function MenuIcon(props) {
    const { size } = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8h16M4 16h16"
            />
        </svg>
    )
}

MenuIcon.propTypes = {
    size: PropTypes.number
}

MenuIcon.defaultProps = {
    size: 20
}

export default MenuIcon
