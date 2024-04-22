"use client";

import React, { useRef, useState } from "react";
import Description from "./components/Description";
import FormUrl from "./components/FormUrl";

const Home: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [shortUrl, setShortUrl] = useState<string>("");

    return (
        <div className="flex flex-col items-center justify-between ">
            <p className="py-5 text-2xl">Acorta tu link</p>
            <p className="py-3 text-lg"> Acorta tus links 👍 </p>
            <FormUrl />
            <Description />
        </div>
    );
};

export default Home;
