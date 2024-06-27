import React from "react";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import PackageRoutes from "./routes";

export default function MainPackage(props) {
    //replace file name and component with the package name
    // eg: <BSWPackage/> and BSWPackage.jsx

    return (
        <div>
            <Router>
                <PackageRoutes />
            </Router>
        </div>
    );
}
