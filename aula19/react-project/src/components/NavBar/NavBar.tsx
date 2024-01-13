const anchors = ['Inicio', 'Sobre' , 'Contato']
import styles from './Navbar.module.css'

export const Navbar = () => {
    return(
        <div className={styles.NavBar}>
            {anchors.map(anchor => (
                <a className={styles.NavBarItem}>{anchor}</a>
            ))}            
        </div>
    )
}