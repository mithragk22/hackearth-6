import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import Row from 'react-bootstrap/Row';


const PPT = () => {
  return (
    <Row className="justify-content-md-center" style={{ marginTop: "20px" }}>
    <Carousel slide={false} style={{backgroundColor:"#5a287d",color:"white",height:"80vh"}}>
      <CarouselItem>
        <div style={{marginTop:"20px"}}> test1</div>
        <div style={{marginTop:"20%"}}>item</div>
      </CarouselItem>
      <CarouselItem>
      <div style={{marginTop:"20px"}}> test2</div>
        <div style={{marginTop:"20%"}}>item</div>
      </CarouselItem>
      <CarouselItem>
        <div style={{marginTop:"20px"}}> test3</div>
        <div style={{marginTop:"20%"}}>item</div>
      </CarouselItem>
      <CarouselItem>
      <div style={{marginTop:"20px"}}> test4</div>
        <div style={{marginTop:"20%"}}>item</div>
      </CarouselItem>
    </Carousel>
    </Row>
  )
}

export default PPT