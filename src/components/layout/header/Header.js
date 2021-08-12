import PropTypes from 'prop-types'

import { NavBar, NavLink } from "./navigation"

function Header(props) {
    const { menus } = props;
    return (
        <header className="w-full flex justify-start px-4 max-w-screen-md">
            <NavBar header="Giriş">
                {
                    Object.keys(menus).map((url) => {
                        return (
                            <NavLink key={url} href={url}>
                                <a className="transition transition-all hover:text-white">{menus[url]}</a>
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