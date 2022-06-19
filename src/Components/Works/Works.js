import './Works.css';
import rectangle1 from './../../images/Rectangle1.jpg'
import rectangle2 from './../../images/Rectangle2.jpg'
import rectangle3 from './../../images/Rectangle3.jpg'
import rectangle4 from './../../images/Rectangle4.jpg'
import rectangle5 from './../../images/Rectangle5.jpg'
import rectangle6 from './../../images/Rectangle6.jpg'

function Works() {
    return(
        <div className="works">
        <div className="container">
            <h2 className="mainTitle mb15">Some concept works</h2>
            <div className="contentFlex mb24">
                <img src={rectangle1} alt="Rectangle1" width="264" height="188"/>
                <img src={rectangle2} alt="Rectangle2" width="264" height="188"/>
                <img src={rectangle3} alt="Rectangle3" width="264" height="188"/>
            </div>
            <div className="contentFlex">
                <img src={rectangle4} alt="Rectangle4" width="264" height="188"/>
                <img src={rectangle5} alt="Rectangle5" width="264" height="188"/>
                <img src={rectangle6} alt="Rectangle6" width="264" height="188"/>
            </div>
        </div>

    </div>
    )
    
}

export default Works;