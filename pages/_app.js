import React from 'react';
import { useRouter } from 'next/router'
import './glitch.sass';
import './style.css';
import { PageTransition } from 'next-page-transitions'


const AgnibeshDev = ({Component, pageProps}) =>{
    let router = useRouter();
    return (
        <>
            <PageTransition timeout={800} classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition>
            <style>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 800ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 800ms;
          }
        `}</style>
        </>
    )
};

export default AgnibeshDev;