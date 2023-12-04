import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'

// URL DA API: movie/now_playing?api_key=761c5e59b3d5835032859874ba79ed9b&language=pt-BR

function Home() {
    const [filmes, setFilme] = useState([]);

    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "761c5e59b3d5835032859874ba79ed9b",
                    language: "pt-BR",
                    page: 1,

                }
            })
            //console.log(response.data.results.slice(0, 10))
            setFilme(response.data.results.slice(0, 10));
        }
        loadFilmes();
    }, [])

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`} >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
