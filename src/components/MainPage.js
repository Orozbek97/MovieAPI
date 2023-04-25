import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const MainPage = () => {
    const myKey = '5f5c3fe7d8050abeb782fc995a4611da';
    const [nowPlayMovie, setNowPlayMovie] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${myKey}&language=ru`)
            .then(({ data }) => {
                setNowPlayMovie(data.results);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=ru`)
            .then(({ data }) => {
                setPopularMovies(data.results);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${myKey}&language=ru`)
            .then(({data}) => {
                setTopMovies(data.results)
            });
    },[])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3.70,
        slidesToScroll: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3500,
    };

    return (
        <div>
            <Header />
            <div className={'containerr mt-4 overflow-hidden'}>
                <h2 className={'text-end'}> Сейчас смотрят </h2>
                <Slider {...settings}>
                    {nowPlayMovie.map(movie => (
                        <div key={movie.id}>
                            <Link to={`/film/id/${movie.id}`}>
                                <img
                                    className={'poster'}
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Link>
                        </div>
                    ))}
                </Slider>

                <h2 className={'text-end'}>Популярные фильмы</h2>
                <Slider {...settings}>
                    {popularMovies.map(movie => (
                        <div key={movie.id}>
                            <Link to={`/film/id/${movie.id}`}>
                                <img
                                    className={'poster img-fluid mx-auto'}
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Link>
                        </div>
                    ))}
                </Slider>

                <h2 className={'text-end'}>Топ фильмы</h2>
                <Slider {...settings}>
                    {topMovies.map(movie => (
                        <div key={movie.id}>
                            <Link to={`/film/id/${movie.id}`}>
                                <img
                                    className={'poster img-fluid mx-auto'}
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MainPage;
