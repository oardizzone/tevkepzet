import styled, { keyframes } from 'styled-components';
import { ReactComponent as SVG1 } from '../svg/landing/flash3.svg';

const path = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const Container = styled.div`
    min-height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.25rem #000 solid;
    border-top: 0;

    & svg {
        stroke-width: 0.5rem;

        & path {
            stroke-dasharray: 6550;
            stroke-dashoffset: 6550;
            animation: ${path} 10s ease;
            animation-fill-mode: forwards;
        }
    }
`;

const Home = () => {
    return (
        <Container>
            <SVG1 width={1000} height={1000} />
        </Container>
    );
};

export default Home;
