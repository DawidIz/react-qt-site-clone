import styled from 'styled-components'

const QtOverlay = styled.div`
    
    /* min-height: 10vh; */
    background-color: #3355ac;
    position: relative;
    

    &:nth-of-type(3n + 1)::before {
        z-index: 2;
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(0 0, 100% 0, 0 50px)
    }

    &:nth-of-type(3n + 1)::after {
        z-index: 2;
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;

        clip-path: polygon(0 0, 100% 100%, 0 50px)
    }

    &:nth-of-type(3n)::before {
        z-index: 2;
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;

        clip-path: polygon(0 0, 100% 0, 0 50px)
    }

    &:nth-of-type(3n)::after {
        z-index: 2;
        content: '';
        width: 100%;
        height: 50px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;

        clip-path: polygon(0 0, 100% 100%, 0 50px)
    }
`

export default QtOverlay