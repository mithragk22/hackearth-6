
import React, { useState } from 'react'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import th from './th.jfif'
import welldone from './welldone.jfif'
import { useNavigate } from 'react-router-dom'

const Solution = () => {
    
        
            const[showtwo,setShowTwo]=useState(0)
            const[showthree,setShowThree]=useState(0)
            const[yes,setYes]=useState(0)
            const navigate = useNavigate();
        
            const display_2=()=>{
                setShowTwo(1)
            }
            const display_3=()=>{
                setShowThree(1)
            }
            const showSolution =() =>{
                navigate("/solution")
            }
            const setStatus =(e)=>{
                if(e.target.value >0)
                    setYes(e.target.value * 50)
                else
                    setYes(4)
                setShowTwo(0)
                console.log(yes)
            } 

  return (
    <div>
        <h2 style={{color:"#5a287d", margin:"30px",textAlign:'center'}} >Solution</h2>
        {/* <div class="d-flex flex-row"> */}
        <div class="d-flex flex-column" >
            <div class="d-flex  justify-content-lg-start">
            <img src={one}></img>
            <div class="d-flex flex-column  align-self-end" style={{textAlign: 'left', marginLeft:'20px'}} >
                
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value='1' onChange={setStatus}/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Send Email with attachments
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='-1' onChange={setStatus}/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    Send Email without attachments
                    </label>
                </div>
                <div>
                    <button class="align-self-center" style={{backgroundColor:"#5a287d",color:"white"}} onClick={display_2}>Send</button>
                </div>
                </div>
            </div>
            <div>
                     {showtwo ?
                            <div><div class="justify-content-end" >
                                <div><img src={two}></img></div>
                            </div></div>
                    :""}

                    {showtwo && yes!=0 ?
                            <div   class="justify-content-end" style={{textAlign: 'center',background:"#5a287d",color:'white', marginLeft:'550px', marginRight:'550px'}} > 
                                {yes!=4 ?
                                    <div><img src={th} width='60' height='60' style={{alignItems:'center'}} ></img> 
                                     <div>you have created {yes}g co2 with this email</div></div>
                                    : 
                                    <div><img src={welldone}  width='60' height='60' style={{alignItems:'center'}} ></img> 
                                    <div>you have created {yes}g co2 with this email and saved 46g!!!</div></div>
                                   }<p></p>
                            </div>
                    :""}
            </div>
            </div>
            </div>
            
      
  )
}



export default Solution