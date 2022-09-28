import React from 'react'
import {useState, useEffect} from 'react'


export const Card = () => {
    const [data, setData] = useState([]);
    const url = `http://localhost/wordpress/wp-json/wp/v2/movies`

      useEffect(() => {
          fetch(url)
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setData(data);
            // console.log(data)
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            }
          })
        }, [url])

  return (
  <>
{data && data.map(movie => {
    return(
        <figure key={movie.id}>
            <img src={movie.yoast_head_json.og_image[0].url} alt="movie"></img>
            <figcaption>
            <h2>{movie.title.rendered}</h2> 
            <h5>Director: {movie.acf.director}</h5>
            <h5>Actors: {movie.acf.actors}</h5>
            <h5>Duration: {movie.acf.duration} hours</h5>
             <p>{movie.yoast_head_json.og_description}</p>
            </figcaption>
        </figure>
    )
})}
  </>
  )
}
