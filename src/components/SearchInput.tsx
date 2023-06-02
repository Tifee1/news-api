import { useRef } from 'react'

const SearchInput = () => {
  const sourceRef = useRef<HTMLInputElement | null>(null)

  return (
    <section className='bg-white w-[90%] max-w-[25rem] mx-auto my-8 py-4 px-2 shadow-2xl rounded-lg'>
      <h3 className='text-center py-2'>search by source</h3>
      <form
        className='grid gap-4 mt-4'
        // onSubmit={findEvent}
      >
        <input
          type='text'
          name='source'
          ref={sourceRef}
          placeholder='Enter source here'
          className='border border-black/70 rounded-lg px-2 py-1 w-full max-w-[18rem] mx-auto'
        />
        <div className='text-center'>
          <button
            type='submit'
            className='trans bg-[#919191] text-white rounded-xl text-sm hover:bg-black/70 py-1.5 px-2.5 tracking-wider'
          >
            Search
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchInput
