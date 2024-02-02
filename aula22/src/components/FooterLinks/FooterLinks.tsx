import styles from './FooterLinks.module.css'

const ListLinksFooter = [
    {
        title: 'Sobre nós',
        links:['Quem somos', 'Missão', 'Visão']
    },
    {
        title: 'Contato',
        links:['E-mail', 'Telefone', 'Localização']
    },
    {
        title: 'Redes sociais',
        links:['Instagram', 'Twitter', 'Facebook']
    },
]

export const FooterLinks = () => {
    return(
        <>
            {ListLinksFooter.map( item => (
                <div className={styles.FooterLinksGrop}>
                    <p className={styles.FooterLinksGropTitle}>{item.title}</p>

                    {item.links.map(link => (
                        <ul>
                            <li className={styles.FooterLinksGropLink}>
                                <a href="#">{link}</a>
                            </li>
                        </ul>
                    ))}
                </div>
            ))}
        </>
    )
}