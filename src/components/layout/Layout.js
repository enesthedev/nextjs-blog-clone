import PropTypes from "prop-types"
import Header from "./Header/Header"

function Layout({ children, menus }) {
    return (
        <main className="w-full flex flex-col items-center">
            <Header menus={menus}/>
            { children }
        </main>
    )
}

Layout.propTypes = {
    menus: PropTypes.object.isRequired
}

export default Layout