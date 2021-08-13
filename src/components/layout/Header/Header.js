import PropTypes from "prop-types"

import { useRouter } from "next/router"
import { NavBar, NavLink } from "./navigation"

function Header(props) {
    const router = useRouter()
    const splitPath = router.asPath.split('/')
    const pathName = splitPath.length > 2 ? `/${splitPath[1]}` : router.pathname

    const { menus } = props

    return (
        <header className="w-full flex justify-start px-4 max-w-screen-md">
            <NavBar header={ menus[pathName] }>
                {
                    Object.keys(menus).map((url) => {
                        return (
                            <NavLink key={url} href={url}>
                                <a className="text-lg font-light transition transition-all hover:text-white">{menus[url]}</a>
                            </NavLink>
                        )
                    })
                }
            </NavBar>
        </header>
    )
}

Header.propTypes = {
    menus: PropTypes.object.isRequired
}

export default Header