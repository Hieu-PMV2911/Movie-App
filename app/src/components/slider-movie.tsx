import React from 'react'
import { getDiscoverMovies } from '../services/getMovies.service'
import SliderBanner from './slider-banner'

type IProps = {
  id?: string,
  keyword?: string
}


async function SliderMovie({ id, keyword }: IProps) {
  const movies = await getDiscoverMovies(id, keyword);
  return (
    <div>
      <SliderBanner movies={movies} />
    </div>
  )
}

export default SliderMovie