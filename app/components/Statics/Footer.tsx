"use client";

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">
                        © 2024 Todos los derechos reservados
                    </p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Acerca de
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
