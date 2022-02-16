import Card from './Card';
import Footer from './Footer';
import styled from 'styled-components';

function importAll(r) {
    return r.keys().map(r);
}

const thumbs = importAll(require.context('./../img/thumbs', false, /\.JPG$/));

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 2rem;
    margin: 2rem 0;
`;

const Flashes = () => {
    return (
        <div>
            <GridWrapper>
                {thumbs.map((img) => (
                    <Card src={img.default} />
                ))}
            </GridWrapper>
            <Footer />
        </div>
    );
};

export default Flashes;
