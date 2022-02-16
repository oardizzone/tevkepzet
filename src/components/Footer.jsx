import Socials from './Socials';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 3rem;
    outline: 0.25rem #000 solid;
`;

const P = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0;
`

const Footer = () => {
    return (
        <StyledFooter>
            <P>DAMNED IF YOU DO, BORED IF YOU DON'T</P>
            <Socials />
        </StyledFooter>
    )
}

export default Footer;