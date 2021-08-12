import PropTypes from 'prop-types'

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { NavBar, NavLink } from "./navigation"

function Header(props) {
    const router = useRouter()

    const { menus } = props
    const [ header, setHeader ] = useState(menus[router.asPath])

    useEffect(() => {
        if (!(header === menus[router.asPath])) {
            setHeader(menus[router.asPath].split('/')[1])
        }
    }, [router.asPath])

    return (
        <header className="w-full flex justify-start px-4 max-w-screen-md">
            <NavBar header={ header }>
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

export default Header;