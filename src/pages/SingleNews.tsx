import { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { NewsData } from '../features/newsSlice'

const SingleNews = () => {
  const { slug } = useParams()
  const [newsItem, setNewsItem] = useState<NewsData>({} as NewsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // Fetch Single News
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios(
        `https://newsapi.org/v2/everything?q=${slug}&sortBy=relevancy&apiKey=211f160423844413902efb5f3bbcd9e7&pageSize=1`
      )
      const data = await res.data
      const news = data.articles[0]
      setNewsItem(news)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [slug])

  // If loading
  if (loading) {
    return (
      <section className='grid items-center justify-center'>
        <div className='loading'></div>
      </section>
    )
  }

  // If Error
  if (error) {
    return (
      <section className='grid pt-20 items-center justify-center'>
        <h2 className='text-center'>there was an error</h2>
      </section>
    )
  }

  // If news item not found
  if (!newsItem) {
    return (
      <section className='grid pt-20 items-center justify-center'>
        <h2 className='text-center'>No resource found</h2>
      </section>
    )
  }

  // Single Item
  return (
    <section className='w-[90%] max-w-5xl mx-auto my-8 grid gap-8'>
      <div>
        <img
          src={newsItem.urlToImage || '/no-image.svg'}
          alt={newsItem.title}
        />
      </div>
      <div>
        <h2>{newsItem.title}</h2>
        <div className='italic grid grid-cols-2 items-center justify-center gap-4 mt-8'>
          <h3>by {newsItem.author}</h3>
          <h3>{dayjs(newsItem.publishedAt).format('DD MMMM, YYYY')}</h3>
        </div>
      </div>
      <p>{newsItem.content}</p>
      <span>
        <a
          href={newsItem.url}
          target='_blank'
          className='text-xl text-red-500 hover:text-red-900'
        >
          Read More
        </a>
      </span>
    </section>
  )
}
export default SingleNews
