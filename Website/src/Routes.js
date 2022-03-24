import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path='/' element={Home} />
            </RoutesWrapper>
        </BrowserRouter>
    )
}