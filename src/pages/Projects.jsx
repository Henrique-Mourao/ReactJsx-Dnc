import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectsList/ProjectList"


function Projects() {
    return (
        <>
            <Header/>
            <div className="container">
                <Banner title="Projects" image="projectsPage.jpg"/>
                <ProjectList />
            </div>
            <Footer/>
        </>
    )
}
export default Projects