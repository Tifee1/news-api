const Footer = () => {
  return (
    <footer className='bg-[#919191] text-white min-h-[40px] grid items-center justify-center'>
      <div className='text-center'>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href='https://github.com/tifee1'
          target='_blank'
          className='font-semibold text-black-500'
        >
          Tifee
        </a>
      </div>
    </footer>
  )
}

export default Footer
