import { MouseEventHandler } from "react";

export interface ButtonProps{
        style: string;
        text: string;
        onClick: MouseEventHandler<HTMLButtonElement>;
}