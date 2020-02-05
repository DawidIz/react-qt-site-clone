import React from 'react';
import styled from 'styled-components'


import QtVideoPanel from './QtVideoPanel'



import QtOverlay from './QtOverlay'

const Flex = styled.div`
    display: flex;
    justify-content: ${ props => props.justifyContent };
    flex-direction: ${ props => props.flexDirection };
    align-items: ${ props => props.alignItems };
    align-content: ${ props => props.alignContent };

    ${ props => props.customCss ? props.customCss : ''} 
`
Flex.defaultProps = {
    justifyContent : 'flex-start',
    flexDirection : 'row',
    alignItems : 'stretch',
    alignContent : 'flex-start',
    customCss : '',
}

const Main = styled.main`
    /* & > div > video {
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
        align-items: center;
        padding: 2rem;
    } */

`

// qtwrapper => qtoverlay

const FrontPage = () => {

    return (
        <Main>
            <QtOverlay>
                <QtVideoPanel />
            </QtOverlay>

            <QtOverlay></QtOverlay>
            <QtOverlay></QtOverlay>
            <QtOverlay></QtOverlay>
            <QtOverlay></QtOverlay>
            <QtOverlay></QtOverlay>
            <QtOverlay></QtOverlay>
        </Main>
    )
}

export default FrontPage