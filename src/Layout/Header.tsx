import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#919191] text-white min-h-[80px] grid items-center'>
      <section className='flex items-center justify-between w-[90%] max-w-3xl mx-auto'>
        <h2 className='italic'>newsApi</h2>
        <nav className='flex gap-6'>
          <Link to='#about' className='trans hover:text-white/70'>
            About
          </Link>
          <Link to='#feature' className='trans hover:text-white/70'>
            Feature
          </Link>
          <Link to='#blog' className='trans hover:text-white/70'>
            Blog
          </Link>
          <Link to='#contact' className='trans hover:text-white/70'>
            Contact
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default Header
