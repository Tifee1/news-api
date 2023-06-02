const SingleNews = () => {
  return (
    <section className='w-[90%] max-w-5xl mx-auto my-8 grid gap-8'>
      <div>
        <img src='/no-image.svg' alt='no image' />
      </div>
      <div>
        <h2>title</h2>
        <div className='italic grid grid-cols-2 items-center justify-center gap-4 mt-8'>
          <h3>by author</h3>
          <h3>Date</h3>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
        asperiores illo temporibus voluptates eligendi cupiditate voluptas nisi
        labore fugit dolores, non amet necessitatibus, sapiente numquam cum
        libero voluptatem. Doloremque, nihil?
      </p>
    </section>
  )
}
export default SingleNews
