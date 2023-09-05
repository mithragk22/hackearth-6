import React, { useState } from 'react'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import mail_data from './mail_data.png'
import mail_data_2 from './mail_data_2.png'
import { useNavigate } from 'react-router-dom'

const Explore = () => {

    const [showtwo, setShowTwo] = useState(0)
    const [showthree, setShowThree] = useState(0)
    const navigate = useNavigate();

    const display_2 = () => {
        setShowTwo(1)
    }
    const display_3 = () => {
        setShowThree(1)
    }
    const showSolution = () => {
        navigate("/solution")
    }

    return (
        <div>
            <h2 class="d-inline-flex justify-content-center" style={{ color: "white", margin: "20px", backgroundColor: '#5a287d', padding: '5px' }} >How do emails create carbon footprints? </h2>
            
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-lg-start align-items-center">
                        <img src={one} height={250} width={250}></img>
                        <button class="align-self-center" style={{ backgroundColor: "#5a287d", color: "white" }} onClick={display_2}>Send</button>
                        <br/><div style={{ padding: '20px', marginLeft: "120px" }}><img src={mail_data} ></img></div>
                    </div>
                    <div class="d-flex justify-content-lg-start ">
                        {showtwo ? <img src={two} height={250} width={250} style={{marginLeft:"5px"}}></img> :""}
                        {showtwo ? <button class="align-self-center" style={{ backgroundColor: "#5a287d", color: "white" }} onClick={display_3}>leave seen</button>:""}
                        {showtwo ? <div style={{ padding: '20px', marginLeft: "100px" }}><img src={mail_data_2} ></img></div>: ""}
                    </div>
                    <div class="d-flex justify-content-lg-start" style={{marginTop:"50px",marginBottom:"60px"}}>
                        {showthree ? <img src={three} height={250} width={250}></img>:""}
                        {showthree ? <button class="align-self-center" style={{ backgroundColor: "#5a287d", color: "white" }} onClick={showSolution}>Solution proposed</button>:""}
                        {showthree ? <div className='step_3'>
                                If the person doesn't delete the email,
                                it gets stored on data servers, which takes a lot of energy to run. The longer someone stores an email,
                                the more carbon footprint gets created.
                        </div> : ""}
                    </div>

                </div>
                {/* {showthree ? <div class="d-flex-fill align-self-center align-items-end" style={{ margin: "50px", background: "#5a287d", color: 'white', width: '50%' }}>
                    <br />If the person doesn't delete the email,
                    it gets stored on data servers, which takes a lot of energy to run. The longer someone stores an email,
                    the more carbon footprint gets created.
                    If the person deletes the email, it'll be removed from the data servers and not increase the carbon footprint<br />
                    <p></p>
                </div> : ""} */}
            </div>

    )
}

export default Explore