import PropTypes from 'prop-types'

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { MenuIcon } from "components/icons"

function NavBar(props) {
    const router = useRouter()

    const [ expanded, setExpanded ] = useState(false)
    const { children, header } = props

    useEffect(() => {
        if (expanded) {
            setExpanded(false)
        }
    }, [router.asPath])

    return (
        <nav className="py-6 text-black text-opacity-60 flex flex-col gap-2 sm:flex-row sm:gap-5 dark:text-white">
            { expanded ?
                children
                :
                <>
                    <button className="flex justify-start items-center" onClick={() => setExpanded(true)}>
                        <MenuIcon />
                        <h2 className="text-lg font-normal ml-2">{ header }</h2>
                    </button>
                </>
            }
        </nav>
    )
}

NavBar.propTypes = {
    header: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    header: 'Belirtilmemiş'
}


export default NavBar