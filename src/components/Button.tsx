import React from 'react';
import ButtonTypes from '../enum/buttonTypes';
import { ButtonProps } from '../interfaces/buttonProps';

const Button: React.FC<ButtonProps> = ({ type, value, onClick }) => {
    let classStyle;

    if (type === ButtonTypes.PRIMARY) {
        classStyle=" bg-cyan-600";
        value="Submit";
      } else if (type === ButtonTypes.QUIZBUTTON) {
        classStyle="border-orange-500";
        value="answer"
      } else{
        classStyle="border-cyan-500";
        value="Create"
      }
    return (
        <button className={`px-3 py-2 mt-1 mb-1 active:scale-95 ${classStyle}`}>{value}</button>
    );
}

export default Button;