import React from 'react';
import styled from 'styled-components'
import QtVideo from '../qt.mp4'

const Styled = styled.header`
    background-color: red;

    a {
        text-decoration: none;
        color: inherit;
    }

    & > header {
        height: 100px;
        background-color: white;
    }

    & > div {
        height: 100vh;
        background-color: #3355ac;
        position: relative;
    }


    & > div:nth-of-type(3n + 1)::before {
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(0 0, 100% 0, 0 50px)
    }

    & > div:nth-of-type(3n + 1)::after {
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;

        clip-path: polygon(0 0, 100% 100%, 0 50px)
    }

    & > div:nth-of-type(3n)::before {
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(0 0, 100% 0, 0 50px)
    }

    & > div:nth-of-type(3n)::after {
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;

        clip-path: polygon(0 0, 100% 100%, 0 50px)
    }

    & > div > video {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    & > div > div {
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem;
    }

    & > div > div > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        justify-content: space-around;
    }

    & > div > div > div > a {
        padding: 1rem;
        clip-path: polygon(10px 0, 100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%, 0 100% ,0 10px);
        background-color: #41cd52;
        position: relative;
    }

    & > div > div > div > a + a {
        clip-path: unset;
        position: relative;
        background-color: transparent;
    }

    & > div > div > div > a + a::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #41cd52;
        left: 0;
        top: 0;
        clip-path: polygon(
            0 10px, 0 100%, 2px 100%,
            2px 10px, 10px 2px, calc(100% - 2px) 2px,
            calc(100% - 2px) calc(100% - 10px),
            calc(100% - 10px) calc(100% - 2px),   
            2px calc(100% - 2px), 2px 100%,
            calc(100% - 10px) 100%, 100% calc(100% - 10px),
            100% 0,10px 0
        );
    }


    
    & > div > div > div > a + a {
        margin-left: 1rem;
    }

    & > div > div > div >  div + div {
        margin-left: 2rem;
    }
`


const FrontPage = () => {


    return (
        <Styled>
            <header></header>
            <div>
                <video autoPlay loop muted>
                    <source src = {QtVideo} type = 'video/mp4'/>
                </video>
                <div>
                    <h1>One framework. One codebase. Any platform.</h1>
                    <p>Everything you need for your entire software development life cycle. Qt is the fastest and smartest way to produce industry-leading software that users love.</p>
                    <div>
                        <a href ='/'><span>Give Qt a try</span></a>
                        <a href ='/'><span>Get the full picture</span></a>
                    </div>

                    <div>
                        <div>
                            <h6>DESIGN</h6>
                            <h3>Create beautiful interfaces</h3>
                            <a href ='/'>Designing and prototyping with Qt</a>
                        </div>
                        <div>
                            <h6>DEVELOP</h6>
                            <h3>Code using powerful tools</h3>
                            <a href ='/'>Coding and testing with Qt</a>
                        </div>
                        <div>
                            <h6>DEPLOY</h6>
                            <h3>Build for all platforms </h3>
                            <a href ='/'>Deploying and maintaining with Qt</a>
                        </div>

                    </div>
                    
                    
                </div>

            </div>
            <div></div>
            <div></div>
            <div></div>
        </Styled>
    )
}

export default FrontPage