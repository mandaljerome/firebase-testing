import React, { useEffect, useState } from 'react'
import './MovieData.scss'

const MovieData = () => {
   const [movie, setMovie] = useState([])
   const display = movie.map((item) => {
      return (
         <div key={item.id} className='movies movie'>
            <h1 className='title'>{item.title}</h1>
            <p className='description'>{item.description}</p>
            <p className='date'>{item.date}</p>
         </div>
      )
   })

   useEffect(() => {
      fetchMovie()
   }, [])

   const fetchMovie = async () => {
      const response = await fetch(
         'https://sample-project-3f4b9-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json'
      )
      const data = await response.json()

      const loadedMovies = []

      for (const key in data) {
         loadedMovies.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
            date: data[key].date,
         })
      }

      setMovie(loadedMovies)
   }

   return (
      <div className='movie-data'>
         <div className='container'>{display}</div>
      </div>
   )
}

export default MovieData
