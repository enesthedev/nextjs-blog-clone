import PropTypes from "prop-types"

function Wrapper(props) {
    const { children, size, className } = props
    return (
        <div
            className={
                "w-full"
                + (" " + (size === "sm" ? "max-w-screen-sm" : size === "md" ? "max-w-screen-md" : size === "lg" ? "max-w-screen-lg" : size === "xl" ? "max-w-screen-xl" : size === "2xl" ? "max-screen-2xl" : "max-w-screen-md"))
                + (className ? " " + className : "")
            }
        >
            { children }
        </div>
    )
}

Wrapper.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl'])
}

Wrapper.defaultProps = {
    size: "md"
}

export default Wrapper