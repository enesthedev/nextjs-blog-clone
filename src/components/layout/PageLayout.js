import PropTypes from "prop-types"
import Header from "./Header/Header"

function PageLayout(props) {
    const { children, menus } = props
    return (
        <main className="w-full flex flex-col items-center">
            <Header menus={menus}/>
            { children }
        </main>
    )
}

PageLayout.propTypes = {
    menus: PropTypes.object.isRequired
}

export default PageLayout