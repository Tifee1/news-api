import { setPage, prevPage, nextPage } from '../features/newsSlice'
import { useAppDispatch, useAppSelector } from '../store'

const Pagination = () => {
  const { page, pagination, loading } = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()

  const pages = [...Array(pagination).keys()]

  return (
    <div className='w-[90vw] max-w-5xl mx-auto mb-6 flex justify-center items-center gap-4'>
      <button
        disabled={loading}
        className='text-[#F3692E]'
        onClick={() => dispatch(prevPage())}
      >
        prev
      </button>
      {pages.map((item) => {
        return (
          <button
            className={`w-8 h-8 flex items-center justify-center font-semibold ${
              item === page - 1
                ? 'bg-[#919191] text-white'
                : 'text-[#919191] bg-white'
            }`}
            key={item}
            disabled={loading}
            onClick={() => dispatch(setPage(item + 1))}
          >
            {item + 1}
          </button>
        )
      })}

      <button
        disabled={loading}
        className='text-[#F3692E]'
        onClick={() => dispatch(nextPage())}
      >
        next
      </button>
    </div>
  )
}

export default Pagination
