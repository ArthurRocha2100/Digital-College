import { LinkProps, To } from "react-router-dom";

export interface TextLinkProps extends LinkProps{
    to: To;
    text?: string;
}