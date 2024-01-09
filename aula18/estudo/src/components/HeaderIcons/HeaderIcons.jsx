import { IoPerson } from "react-icons/io5"
import { IoBagHandleSharp } from "react-icons/io5"
import { FaHeart } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import './HeaderIcons.css'

function HeaderIconsDesktop() {
    return(
        <ul className="icons">
            <li id="icon-search" className="icon">
                <FaSearch />
            </li>
            <li id="icon-person" className="icon">
                <IoPerson />
            </li>
            <li id="icon-favorite"className="icon">
                <FaHeart />
            </li>
            <li id="icon-bag" className="icon">
                <IoBagHandleSharp />
            </li>
        </ul>
    )
}

function HeaderIconsMobileLeft() {
    return(
        <ul className="icons">
            <li id="icon-menu" className="icon">
                <MdMenu />
            </li>
            <li id="icon-search" className="icon">
                <FaSearch />
            </li>
        </ul>
    )
}

function HeaderIconsMobileRight() {
    return(
        <ul className="icons">
            <li id="icon-favorite"className="icon">
                <FaHeart />
            </li>
            <li id="icon-bag" className="icon">
                <IoBagHandleSharp />
            </li>
        </ul>
    )
}

export {
    HeaderIconsDesktop,
    HeaderIconsMobileLeft,
    HeaderIconsMobileRight
} 