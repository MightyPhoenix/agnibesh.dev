import React from 'react';
import { useRouter } from 'next/router'
import './glitch.sass';
import './glitch2.sass';
import './style.css';
import { PageTransition } from 'next-page-transitions'


const AgnibeshDev = ({Component, pageProps}) =>{
    let router = useRouter();
    return (
        <div style={{padding:"0",margin:"0"}}>
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
        </div>
    )
};

export default AgnibeshDev;