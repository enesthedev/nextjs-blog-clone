import Link from "next/link";

function NavLink(props) {
    const { children } = props
    return (
        <Link { ...props }>
            { children }
        </Link>
    )
}

export default NavLink