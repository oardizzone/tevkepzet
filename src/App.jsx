import Header from './components/Header';
import Flashes from './components/Flashes';
import Home from './components/Home';
import styled from 'styled-components';

import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1025px) {
        width: 90%;
    }
`;

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Switch>
                    <Route exact path={'/'}>
                        <Home />
                    </Route>
                    <Route path={'/flashes'}>
                        <Flashes />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
