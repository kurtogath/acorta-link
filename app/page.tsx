"use client";

import React, { useRef, useState } from "react";
import Description from "./components/Description";
import FormUrl from "./components/FormUrl";

const Home: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [shortUrl, setShortUrl] = useState<string>("");

    return (
        <div className="flex flex-col items-center justify-between bg-red-700">
            <div className="py-5">Acorta tu link</div>
            <FormUrl />
            <Description />
        </div>
    );
};

export default Home;
