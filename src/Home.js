import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react'
import th from './cf.jfif';
import agt from './agt.PNG';
import banner from './carbon_footprint.png';
import logo from './images/home_page_logo1.jpg';
import giki from './giki.svg';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {

  const [showcf,setShowcf]=useState(0)
  const navigate = useNavigate();

  const setShowcf_ =()=>
  {
    setShowcf(1)
  }

  const showExplore =() =>
  {
    navigate('/explore');
  }
  return (
    <div>
      <div className='logo_border'><img src={logo} height={300} width={1250}></img></div>
      <div className='logo_border1'> Making the world a difference!!</div>
        {/* <Card>
        <Card.Img variant="top" src={logo} style={{borderBlockColor:"black"}}/>
        <Card.Body>
            <Card.Title style=
            {{color:"#5a287d"}} >Making the world a difference!!</Card.Title>
        </Card.Body>
      </Card> */}
      <br/>
      <div class="d-flex justify-content-around  mb-3">
            <div class="p-4"><Card.Img variant="top" src={agt} width={400} height={350}/></div>
            <div class="p-3">We are working to deliver a more sustainable economy and future for the customers and 
                 communities we serve. It's why addressing climate change - one of the biggest issues of our time 
                 - sits at the heart of our purpose and strategy. <br/><br/>
                 <div style={{ background:"#5a287d", color: "white", height:"50px", justifyContent:"center",alignItems: "center", display:"flex"}}> Check the carbon footprint you created here!! 
                  &nbsp; < a href="/quiz" onClickCapture={setShowcf_} target="blank"><img src={giki} height={30}/> </a>
                  </div><br/>
                
                <div> {showcf ? <div><div style={{ background:"#d8bfd8", color: "black", height:"50px", justifyContent:"center",alignItems: "center", display:"flex"}}>Not happy with results!!<br/>
                Lets thrive together to make difference!!</div>
                
                <br/><h3  style={{ background:"#5a287d", color: "white", height:"50px", justifyContent:"center",alignItems: "center", display:"flex"}}>Problem focussed</h3><br/>
                 <p ><p style={{fontWeight:"bold"}}>Email carbon footprint</p>
                    Email carbon footprint is the volume of greenhouse gases released into the atmosphere when an individual or community creates,
                    sends, stores, and reads emails. </p>
                    These processes consume energy obtained from burning fossil fuels that emit greenhouse gases which add to their carbon footprint.<br/><br/>
                    
                    {/* <Button variant="success" onClick={showExplore}>Solution</Button> */}
                  
                    
                    </div> :""}</div>
                  
            </div>
        </div>
    </div>
  )
}

export default Home