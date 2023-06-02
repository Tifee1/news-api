import News from '../components/News'
import SearchInput from '../components/SearchInput'

function Home() {
  return (
    <>
      <SearchInput />
      <News />
      <div className='w-[90vw] max-w-5xl mx-auto mb-6 flex justify-center items-center gap-4'>
        <button disabled={false} className='text-[#F3692E]'>
          prev
        </button>
        <button className='w-8 h-8 bg-[#919191] text-white flex items-center justify-center font-semibold'>
          1
        </button>
        <button className='w-8 h-8 text-[#919191] bg-white flex items-center justify-center font-semibold'>
          2
        </button>

        <button disabled={false} className='text-[#F3692E]'>
          next
        </button>
      </div>
    </>
  )
}

export default Home
