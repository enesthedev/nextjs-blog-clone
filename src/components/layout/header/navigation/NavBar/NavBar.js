import { useState } from "react";
import { MenuIcon } from "components/icons"

function NavBar() {
    const [ expanded, setExpanded ] = useState(false)
    return (
        <div className="px-3 py-6 text-white text-opacity-60">
            { expanded ?
                    <p>test2</p>
                :
                <>
                    <button className="flex justify-start items-center" onClick={() => setExpanded(true)}>
                        <MenuIcon />
                        <h2 className="text-lg font-light ml-2">Giriş</h2>
                    </button>
                </>
            }
        </div>
    )
}

export default NavBar