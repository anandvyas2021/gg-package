import { ScreenSpinner } from "Components/SpecificComponents/ScreenSpinner";
import ServiceDisabled from "Components/SpecificComponents/ServiceDisabled";
import React, { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { useRoutes } from "react-router-dom";

const BestShoppingWebsites = React.lazy(() =>
    import("Pages/AllModules/BestShoppingWebsites")
);
const BrandDetails = React.lazy(() =>
    import("Pages/AllModules/BestShoppingWebsites/Components/BrandDetails")
);
const BillUploadHistory = React.lazy(() =>
    import("Pages/AllModules/BestShoppingWebsites/Components/BillUploadHistory")
);

export default function BSWRoutes(props) {
    //getting service data from redux store
    let redux = useContext(ReactReduxContext);
    let reduxStore = redux ? redux.store.getState() : null;
    let parentServices = reduxStore?.cacheData?.data?.parentServices ?? {};

    // check Parent service available or not
    let serviceExists = (slugName) => {
        return parentServices?.data?.some(function (el) {
            return el?.slug === slugName.toLowerCase();
        });
    };

    let routes = useRoutes([
        {
            path: "/",
            element: <BestShoppingWebsites {...props} />,
        },
        {
            path: "/brands",
            element: <BrandDetails {...props} />,
        },
        {
            path: "/bill-upload-history",
            element: <BillUploadHistory {...props} />,
        },
    ]);
    return parentServices?.loading ? (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "90vh" }}
        >
            <ScreenSpinner />
        </div>
    ) : serviceExists("bsw") ? (
        routes
    ) : (
        <ServiceDisabled {...props} />
    );
}
