import React from "react";
// import { Component } from "react";
const User = (props) => {
    return (
        <>
            <h1>User data</h1>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </>
    );
}

export default User;