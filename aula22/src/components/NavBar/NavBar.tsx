import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosClose } from "react-icons/io"
import { useState } from "react"
import { TextLink } from "../TextLink/TextLink"
import styles from './Navbar.module.css'
import { ROUTER } from "../../pages/routes"

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
            <TextLink to={ROUTER.home} text='Início'/>
            <TextLink to={ROUTER.about} text='sobre' />
            <TextLink to={ROUTER.contact} text='contato'/>
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
                        <TextLink to={ROUTER.home} text='Início'/>
                        <TextLink to={ROUTER.about} text='sobre' />
                        <TextLink to={ROUTER.contact} text='contato'/>
                    </div>
                </div>
            )}
        </>
    )
}

