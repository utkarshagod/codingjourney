import React from 'react';

import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


const upcomingEvent = () => {
    return(
        <div className="container">
            <div className="py-4">
                
                 <>
      <h1 style={{ textAlign: "center" ,color:"#407294",marginTop:"1%" ,marginBottom:"10%"}}>upcoming Events</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>Hadpsar(Near sindicate Bank) </Item>
          <Item>Indraprasth</Item>
          <Item>Magarpatta</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </>
                
                
                



                

                </div>
                
                    
               
            </div>
    
    );
};

export default upcomingEvent ;
 