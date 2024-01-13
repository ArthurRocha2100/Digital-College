import { CardProps } from "./Card.props"
import styles from './Card.module.css'

export const Card = ({ src, name, office}: CardProps) => {
    <div className={styles.card}>
        <img src={src}></img>
        <p className="card-name">{name}</p>
        <p className="card-office">{office}</p>
    </div>
}