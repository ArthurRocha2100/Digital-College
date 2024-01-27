import {TextLinkProps} from './TextLink.props'
import styles from './TextLink.module.css'

export const TextLink: React.FC<TextLinkProps> = ( {children, onClick}) => {
    return(
        <a className={styles.NavBarItem} onClick={onClick}>{children}</a>
    )
}