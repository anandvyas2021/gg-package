import React from "react";

import { useRoutes } from "react-router-dom";

import { Testing } from "./lib";

export default function PackageRoutes(props) {
    let routes = useRoutes([
        {
            path: "/",
            element: <Testing {...props} />,
        },
    ]);
    return <div className="">{routes}</div>;
}
