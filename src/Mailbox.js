import React, { useState } from 'react'
import './App.css'
import Inbox from './Inbox';
import SentItem from './SentItem';
import Draft from './Draft';
import Compose from './Compose';
import compose_icon from './compose.jfif'
import { useNavigate } from 'react-router-dom'; 
import { BrowserRouter , Routes, Route} from 'react-router-dom';



const Mailbox = () => {
  const navigate = useNavigate();

  const[inbox,setInbox]=useState(0)
  const[sentItem,setSentItem]=useState(0)
  const[draft,setDraft]=useState(0)
  const[compose_,setCompose]=useState(0)

  const showInbox =() =>{
    setInbox(1)
    setSentItem(0)
    setDraft(0)
    setCompose(0)
  }

  const showSendItem =() =>{
    setInbox(0)
    setSentItem(1)
    setDraft(0)
    setCompose(0)
  }

  const showDraft =() =>{
    setInbox(0)
    setSentItem(0)
    setDraft(1)
    setCompose(0)
  }
  const showCompose =() =>{
    setInbox(0)
    setSentItem(0)
    setDraft(0)
    setCompose(1)
  }
  


  return (
    <div class="d-flex flex-row" style={{margin:'20px', height:'90vh'}}>
        <div class="d-flex flex-column" style={{background:"#5a287d", color: "white", borderColor:'white',width:'15%'}}>
          <div class="p-2 justify-content-start"><button className='button_mail' onClick={showInbox}>Inbox</button></div>
          <div class="p-2 justify-content-start"><button className='button_mail' onClick={showSendItem}>Sent Items</button></div>
          <div class="p-2 justify-content-start"><button className='button_mail' onClick={showDraft}>Draft</button></div>
          <div class="mt-auto p-2 justify-content-end" style={{textAlign:'right'}}><img src={compose_icon} width="60" height={"60"} onClick={showCompose}></img></div>
        </div>
        <div style={{background:"#5a287d", width:'100%', marginLeft:'20px'}}>
        {inbox ? <Inbox/>: sentItem ? <SentItem/> : draft ? <Draft/> : compose_ ? <Compose/> :<Compose/>}
        </div>
       
    </div>
  )
}

export default Mailbox