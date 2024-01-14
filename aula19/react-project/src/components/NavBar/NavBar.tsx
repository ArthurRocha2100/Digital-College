import { RxHamburgerMenu } from "react-icons/rx";
import styles from './Navbar.module.css'

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
    return (
        <RxHamburgerMenu  id={styles.HamburgerMenu} />
    )
}

