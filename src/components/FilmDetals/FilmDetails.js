import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilmDetails.css'

const FilmDetails = () => {
    const myKey = '5f5c3fe7d8050abeb782fc995a4611da';
    const params = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${myKey}&language=ru`)
            .then(({ data }) => {
                setMovie(data);
            });
    }, [params.id]);

    return (
        <div>
            <Header />
            <div className={'container my-4'}>
                <h1> {movie.title}</h1>
                <h6> {movie.original_title}</h6>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <>
                            <img className={'poster'}
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                            />
                        </>
                    </div>
                    <div className={'col-6'}>
                        <h1 className={'mb-3'}> О фильме...</h1>
                        <div className={'description'}>
                            <div className={'about'}>
                                <h4> Рейтинги:  </h4> <h5 > {movie.vote_average}</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Всего голосовавших:  </h4> <h5 > {movie.vote_count} (чел)</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Слоган:  </h4> <h5 > {movie.tagline ? movie.tagline : 'Слоган нет!!'}</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Дата выхода:  </h4> <h5 > {movie.release_date}</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Жанры: </h4> <h5 > {movie.production_countries && movie.production_countries.map((country) => country.name).join(", ")}</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Бюджет: </h4> <h5 > {movie.budget > 0  ?  movie.budget : "Неизвестно"} $ </h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Доход: </h4> <h5 > {movie.revenue > 0  ? movie.revenue : "Неизвестно"} $</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Жанры: </h4> <h5>{movie.genres && movie.genres.map((genre) => genre.name).join(", ")}</h5>
                            </div>
                            <div className={'line'}></div>
                            <div className={'about'}>
                                <h4> Продолжительность: </h4> <h5 > {movie.runtime} минут</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmDetails;



