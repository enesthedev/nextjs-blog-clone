import PropTypes from "prop-types"

function Social({ color = 'blue', link = false, children }) {
    return link ?
        <a href={link}
           className={`py-4 px-6 mt-3 rounded-xl bg-${color}-900 bg-opacity-50 text-base text-${color}-400 hover:underline hover:bg-opacity-75`}>
            {children}
        </a>
        :
        <div
            className={`py-4 px-6 mt-3 rounded-xl bg-${color}-900 bg-opacity-50 text-base text-${color}-400 hover:bg-opacity-75`}>
            {children}
        </div>
}

Social.propTypes = {
    color: PropTypes.string
}

export default Social