import PropTypes from "prop-types"

function Hero(props) {
    const { title, children, size = '2xl', gap = '7', className } = props

    return (
        <div className={`flex flex-col text-white text-xl font-normal text-opacity-60 gap-${gap} ${className}`}>
            <h1 className={`text-${size} text-white font-bold whitespace-pre-line`}>{title}</h1>
            { children }
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Hero