import {useState} from 'react';
import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
const giphy = require('giphy-api-without-credentials')();

function SearchBar({setGifList}) {
    const [searchText, setSearchText] = useState('');
    
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search all the gifs"
                aria-label="Search"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <InputGroup.Append>
                <Button variant="outline-secondary"
                    onClick={() => {
                        // alert(searchText);
                        giphy.search(searchText, (err, res) => {
                            console.log(res);
                            setGifList(res.data);
                        })
                    }}
                >Search</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default SearchBar;
