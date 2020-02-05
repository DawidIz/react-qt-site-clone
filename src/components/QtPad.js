import React from 'react';
import styled from 'styled-components'
import defaultIcon from '../assets/design.webp'

const Styled = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    & > img {
        padding-right: 1rem;
        width: 3rem;
        height: 3rem;
        flex-shrink: 0;
    }

    & > div > h6 {
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    & > div > a {
        text-decoration: none;
        color: inherit;
    }

    & > div > a:hover {
        color: #41cd52;
    }

    & > div > a::after {
        content: '>';
        display: inline;
        color: #41cd52;
        padding: 0 6px  0 6px;
        transition: 0.2s;
    }

    & > div > a:hover::after {
        padding: 0 2px 0 10px;
    }
`

const QtPad = props => (
    <Styled {...props}>
        <img src = { props.icon } alt = { props.icon }></img>
        <div>
            <h6>{ props.h6 }</h6>
            <h3>{ props.h3 }</h3>
            <a href = { props.href }>{ props.a }</a>
        </div>
    </Styled>)

QtPad.defaultProps = {
    icon : defaultIcon,
    h6 : 'deploy',
    h3 : 'Build for all platforms',
    a : 'Deploying and maintaining with Qt',
    href : '/'
}

export default QtPad