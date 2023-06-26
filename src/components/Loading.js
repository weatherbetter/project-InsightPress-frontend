import React from "react";
import RiseLoader from "react-spinners/RiseLoader";

function Loading() {
    return (
        <div
            style={{
                margin: "auto",
                width: "50%",
            }}
        >
            <RiseLoader color="#e9debd" size={15} />
        </div>
    );
}

export default Loading;
