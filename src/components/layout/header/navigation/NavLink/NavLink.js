import Link from "next/link";

function NavLink({ children, ...props }) {
    return (
        <Link { ...props }>
            { children }
        </Link>
    )
}

export default NavLink