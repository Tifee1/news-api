import { Link } from 'react-router-dom'
import * as dayjs from 'dayjs'
import slugify from 'slugify'
import { NewsData } from '../features/newsSlice'

type Props = {
  item: NewsData
}

const SingleNewsItem = ({ item }: Props) => {
  // Turn News Title to a slug
  const slug = slugify(item.title, { lower: true, replacement: '-' })

  return (
    <article className='bg-white rounded-md py-4 px-8'>
      <h3 className='mb-4 mt-2'>{item.title}</h3>
      <p className='text-black/70'>{item.description}</p>
      <p className='my-2 text-[#589ea0]'>
        by <span>{item.author} | </span>
        {dayjs(item.publishedAt).format('DD MMM, YYYY')}
      </p>
      <Link
        to={`/news/${slug}`}
        className='trans text-2xl mr-3 capitalize px-1.5 py-1 rounded-sm text-[white] bg-[#549984] hover:bg-blue-900'
      >
        read me
      </Link>
    </article>
  )
}

export default SingleNewsItem
