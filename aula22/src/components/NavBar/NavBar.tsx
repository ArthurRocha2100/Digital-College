import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosClose } from "react-icons/io"
import { useState } from "react"
import { TextLink } from "../TextLink/TextLink"
import styles from './Navbar.module.css'

const anchors = ['Inicio', 'Sobre' , 'Contato',]

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
                <TextLink>{anchor}</TextLink>
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
                            <TextLink>{anchor}</TextLink>
                        ))}  
                    </div>
                </div>
            )}
        </>
    )
}

