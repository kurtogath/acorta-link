"use client";

import React, { useEffect, useRef, useState } from "react";

const FormUrl: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [shortUrl, setShortUrl] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Fetch");

        if (inputRef.current) {
            const url: string = inputRef.current.value;
            fetch("/api/shortUrl", {
                method: "POST",
            });
        }
    };

    useEffect(() => {
        // Code that exec when the component mounts

        if (inputRef.current) {
            inputRef.current.focus();
        }

        return () => {
            console.log("Componente desmontado");
        };
    }, []);

    return (
        <div className="form-url py-5">
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    className="input-url"
                    placeholder="URL"
                />
                <button className="button-submit" type="submit">
                    Acortar
                </button>
                <span>{shortUrl}</span>
            </form>
        </div>
    );
};

export default FormUrl;
