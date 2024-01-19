import { Card } from "../Card/Card";
import styles from './CardsList.module.css'

const CardArray = [
    {
        imageUrl: 'https://i.pravatar.cc/150?img=1',
        name: 'Fulano',
        office: 'Full Stack'
    },
    {
        imageUrl: 'https://i.pravatar.cc/150?img=2',
        name: 'Tião',
        office: 'Font-End'
    },  
    {
        imageUrl: 'https://i.pravatar.cc/150?img=3',
        name: 'Zé',
        office: 'Back-End'
    },    
    {
        imageUrl: 'https://i.pravatar.cc/150?img=4',
        name: 'Ana',
        office: 'QA'
    },
    {
        imageUrl: 'https://i.pravatar.cc/150?img=5',
        name: 'Luiz',
        office: 'Técnico de redes'
    },
    {
        imageUrl: 'https://i.pravatar.cc/150?img=6',
        name: 'Chico',
        office: 'Puxador de cabo'
    },
    {imageUrl: 'https://i.pravatar.cc/150?img=7',
        name: 'Mundico',
        office: 'UX'
    },
    {
        imageUrl: 'https://i.pravatar.cc/150?img=8',
        name: 'Cicrano',
        office: 'DevOps'
    },
    {
        imageUrl: 'https://i.pravatar.cc/150?img=9',
        name: 'Tux',
        office: 'A Lenda'
    },
]

export const CardsList = () => {
    return(
        <div className={styles.cardsList}>
            {
                CardArray.map(card => (
                    <Card 
                        imageUrl={card.imageUrl}
                        name={card.name}
                        office={card.office}
                    />
                ))
            }
        </div>
    )
}