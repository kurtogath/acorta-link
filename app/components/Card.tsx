"use client";

import React from "react";

interface ChildProps {
    icon: React.ReactNode; // Define el tipo de la prop icon como React.ReactNode
    text: String;
}

const Card: React.FC<ChildProps> = ({ icon, text }) => {
    return (
        <div className="flex-col px-10 flex py-5 items-center bg-gray-400">
            {icon}
            <div>{text}</div>
        </div>
    );
};

export default Card;
