"use client";

import { IconChartHistogram, IconLink, IconThumbUp } from "@tabler/icons-react";
import React from "react";
import Card from "./Card";

const Description: React.FC = () => {
    return (
        <div>
            <div className="my-10 flex flex-row">
                <Card
                    icon={<IconLink color="blue" size={72} />}
                    text="Acortador de Links"
                />
                <Card
                    icon={<IconChartHistogram color="blue" size={72} />}
                    text="Graficas con estadistic a detalladas de quien usa tus links"
                />
                <Card
                    icon={<IconThumbUp color="blue" size={72} />}
                    text="Facil de usar, para todo el mundo"
                />
            </div>
        </div>
    );
};

export default Description;
