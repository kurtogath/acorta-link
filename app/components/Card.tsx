"use client";

import React from "react";

interface ChildProps {
    icon: React.ReactNode; // Define el tipo de la prop icon como React.ReactNode
    text: String;
}

const Card: React.FC<ChildProps> = ({ icon, text }) => {
    return (
        <div className="flex flex-col items-center bg-gray-400 px-10 py-5">
            {icon}
            <div>{text}</div>
        </div>
    );
};

export default Card;
