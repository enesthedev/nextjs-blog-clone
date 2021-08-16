import PropTypes from "prop-types"
import Link from "next/link"

function BoldLink(props) {
    const { highlight, content, to, router, className } = props
    return ((router === true) ?
        <Link href={to}>
            <a className={`font-bold hover:underline hover:text-${highlight} ${className}`}>
                { content }
            </a>
        </Link>
        :
            <>
                <a className={`font-bold hover:underline hover:text-${highlight} ${className}`} target="_blank" href={to} rel="noreferrer">
                    { content }
                </a>
            </>
    )
}

BoldLink.propTypes = {
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    highlight: PropTypes.string,
    router: PropTypes.bool
}

BoldLink.defaultProps = {
    highlight: "yellow-400",
    router: false
}

export default BoldLink