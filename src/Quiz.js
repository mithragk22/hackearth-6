import React, { useState } from 'react'

const Quiz = () => {

const[q1_ans,setQ1_ans]=useState(0)
const[q2_ans,setQ2_ans]=useState(0)
const[q3_ans,setQ3_ans]=useState(0)
const[q4_ans,setQ4_ans]=useState(0)
const[q5_ans,setQ5_ans]=useState(1)

const setQ1 =(event) =>
{
  if(event.target.checked)
    setQ1_ans(19)
  else  
    setQ1_ans(0)
}
const setQ2 =(event) =>
{
  if(event.target.checked)
    setQ2_ans(0.2)
  else  
    setQ2_ans(0)
}
const setQ3 =(event) =>
{
  if(event.target.checked)
    setQ3_ans(26)
  else  
    setQ3_ans(0)
}
const setQ4 =(event) =>
{
  if(event.target.checked)
    setQ4_ans(26)
  else  
    setQ4_ans(0)
}
const setQ5 =(event) =>
{
  setQ5_ans(event.target.value)
}




  return (
    <div>
       <h2 class="d-inline-flex justify-content-center" style={{ margin: "20px", color: '#5a287d', padding: '5px' }} > Let calculate the carbon footprint you created today over Emails</h2>
       
          
        <table class="table" style={{textAlign:"left", alignSelf:"center"}}>
          <tr>
            <td  style={{width:"800px"}}>Have you attached a file in email instead of confluence link or shared link?</td>
            <td style={{width:"2px"}}>
              <input class="form-check-input" type="checkbox"  id="q1" onChange={setQ1}/>
              
            </td>
            <td>{q1_ans}g</td>
          </tr>
          <tr>
            <td  >Have you ever replied only with "Thank you" for an Email?</td>
            <td style={{width:"2px"}}>
              <input class="form-check-input" type="checkbox" value="" id="q2" onChange={setQ2}/>
            </td>
            <td>{q2_ans}g</td>
          </tr>
          <tr>
            <td  >Do you have more than 50 system notification emails?</td>
            <td style={{width:"2px"}}>
              <input class="form-check-input" type="checkbox" value="" id="q3" onChange={setQ3}/>
            </td>
            <td>{q3_ans}g</td>
          </tr>
          {/* <tr>
            <td >Do you created more than 3 remainders for any email?</td>
            <td style={{width:"2px"}}>
              <input class="form-check-input" type="checkbox" value="" id="q4" onChange={setQ4}/>
            </td>
            <td>{q4_ans}</td>
          </tr> */}
          <tr>
            <td >How many emails you normally send with all the things about?</td>
            <td style={{width:"2px"}}>
              <input class="form-check-input" type="number"  id="q5" onChange={setQ5}/>
            </td>
            <td>{q5_ans}g</td>
          </tr>
        </table>
        <h2 class="d-inline-flex justify-content-center" style={{ color: "white", margin: "20px", backgroundColor: '#5a287d', padding: '5px' }} > Email carbon footprints you created today : {(q1_ans + q2_ans + q3_ans + q4_ans )* q5_ans} g</h2>
       
      
    </div>
  )
}

export default Quiz