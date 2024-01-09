import { PiPlantFill } from "react-icons/pi"
import './Logo.css'

function Logo() {
    return(
        <div className="logo">
            <div className="logo-main">
                <p className="logo-title">modimal</p>
                <p className="logo-icon">
                    <PiPlantFill />
                </p>
            </div>
            <p className="logo-subtitle">women clothing</p>
        </div>
    )
}

export default Logo