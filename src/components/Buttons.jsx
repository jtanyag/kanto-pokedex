function Buttons(props) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <section className="buttons">
      {props.visibleCount < props.totalPokemon && <button onClick={props.handleLoadMore}>Load More</button>}
      <button onClick={scrollToTop}>Back to Top</button>
    </section>
  )
}

export default Buttons