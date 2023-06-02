import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='h-screen w-screen flex flex-col gap-10 justify-center items-center'>
      <h2>The Resource You Are Looking For Dosent Exist</h2>
      <Link
        to='/'
        className='trans bg-[#919191] hover:bg-black text-white py-1.5 px-4 capitalize text-3xl rounded-md'
      >
        Back home
      </Link>
    </section>
  )
}

export default Error
