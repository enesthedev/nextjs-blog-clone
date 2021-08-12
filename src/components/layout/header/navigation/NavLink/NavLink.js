import Link from "next/link";

function NavLink({ children }) {
    return (
        <Link>
            { children }
        </Link>
    )
}

export default NavLink