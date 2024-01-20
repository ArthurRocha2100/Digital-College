import styles from './CardsList.module.css'
import { CardListProps } from './CardsList.props'

export const CardsList: React.FC<CardListProps> = ({children}) => {
    return(
        <div className={styles.cardsList}>
            {children}
        </div>
    )
}