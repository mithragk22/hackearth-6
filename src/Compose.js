import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { X } from "react-bootstrap-icons";
import {useRef} from 'react';


const Compose = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [size, setSize] = useState(0)
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const changeHandler = (event) => {

        setSelectedFile(event.target.files[0]);

    }

    const handleCloseWithFile =() =>{
        inputRef.current.value = null;
        setSelectedFile(null)
        setSize(0)
    }

    const checkSend = (event) => {
        
        if (selectedFile != null)
        {
            setSize((selectedFile.size / 1000000)*19)
            console.log(selectedFile.size)
            setShow(true)
        }
    }

    const resetFileInput = () => {
        // 👇️ reset input value
        console.log("in")
        inputRef.current.value = null;
        setSelectedFile(null)
        setSize(0)
      };

    return (
        <div class='d-flex flex-column'>
            {size > 0 ? <Modal  show={show} onHide={handleClose} class="d-flex align-items-center">
                <Modal.Header closeButton>
                    <Modal.Title>Green Elements caution!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>The file attached will leave {size} grams of carbon footprint!!  Please share confluence link or shared drive link to avoid this!!!</Modal.Body>
                <Modal.Footer>
                    <button type="button" className='popup_button' onClick={handleClose}>Close</button> 
                    <button type="button" className='popup_button' onClick={handleCloseWithFile}>Send anyway</button> 
                </Modal.Footer>
                </Modal> 
                        : ""}
            <div class='d-flex flex-row p-2'>
                <div class="p-2 justify-content-start ">
                    <div class="p-2 d-flex flex-row  justify-content-start">
                        <button type="button" className='send_button' onClick={checkSend}>Send</button> 
                    </div>
                </div>
                <div class='d-flex w-100 flex-column'>
                    <div class="p-2 d-flex flex-row  justify-content-start">
                        <label className='label_mail' >To</label>
                        <input type="text" style={{ width: "100%" }}></input>
                    </div>
                    <div class="p-2 d-flex flex-row justify-content-start">
                        <label className='label_mail' >Cc</label>
                        <input type="text" style={{ width: "100%" }}></input>
                    </div>
                    <div class="p-2 d-flex flex-row justify-content-start">
                        <label className='label_mail' >Subject</label>
                        <input type="text" style={{ width: "100%" }}></input>
                    </div>
                    <div class="p-2 d-flex flex-row justify-content-start">
                        <input ref={inputRef} type="file" className='button_mail' name="file" onChange={changeHandler} />
                        <button  onClick={resetFileInput} style={{backgroundColor:'#5a287d', border:'none', height:'30px',marginTop:'4px'}} >
                            <X color="white"  size={30} />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" style={{ marginTop: '2%', marginLeft: '0.2%', marginRight: '0.2%', width: '99.5%' }}></textarea>
            </div>
        </div>
    )
}

export default Compose