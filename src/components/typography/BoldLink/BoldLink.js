import PropTypes from "prop-types"
import Link from "next/link"

function BoldLink(props) {
    const { text, to, router, className } = props
    return ((router === true) ?
        <Link href={to}>
            <a
                className={
                    "base--bold-link"
                    + (className ? " " + className : "")
                }
            >
                { text }
            </a>
        </Link>
        :
            <>
                <a
                   target="_blank"
                   href={to}
                   rel="noreferrer"
                   className={
                       "base--bold-link"
                       + (className ? " " + className : "")
                   }
                >
                    { text }
                </a>
            </>
    )
}

BoldLink.propTypes = {
    to: PropTypes.string.isRequired,
    router: PropTypes.bool,
    text: PropTypes.string.isRequired
}

BoldLink.defaultProps = {
    router: false
}

export default BoldLink