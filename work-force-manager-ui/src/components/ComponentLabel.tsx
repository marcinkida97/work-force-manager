import React from "react";

type ComponentLabelProps = {
    text: string;
}

const ComponentLabel = ({ text }: ComponentLabelProps) => {
    return (
        <h2 className="mb-3">{text}</h2>
    );
}

export default ComponentLabel;
