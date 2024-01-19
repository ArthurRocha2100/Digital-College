import { Logo } from '../Logo/Logo'
import { Navbar } from '../NavBar/NavBar'
import { LogoMenu } from '../LogoMenu/LogoMenu'
import './Header.module.css'

export const Header = () => {
    return(
        <header>
            <Logo />
            <Navbar />
            <LogoMenu />
        </header>
    )
}