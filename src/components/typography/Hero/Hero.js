import PropTypes from "prop-types"

function Hero(props) {
    const { className, titleClassName, title, children } = props
    return (
        <div className={"base--hero-container" + (className ? " " + className : "")}>
            <h1 className={"base--hero-h1" + (titleClassName ? " " + titleClassName : "")}>
                { title }
            </h1>
            { children }
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string.isRequired
}

Hero.defaultProps = {
    title: ""
}

export default Hero