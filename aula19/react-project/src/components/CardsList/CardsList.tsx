import { Card } from "../Card/Card";
import styles from './CardsList.module.css'

const CardArray = [
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },  
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },    
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },
    {imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    name: 'Fulano',
    office: 'Dev'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: 'Fulano',
        office: 'Dev'
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