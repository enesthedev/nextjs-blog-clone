import PropTypes from 'prop-types'

import { NavBar, NavLink } from "./navigation"

function Header(props) {
    const { menus } = props;
    return (
        <header className="w-full flex justify-start px-4 max-w-screen-md">
            <NavBar header="Giriş">

            </NavBar>
        </header>
    )
}

Header.propTypes = {
    menus: PropTypes.array.isRequired
}

export default Header;