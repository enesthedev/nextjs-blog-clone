import PropTypes from "prop-types"

function Social({ color = 'blue', link = false, mt = "3", children }) {
    return link ?
        <a href={link}
           className={`py-4 px-6 mt-${mt} rounded-xl bg-${color}-900 bg-${color} bg-opacity-50 text-base text-${color}-400 hover:underline hover:bg-opacity-75`}>
            {children}
        </a>
        :
        <div
            className={`py-4 px-6 mt-${mt} rounded-xl bg-${color}-900 bg-${color} bg-opacity-50 text-base text-${color}-400 hover:bg-opacity-75`}>
            {children}
        </div>
}

Social.propTypes = {
    color: PropTypes.string,
    mt: PropTypes.string
}

export default Social