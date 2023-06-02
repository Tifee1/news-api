import { useEffect } from 'react'
import { fetchData } from '../features/newsSlice'
import { useAppDispatch, useAppSelector } from '../store'
import SingleNewsItem from './SingleNewsItem'

const News = () => {
  const { loading, news, page, search, error } = useAppSelector(
    (state) => state.news
  )

  const dispatch = useAppDispatch()
  console.log(error)

  // Fetch data
  useEffect(() => {
    dispatch(fetchData())
  }, [page, search])

  // If loading
  if (loading) {
    return (
      <section className='py-12'>
        <div className='loading'></div>
      </section>
    )
  }

  // if axios error
  if (error) {
    return (
      <section className='grid items-center pt-20 justify-center'>
        <h2 className='text-center'>No news found</h2>
      </section>
    )
  }

  // if no item in array
  if (news.length < 1) {
    return (
      <section className='grid items-center pt-20 justify-center'>
        <h2 className='text-center'>No news Found</h2>
      </section>
    )
  }

  // Return News Item
  return (
    <>
      <h2 className='text-center mb-8'>News</h2>
      <section className='w-[90vw] max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-8'>
        {news.map((item, index) => {
          return <SingleNewsItem key={index} item={item} />
        })}
      </section>
    </>
  )
}

export default News
