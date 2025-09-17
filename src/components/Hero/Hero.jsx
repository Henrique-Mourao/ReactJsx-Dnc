import {Link} from 'react-router-dom'
import './Hero.css'
import Button from '../Button/Button'

function Hero() {
    return (
        <div className="hero d-flex ak-center">
            <div className="hero-text">
                <h1>Let Your Home Be Unique</h1>
                <p>There are many variations of the passages of Lorem Ipsum available, but the majority.</p>
                <Link>
                <Button buttonStyle="secondary" arrow>
                    Get Started
                </Button>
                </Link>
            </div>
        </div>
    )
}
export default Hero