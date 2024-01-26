import { CardProps } from "./Card.props"
import styles from './Card.module.css'

export const Card = (
    {
        imageUrl,
        name,
        office
    }: CardProps
) => {
    return(
        <div className={styles.card}>
            <img src={imageUrl}/>
            <p className={styles.cardName}>{name}</p>
            <p className={styles.cardOffice}>{office}</p>
        </div>
    )
}