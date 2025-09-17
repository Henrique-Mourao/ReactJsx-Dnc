import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <>
        <Header/>
        <h1>Home</h1> 
        <p>Bem-vindo à nossa página inicial!</p>
        <Button buttonStyle="secondary" arrow> Olá</Button>
        <div className="container">
          <Hero/>
        </div>
        <Footer/>
    </>
  )
}
export default Home