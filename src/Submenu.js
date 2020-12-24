import React, {useState, useRef, useEffect} from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
    const {isSubmenuOpen, position, page: {page, links}} = useGlobalContext()
    const [colomn, setColomn] = useState('')
    const container = useRef(null)

    useEffect(() => {
        setColomn('col-2')
        const submenu = container.current
        const {center, bottom} = position
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        if (links.length === 3) {
            setColomn('col-3')
        }
        if (links.length > 3) {
            setColomn('col-4')
        }
    }, [position, page, links])

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>

            <div className={`submenu-center ${colomn}`}>
                {
                    links.map((link, index) => {
                        const {label, icon, url} = link
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })
                }
            </div>
        </aside>
    )
}

export default Submenu
