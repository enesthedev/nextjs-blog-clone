import PropTypes from "prop-types"

function Social({ color = 'blue', link = false, top = "3", size = "base", children }) {
    return link ?
        <a href={link} target="_blank"
           className={`py-4 px-6 mt-${top} rounded-xl bg-${color}-900 bg-${color} bg-opacity-50 text-${size} text-${color}-400 hover:underline hover:bg-opacity-75`} rel="noreferrer">
            {children}
        </a>
        :
        <div
            className={`py-4 px-6 mt-${top} rounded-xl bg-${color}-900 bg-${color} bg-opacity-50 text-${size} text-${color}-400`}>
            {children}
        </div>
}

Social.propTypes = {
    color: PropTypes.string,
    top: PropTypes.string,
    size: PropTypes.string
}

export default Social