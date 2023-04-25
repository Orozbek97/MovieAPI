import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/multi?api_key=5f5c3fe7d8050abeb782fc995a4611da&language=ru&query=${searchText}&include_adult=false`
            );
            setSearchResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div className={"bg-dark"}>
            <div className={"container-xl"}>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <div className={"logo"}>
                        <img src='/images/logo_transparent.png' alt="" width={150} height={115}/>
                    </div>
                    <div className={'HeaderLinks d-flex gap-3 align-items-center text-primary'}>
                        <a href="#"> Главная </a>
                        |
                        <a  href="#"> Фильмы </a>
                        |
                        <a  href="#"> Сериалы </a>
                        |
                        <a  href="#"> Мультфильмы </a>
                    </div>
                    <div className={'searchPart'}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                value={searchText}
                                onChange={handleInputChange}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                            />

                            <Button variant="primary"  type='submit' onClick={handleSearch}>
                                Искать
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
            {/*<div className={'container-xxl pb-2'}>*/}
            {/*    <div className={'nav-link  d-flex gap-3 text-primary align-items-center'}>*/}
            {/*        <a href="#">  В Тренде </a>*/}
            {/*        <a href="#"> Популярные </a>*/}
            {/*        <a href="#"> Сейчас смотрят.. </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <ul>
                    {searchResults.map((result) => (
                        <h6 className={'text-white'} key={result.id}>{result.title }</h6>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
