import React,{useState,useEffect} from 'react'
import  movieTrailer from  'movie-trailer';
import YouTube from 'react-youtube';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main_content(props) {

    const column = props.column;
    const [movies, setMovies] = useState([]);
    const [youtubeurl, setyoutubeurl] = useState("");
    const [error, setError] = useState("")
    const url =  `https://api.themoviedb.org/3/discover/movie?api_key=05c12516177b1bae099303240c701af2&sort_by=popularity.desc&with_people=${props.id}`;

useEffect(()=>{

    const getMovies = axios.get(url)
    .then((response) => {
        setMovies(response.data.results);
    })
    .catch((error) =>{
       setError(error.message);
    })


},[]);

const moviename = (name) => {
   
    if(youtubeurl){
        setyoutubeurl('');
    }else{

    
    movieTrailer(name).then((res)=>{

        const urlPramas = new URLSearchParams(new URL(res).search);
        
        setyoutubeurl(urlPramas.get('v'));
    }).catch((error ) =>{
        console.log(error.message);
    })

}
}
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
}
    return (

        

        <>

        {(column === "2" ?
            <section className="main-container" >
      <div className="location" id="home">
          <h1 id="home">{props.type}</h1>
          <div className="box">

          {
          movies.slice(0,12).map((movie,index)=>(
             
             <img onClick = { () => moviename(movie.title)} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
             ))
          }
            
              
          </div>
      </div>
      </section>
         :  <section className="main-container" >
      <div className="location" id="home">
          <h1 id="home">{props.type}</h1>
          <div className="box">
          {
          movies.slice(0,6).map((movie,index)=>(
             
              <a onClick={(e)=>{moviename(movie.title)}}><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} /></a>
             ))
          }
    
            
          </div>
      </div>
      </section>)}
       {
        youtubeurl ? <div className="d-flex justify-content-center"><YouTube videoId={youtubeurl}   opts ={opts} /></div> : <div></div>
           
       }
      
        </>
    )
}

export default Main_content
