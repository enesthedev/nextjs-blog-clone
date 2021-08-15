import PropTypes from "prop-types"

function Hero(props) {
    const { title, gap, className, children } = props
    const { size, color, weight, text } = title

    return (
        <div className={`flex flex-col text-white text-xl font-normal text-opacity-60 gap-${gap} ${className}`}>
            <h1 className={`text-${size ?? "2xl"} text-${color ?? "white"} font-${weight ?? "bold"} whitespace-pre-line`}>{text ?? ""}</h1>
            { children }
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.object.isRequired,
    gap: PropTypes.string
}

Hero.defaultProps = {
    gap: "7"
}

export default Hero