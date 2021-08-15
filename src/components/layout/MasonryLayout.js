import PropTypes from "prop-types"

function MasonryLayout(props) {
    const {} = props
    return (
        <>
        </>
    )
}

MasonryLayout.propTypes = {
    columns: PropTypes.number,
    gap: PropTypes.number
}

MasonryLayout.defaultTypes = {
    columns: 2,
    gap: 20,
}

export default MasonryLayout