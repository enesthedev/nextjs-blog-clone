import PropTypes from 'prop-types'

function Wrapper(props) {
    const { children, size } = props
    return (
        <div className={`w-full max-w-screen-${size}`}>
            { children }
        </div>
    )
}

Wrapper.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

export default Wrapper