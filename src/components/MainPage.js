import React, {useEffect, useState} from 'react';
import Header from "./Header";
import axios from "axios";
import {Link} from "react-router-dom";

const MainPage = () => {
    const myKey = '5f5c3fe7d8050abeb782fc995a4611da';
    const [movie , setMovie] = useState([])
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=ru`)
            .then(({data}) => {
                setMovie(data.results);
            })
    },[])
    return (
        <div>
          <Header/>
            <div className={'container mt-4'}>
                <div className={'row'}>
                    {movie.map((movies) => (
                       <div key={movies.id} className={'col-3'}>
                           <Link to={`/film/id/${movies.id}`} >
                               <div className={'box'}>
                                   <div className={'movie-card'}>
                                       <img className={'poster'}
                                            src={`https://image.tmdb.org/t/p/w185${movies.poster_path}`} alt=""/>
                                       <h6 className={'text-center title'}> {movies.title}</h6>
                                   </div>
                               </div>
                           </Link>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;