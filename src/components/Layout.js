import SearchBar from './SearchBar';
import {
    Container
} from 'react-bootstrap';

function Layout({children, setGifList}) {
    return (
        <Container>
            <SearchBar setGifList={setGifList}/>
            {children}
        </Container>
    )
}

export default Layout;