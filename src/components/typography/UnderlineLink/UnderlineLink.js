import PropTypes from "prop-types"
import Link from "next/link"

function UnderlineLink(props) {
    const { text, to, router, className } = props
    return ((router === true) ?
            <Link href={to}>
                <a
                    className={
                        "base--underline-link"
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
                        "base--underline-link"
                        + (className ? " " + className : "")
                    }
                >
                    { text }
                </a>
            </>
    )
}

UnderlineLink.propTypes = {
    to: PropTypes.string.isRequired,
    router: PropTypes.bool,
    text: PropTypes.string.isRequired
}

UnderlineLink.defaultProps = {
    router: false
}

export default UnderlineLink