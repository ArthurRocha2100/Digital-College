import { Card } from "../Card/Card";
import styles from './CardsList.module.css'

const CardArray = [
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Full Stack'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Tião',
        office: 'Font-End'
    },  
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Zé',
        office: 'Back-End'
    },    
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Ana',
        office: 'QA'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Luiz',
        office: 'Técnico de redes'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Chico',
        office: 'Puxador de cabo'
    },
    {imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Mundico',
        office: 'UX'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Cicrano',
        office: 'DevOps'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
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