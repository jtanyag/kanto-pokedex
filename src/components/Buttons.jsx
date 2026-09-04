function Buttons() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <section className="flex flex-wrap justify-center items-center gap-5 mt-6">
      <button onClick={scrollToTop} className="btn btn-primary border-none rounded-md h-12.5 w-62.5">Back to Top</button>
    </section>
  )
}

export default Buttons