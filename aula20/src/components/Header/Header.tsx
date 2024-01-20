import { Logo } from '../Logo/Logo'
import { Navbar } from '../NavBar/NavBar'
import { LogoMenu } from '../LogoMenu/LogoMenu'
import './Header.module.css'
import { HeaderProps } from './Header.props'

export const Header: React.FC<HeaderProps> = ({search}) => {
    return(
        <header>
            <Logo />
            {search}
            <Navbar />
            <LogoMenu />
        </header>
    )
}