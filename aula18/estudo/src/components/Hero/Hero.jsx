import './Hero.css'
import HeroCard from '../HeroCard/HeroCard'

function Hero() {
    return(
        <div className="hero">
            <img
                className="hero-img"
                src="src/img/hero.png" 
                alt="Foto de duas modelos usando um vestido preto, posando para a foto em frente a uma lareira."
            />
    
            <HeroCard />
        </div>
    )
}

export default Hero