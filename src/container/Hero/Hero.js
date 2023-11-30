import "./Hero.css"
import "../../index.css"
import Welcome from "../../assets/welcome.png"
import thermoter from "../../assets/thermometer.svg"

const Hero = () => {
  return (
    <div className="header wrapper section__padding">
        <div className="wrapper_info">
            <div className="" style={{marginBottom:"1rem"}}>
                <h4 className="subtitle">Stay clean</h4>
                <img src={thermoter} alt="thermometer" className='thermometer__img' />
            </div>
            <h1 className="title">Cleaning And Sanitizing</h1>
            <p style={{margin:"2rem 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam veritatis voluptate, exercitationem fugiat dolorem repellendus, quos ex obcaecati omnis perferendis blanditiis non nam, aliquid nobis illo molestias rem doloribus!</p>

            <button className="custom_button">Get Service Now</button>
        </div>

        <div className="wrapper_img">
            <img src={Welcome} alt="" />
        </div>
    </div>
  )
}

export default Hero