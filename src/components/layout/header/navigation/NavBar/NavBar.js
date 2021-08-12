import PropTypes from 'prop-types'

import { useState } from "react"
import { MenuIcon } from "components/icons"

function NavBar(props) {
    const [ expanded, setExpanded ] = useState(false)
    const { children, header } = props
    return (
        <nav className="px-3 py-6 text-white text-opacity-60 flex gap-3">
            { expanded ?
                children
                :
                <>
                    <button className="flex justify-start items-center" onClick={() => setExpanded(true)}>
                        <MenuIcon />
                        <h2 className="text-lg font-light ml-2">{ header }</h2>
                    </button>
                </>
            }
        </nav>
    )
}

NavBar.propTypes = {
    header: PropTypes.string.isRequired
}


export default NavBar