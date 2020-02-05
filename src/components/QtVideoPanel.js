import React from 'react';
import styled from 'styled-components'

import QtVideo from '../assets/qt.mp4'

import designIcon from '../assets/design.webp'
import developIcon from '../assets/develop.webp'
import deployIcon from '../assets/deploy.webp'

import QtButton from './QtButton'
import QtPad from './QtPad'

const Styled = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 640px;

    color: white;
    position: relative;

    & > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & > div {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 2rem;

    & > h1, p {
        width: 460px;
    }

    & > h1 {
        
    }

    & > p {
        
    }

`

const StyledButtons = styled.div`
    display: flex;
    margin-bottom: 3rem;

    & > a + a {
        margin-left: 1rem;
    }
`

const StyledPads = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > div + div {
        margin-left: 4rem;
    }
`



const QtVideoPanel = props => (
    <Styled {...props}>
        <video autoPlay loop muted>
            <source src = {QtVideo} type = 'video/mp4'/>
        </video>
        <div>
        <StyledColumn>
            <h1>One framework. One codebase. Any platform.</h1>
            <p>Everything you need for your entire software development life cycle. Qt is the fastest and smartest way to produce industry-leading software that users love.</p>
        
            <StyledButtons>
                <QtButton text = 'Give Qt a try' fill = { true }/>
                <QtButton text = 'Get the full picture' />
            </StyledButtons>

            <StyledPads>
                <QtPad
                    icon = { designIcon }
                    h6 = 'design'
                    h3 = 'Create beautiful interfaces'
                    a = 'Designing and prototyping with Qt'/>

                <QtPad 
                    icon = { developIcon }
                    h6 = 'develop'
                    h3 = 'Code using powerful tools'
                    a = 'Coding and testing with Qt'/>

                <QtPad 
                    icon = { deployIcon }
                    h6 = 'deploy'
                    h3 = 'Build for all platforms'
                    a = 'Deploying and maintaining with Qt'/>

            </StyledPads>
        </StyledColumn>
        </div>
    </Styled>)

export default QtVideoPanel