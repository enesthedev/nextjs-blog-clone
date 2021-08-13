import PropTypes from "prop-types"

function Hero(props) {
    const { title, children, className } = props
    console.log(title)

    return (
        <div className={`flex flex-col text-white text-xl font-normal text-opacity-60 gap-7 ${className}`}>
            <h1 className="text-2xl text-white font-bold whitespace-pre-line">{title}</h1>
            { children }
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired
}

export default Hero