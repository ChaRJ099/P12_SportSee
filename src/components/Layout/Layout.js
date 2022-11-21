import React from "react";
import "./layout.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout({children}) {
    return (
        <>
            <Header />
            <div className="bloc-main-sidebar">
                <Sidebar />
                <main>{children}</main>
            </div>
        </>
    );
}

export default Layout;