import React from 'react';
import Head from "next/head";

const HEAD = (props) => {
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="theme-color" content="#000" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <link rel="icon" href="favicon-agnidev3.png" type="image/png" />
            <title>{props.title}</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"/>
        </Head>
    );
};

export default HEAD;