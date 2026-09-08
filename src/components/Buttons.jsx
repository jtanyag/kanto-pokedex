import { useLocation, useNavigate } from 'react-router'

const Buttons = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const goHome = () => {
    navigate("/");
  }

  const location = useLocation();
  const isDetailsPage = location.pathname.includes("/pokemon-details/");

  const btnText = isDetailsPage ? "Home" : "Back to Top";
  const handleClick = isDetailsPage ? goHome : scrollToTop;


  return (
    <section className="flex flex-col justify-center items-center gap-5 mt-6 fixed right-2.5 bottom-2.5">
      <button onClick={handleClick} className="btn btn-primary border-none rounded-md h-12.5 w-62.5">{btnText}</button>
    </section>
  )
}

export default Buttons