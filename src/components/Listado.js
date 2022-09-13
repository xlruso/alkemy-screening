import {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

function Listado() {
const navigate = useNavigate();

let token = null;


useEffect(() => {
    token = localStorage.getItem('token')
    if(token === null) {
        navigate('/');
    }
}, [navigate]);

const [moviesList, setMoviesList] = useState([]);


useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=e2a7f64ff208d88477fd38d0a045e427&language=es-ES&page=1'
    axios.get(endPoint)
    .then(response => {
        const apiData = response.data;
        setMoviesList(apiData.results);
    })
    .catch(error => {
        swAlert(<h2>Ocurrio un problema, intenta más tarde</h2>);
    })
}, [setMoviesList]);

    return(
        <>

     <div className="row">
        {
            moviesList.map((oneMovie, idx) => {
                return (
                    <div className="col-3" key={idx}>
            <div className="card my-4">
            <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">{oneMovie.title.substring(0, 30)}...</h5>
            <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Ver Más</Link>
            </div>
        </div>
        </div>
         
                )
            })
        }
        
     </div>
    </>);
}

export default Listado;