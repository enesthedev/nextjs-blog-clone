import PropTypes from "prop-types"

function Hero(props) {
    const { title, children, className } = props
    return (
        <div className={`flex flex-col ${className}`}>
            <h1 className="text-xl text-white font-bold">{ title }</h1>
            { children }
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired
}

export default Hero