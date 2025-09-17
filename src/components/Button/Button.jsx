// ASSETS
import './Button.css'
import WhiteArrow from '../../assets/white-arrow.svg'

const Button = ({ arrow, buttonStyle, children, ...props }) => {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
      {children} {arrow && <img src={WhiteArrow} alt="Arrow" />}
    </button>
  )
}

export default Button