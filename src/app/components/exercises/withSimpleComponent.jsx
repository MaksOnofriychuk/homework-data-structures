import React from "react";
import CardWrapper from "../common/Card";

const withSimpleComponent = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    console.log(isAuth);
    const onLogin = () => {
        localStorage.setItem("user", "auth");
    };
    console.log(isAuth);
    const onLogOut = () => {
        if (isAuth) {
            console.log(localStorage.removeItem("user"));
        }
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withSimpleComponent;
