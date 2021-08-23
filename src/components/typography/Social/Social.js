import PropTypes from "prop-types"

function Social(props) {
    const { className, link, children } = props
    return link ?
        <a href={link} target="_blank" className={"base--social" + (className ? " " + className : "")} rel="noreferrer">
            {children}
        </a>
        :
        <div className={"base--social" + (className ? " " + className : "")}>
            {children}
        </div>
}

Social.propTypes = {
    link: PropTypes.string
}

export default Social