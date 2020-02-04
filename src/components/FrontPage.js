import React from 'react';
import styled from 'styled-components'
import QtVideo from '../qt.mp4'

const Styled = styled.header`
    background-color: red;

    & > header {
        height: 100px;
        background-color: green;
    }

    & > div {
        height: 100vh;
        background-color: #3355ac;
        position: relative;
    }

    & > div:nth-of-type(3n + 1)::before {
        content: '';
        width: 100%;
        height: 60px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(0 0, 100% 0, 0 60px)
    }

    & > div:nth-of-type(3n + 1)::after {
        content: '';
        width: 100%;
        height: 60px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;

        clip-path: polygon(0 0, 100% 100%, 0 60px)
    }

    & > div:nth-of-type(3n)::before {
        content: '';
        width: 100%;
        height: 60px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(0 0, 100% 0, 0 60px)
    }

    & > div:nth-of-type(3n)::after {
        content: '';
        width: 100%;
        height: 60px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;

        clip-path: polygon(0 0, 100% 100%, 0 60px)
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
        font-weight: bold;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem;
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
                </div>

            </div>
            <div></div>
            <div></div>
            <div></div>
        </Styled>
    )
}

export default FrontPage