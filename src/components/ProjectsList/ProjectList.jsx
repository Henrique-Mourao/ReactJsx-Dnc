import './ProjectList.css'
import LikedFilled from '../../assets/like-Filled.svg'

function ProjectList() {
    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="projects-grid">
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                        <h3>Henrique Mourão</h3>
                        <p>SP São Paulo</p>
                        <img src={LikedFilled} height="20px" />
                </div>      
            </div>
        </div>
    )
}
export default ProjectList
