import Navbar from './Navbar';
import styled from 'styled-components';

import oldEnglish from './../fonts/old_english.woff';
import oldEnglish2 from './../fonts/old_english.woff2';

const StyledH1 = styled.h1`
    @font-face {
        font-family: 'Old English';
        src: url(${oldEnglish}) format('woff'), url(${oldEnglish2}) format('woff2');
    }
    font-family: 'Old English';
    font-size: clamp(3rem, 10vw, 8rem);
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
`;

const StyledHeader = styled.header`
    background: #fff;
    border: 0.25rem #000 solid;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledH1>TEVKEPZET</StyledH1>
            <Navbar />
        </StyledHeader>
    );
};

export default Header;
