import React from 'react'
import { useState, useEffect } from 'react'
import { MovieCard } from '../Styles/StrapiData.Styled';


export const StrapiData = () => {
  const [data, setData] = useState([]);
  const baseurl = `http://localhost:1337`
  const endpoint = `/api/movies?populate=*`

  const [showMore, setShowMore] = useState(false);


  useEffect(() => {
    fetch(baseurl + endpoint)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data.data);
        // console.log(data)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })
  }, [baseurl + endpoint])

  return (
    <>
      {data && data.map(movie => {
        return (
          <>
            <h2>{movie.attributes.name}</h2>
            <MovieCard key={movie.id}>
              <div>
                <img src={baseurl + movie.attributes.images.data.attributes.url} />
                <h5>Caption: {movie.attributes.images.data.attributes.caption}</h5>
              </div>
              <div>          
                <p>{movie.attributes.excerpt}</p>
                <button className="btn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Read more"}</button>
                    {/* Shows a brief if showMore is not true */}
                <p>{showMore ? movie.attributes.description : `${movie.attributes.description.substring(0, 250)}`}
                  </p>
              </div>
            </MovieCard>
          </>

        )
      })}
    </>
  )
}
