import './Submit.css';
import Form from './Form/Form';

function Submit() {
    return(
        <div className="submit">
        <div className="container">
            <div className="mainInput">
                <div className="input">
                    <h3 className="mainTitle mb8">Looking for help with design</h3>
                    <h4 className="mainTxt mb33">Send me details</h4>
                   <Form />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Submit