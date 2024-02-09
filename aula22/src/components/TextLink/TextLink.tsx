import {TextLinkProps} from './TextLink.props'
import styles from './TextLink.module.css'
import { Link } from 'react-router-dom'

export const TextLink: React.FC<TextLinkProps> = ( { to, text }) => {
    return(
        <Link to={to} className={styles.NavBarItem}> {text} </Link>
    )
}