"use client";

import React, { useRef, useState } from "react";

const Home: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [shortUrl, setShortUrl] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Fetch");
    };

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div>Acorta tu link</div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            className=""
                            placeholder="URL"
                        />
                        <button type="submit">Acortar</button>
                        <span>{shortUrl}</span>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Home;
