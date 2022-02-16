import styled from 'styled-components';

const Shadow = styled.div`
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
    max-height: 30rem;
`;

const StyledCard = styled.div`
    height: 100%;
    position: relative;

    &:hover {
        clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 15%, 85% 0%);

        &::after {
            content: '';
            position: absolute;
            top: 0px;
            right: 0px;
            width: 15%;
            height: 15%;
            background: #fff;
            outline: 0.05rem #808080 solid;
        }
    }
`;
const StyledImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Card = ({ src }) => {
    return (
        <Shadow>
            <StyledCard>
                <StyledImg src={src} alt="Tattoo flash" />
            </StyledCard>
        </Shadow>
    );
};

export default Card;
