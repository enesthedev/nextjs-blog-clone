import { useState } from "react";
import { MenuIcon } from "components/icons"

function NavBar(props) {
    const [ expanded, setExpanded ] = useState(false)
    const { children, header } = props
    return (
        <div className="px-3 py-6 text-white text-opacity-60">
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
        </div>
    )
}

export default NavBar