import Instagram from './../svg/instagram.svg';
import Email from './../svg/email.svg';
import styled from 'styled-components';

const Img = styled.img`
    width: 3rem;
    height: auto;
`;

const LI = styled.li`
    display: inline;
    margin: 0 0.5rem;
`;

const UL = styled.ul`
    list-style: none;
`;

const Socials = () => {
    return (
        <UL>
            <LI>
                <a href="https://www.instagram.com/tevkepzet/">
                    <Img src={Instagram} alt="Instagram" />
                </a>
            </LI>
            <LI>
                <a href="mailto:vincentdantevicenty@gmail.com">
                    <Img src={Email} alt="Email" />
                </a>
            </LI>
        </UL>
    );
};

export default Socials;
