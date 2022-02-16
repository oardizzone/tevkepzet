import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const StyledLinkContainer = styled.div`
    a {
        position: relative;
        padding: 0.5rem 0;
        text-decoration: none;
        color: #000;
        font-weight: 600;
        margin: 0 1rem;
        display: inline-block;

        &::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 0.15em;
            background: #000;
            opacity: 0;
            transform: scale(0);
            transition: opacity 300ms, transform 300ms;
        }

        &:hover {
            &::after {
                opacity: 1;
                transform: scale(1);
                transform-origin: center;
            }
        }

        &:focus {
            &::after {
                opacity: 1;
                transform: scale(1);
                transform-origin: center;
            }
        }
    }
`;

const Navbtn = ({ title, path }) => {
    return (
        <StyledLinkContainer>
            <Link to={path}>{title}</Link>
        </StyledLinkContainer>
    );
};

export default withRouter(Navbtn);
