import Navbtn from './Navbtn';
import styled from 'styled-components';
const pages = [
    {name: 'Home', path: '/'},
    {name: 'Flashes', path: '/flashes'},
    {name: 'Bio', path: '/bio'},
    {name: 'Commissions', path: '/commissions'},
];

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    min-height: 4rem;
    align-items: center;
`;

const Navbar = () => {
    return (
        <StyledNav>
           {pages.map((page) => ( <Navbtn title={page.name} path={page.path} /> ))}
        </StyledNav>
    )
}

export default Navbar;