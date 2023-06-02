import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
      <h2 className='text-center mb-8'>News</h2>
      <section className='w-[90vw] max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-8'>
        <article className='bg-white rounded-md py-4 px-8'>
          <h3 className='mb-4 mt-2'>hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsa nesciunt architecto corporis aliquam, nulla quisquam iusto sed
            et voluptatibus ullam, voluptates assumenda facilis tenetur
            accusamus aut totam quam? Sed?
          </p>
          <p className='mb-2 text-[#589ea0]'>
            by <span>author |</span> date
          </p>
          <Link to='/' className='text-sm mr-3 capitalize text-[#549984]'>
            read me
          </Link>
        </article>
        <article className='bg-white rounded-md py-4 px-8'>
          <h3 className='mb-4 mt-2'>hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsa nesciunt architecto corporis aliquam, nulla quisquam iusto sed
            et voluptatibus ullam, voluptates assumenda facilis tenetur
            accusamus aut totam quam? Sed?
          </p>
          <p className='mb-2 text-[#589ea0]'>
            by <span>author |</span> date
          </p>
          <Link to='/' className='text-sm mr-3 capitalize text-[#549984]'>
            read me
          </Link>
        </article>
        <article className='bg-white rounded-md py-4 px-8'>
          <h3 className='mb-4 mt-2'>hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsa nesciunt architecto corporis aliquam, nulla quisquam iusto sed
            et voluptatibus ullam, voluptates assumenda facilis tenetur
            accusamus aut totam quam? Sed?
          </p>
          <p className='mb-2 text-[#589ea0]'>
            by <span>author |</span> date
          </p>
          <Link to='/' className='text-sm mr-3 capitalize text-[#549984]'>
            read me
          </Link>
        </article>
        <article className='bg-white rounded-md py-4 px-8'>
          <h3 className='mb-4 mt-2'>hello</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsa nesciunt architecto corporis aliquam, nulla quisquam iusto sed
            et voluptatibus ullam, voluptates assumenda facilis tenetur
            accusamus aut totam quam? Sed?
          </p>
          <p className='mb-2 text-[#589ea0]'>
            by <span>author |</span> date
          </p>
          <Link to='/' className='text-sm mr-3 capitalize text-[#549984]'>
            read me
          </Link>
        </article>
      </section>
    </>
  )
}

export default News
