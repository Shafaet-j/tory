import React from "react";

const layout = ({ children }) => {
    return (
        <div>
            <div className=" min-h-[calc(100dvh-200px)]">{children}</div>
        </div>
    );
};

export default layout;