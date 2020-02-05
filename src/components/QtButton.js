import React from 'react';
import styled from 'styled-components'

const Styled = styled.a`
    padding: 1rem;
    text-decoration: none;
    background-color: ${props => props.fill ? props.colorBackground : 'none'};
    
    clip-path: polygon(10px 0, 100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%, 0 100% ,0 10px);
    color: ${props => props.fill ? 'white' : props.colorBackground};
    position: relative;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-color: ${props => props.colorBackground};

        clip-path: polygon(
            0 10px, 0 100%, 2px 100%,
            2px 11px, 11px 2px, calc(100% - 2px) 2px,
            calc(100% - 2px) calc(100% - 10px),
            calc(100% - 10px) calc(100% - 2px),   
            2px calc(100% - 2px), 2px 100%,
            calc(100% - 9px) 100%, 100% calc(100% - 9px),
            100% 0,10px 0
        );
    }

    & > span {
        transition: .4s;
        padding: 0 1rem 0 1rem;
    }

    &:hover > span {
        padding: 0 0.5rem 0 1.5rem;
    }

    & > span::before {
        content: '>';
        opacity: 0;
        position: absolute;
        left: 0.5rem;
        transition: .2s;
    }

    &:hover > span::before {
        left: 1.2rem;
        opacity: 1;
    }
`

const QtButton = props => (
    <Styled {...props}>
        <span>{ props.text }</span>
    </Styled>)

QtButton.defaultProps = {
    href : '/',
    text : 'test test test',
    fill : false,
    colorBackground : '#41cd52'
}

export default QtButton