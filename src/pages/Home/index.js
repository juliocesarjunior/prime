import { useEffect, useState } from 'react';
import api from '../../services/api';

// URL DA API: movie/now_playing?api_key=761c5e59b3d5835032859874ba79ed9b&language=pt-BR

function Home() {
    const [filmes, setFilme] = useState([]);

    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: "761c5e59b3d5835032859874ba79ed9b",
                    language: "pt-BR",
                    page: 1,

                }
            })
            console.log(response.data.results)

        }
        loadFilmes();
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
