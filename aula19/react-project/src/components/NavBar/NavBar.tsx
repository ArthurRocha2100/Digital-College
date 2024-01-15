import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosClose } from "react-icons/io"
import styles from './Navbar.module.css'
import { useState } from "react"

const anchors = ['Inicio', 'Sobre' , 'Contato']

export const Navbar = () => {
    return(
        <>
            <NavBarDescktop/>
            <NavBarMobile />
        </>
    )
}


const NavBarDescktop = () => {
    return(
        <div className={styles.NavBar}>
            {anchors.map(anchor => (
                <a className={styles.NavBarItem}>{anchor}</a>
            ))}            
        </div>
    )
}

const NavBarMobile = () => {

    const [openMenu, setOpenMenu ] = useState(false)

    const toggleMenuState = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <RxHamburgerMenu  id={styles.HamburgerMenu} onClick={toggleMenuState}/>
            
            { openMenu && (
                
                <div className={styles.NavBarListAchor}>
                    <IoIosClose  id={styles.CloseIcon} onClick={toggleMenuState}/>

                    <div className={styles.NavBarMobile}>
                        {anchors.map(anchor => (
                            <a className={styles.NavBarMobileItem}>{anchor}</a>
                        ))}  
                    </div>
                </div>
            )}
        </>
    )
}

