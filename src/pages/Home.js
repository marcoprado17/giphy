import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import  {
    Row,
    Col,
    Modal,
    Button
} from 'react-bootstrap';
const giphy = require('giphy-api-without-credentials')();

function Home() {
    const [gifList, setGifList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalSrc, setModalSrc] = useState('');
    const [modalRating, setModalRating] = useState('');
    const [favoriteGifs, setFavoriteGifs] = useState({});
    const [modalGif, setModalGif] = useState(undefined);

    const [currentGifIsFavorite, setCurrentGifIsFavorite] = useState(false);

    useEffect(() => {
        giphy.trending((err, res) => {
            console.log(res);
            setGifList(res.data);
        })

        // var myHeaders = new Headers();
        // myHeaders.append("api_key", "5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        // myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch("//api.giphy.com/v1/gifs/trending", requestOptions)
        //     .then(response => {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then(jsonResponse => {
        //         console.log(jsonResponse);
        //         return [
        //             {

        //             }
        //         ]
        //     })
        // ;
    }, []);

    console.log(gifList);
    
    return (
        <Layout setGifList={setGifList}>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button
                        onClick={() => {
                            setFavoriteGifs({
                                ...favoriteGifs,
                                [modalGif.id]: true
                            })
                        }}
                    >
                        Favorite
                    </Button>
                    <br/>
                    Rating: {modalRating}
                    <br/>
                    Is Favorite: {currentGifIsFavorite}
                    <br/>
                    <img src={modalSrc} 
                                ></img>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            <Row>
                {
                    gifList.map(gif => {
                        return (
                            <Col>
                                <img src={gif.images.fixed_height.url} 
                                    onClick={() => {
                                        setShowModal(true);
                                        setModalTitle(gif.title);
                                        setModalSrc(gif.images.fixed_height.url);
                                        setModalRating(gif.rating);
                                        setModalGif(gif);
                                    }}
                                ></img>
                            </Col>
                        )
                    })
                }
            </Row>
        </Layout>
    )
}

export default Home;