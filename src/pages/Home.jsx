import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectsList/ProjectList"

function Home() {
  return (
    <>
        <Header/>
        <div className="container">
            <ProjectList/>
        </div>
        <Footer/>
    </>
  )
}
export default Home