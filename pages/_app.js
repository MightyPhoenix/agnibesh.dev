import React from 'react';
import {Container} from "next/app";
import './glitch.sass';
import './style.css';
import { PageTransition } from 'next-page-transitions'


const AgnibeshDev = ({Component, pageProps}) =>{
    return (
        <Container>
            <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition>
            <style>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
        </Container>
        )
};

export default AgnibeshDev;