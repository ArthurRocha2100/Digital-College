import './ContainerRight.css'

function ContainerRight() {
    return(
        <div className="container-right">
            <div className="container_right-card">
                <img src="src/img/Collection/r-pic1.png" alt="Modelo de pele branca, sando uma calsa verde militar, saparos preto e blusa banca, em frente a uma estante de livros." />
                <button className='container_right-btn' >Pants</button>
            </div>
            <div className="container_right-card">
                <img src="src/img/Collection/r-pic2.png" alt="Imagem do busto de uma mulher vestida com um sobre tudo marrom escuro" />
                <button className='container_right-btn' >Outwear</button>
            </div>
        </div>
    )
}

export default ContainerRight