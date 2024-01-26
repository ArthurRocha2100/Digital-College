import { CardProps } from "./Card.props"
import styles from './Card.module.css'

export const Card: React.FC<CardProps> = (
    {
        imageUrl,
        name,
        office
    }
) => {
    return(
        <div className={styles.card}>
            <img src={imageUrl} width='70px' height='70px'/>
            <p className={styles.cardName}>{name}</p>
            <p className={styles.cardOffice}>{office}</p>
        </div>
    )
}