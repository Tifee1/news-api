import News from '../components/News'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import { useAppSelector } from '../store'

function Home() {
  const { error, loading } = useAppSelector((state) => state.news)
  return (
    <>
      <SearchInput />
      <News />
      {!error && !loading && <Pagination />}
    </>
  )
}

export default Home
