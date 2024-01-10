import './ContainerLeft.css'

function ContentLeft() {
    return(
        <div className="container-left">
            <div className="container_left-card">
                <img src="src/img/Collection/l-pic2.png" alt="Imagem do busto de uma mulher usando uma camisa na cor branca" />
                <button className='container_left-btn' >Boluses</button>
            </div>
            <div className="container_left-card">
                <img src="src/img/Collection/l-pic1.png" alt="Imagem de uma mulher de pele clara, ventida com um vestido marrom claro, sentada em uma cadeira de couro marrom esculo." />
                <button className='container_left-btn' >Dresses</button>
            </div>
        </div>
    )
}

export default ContentLeft