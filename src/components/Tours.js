import Tour from "./Tour"
import { tours } from "../data"
import React, {useState} from 'react'
const Tours =()=>{
  
  const [tourss, setTours] = useState(tours);
  
  
  const removeTour = (id) => {
   const newTours = tourss.filter(  tour =>  tour.id !== id);
   setTours(newTours);
   console.log(newTours);
   };
  
  return(
        <section className="section" id="tours">
        <div className="section-title">
          <h2>featured <span>tours</span></h2>
        </div>
  
        <div className="section-center featured-center">

        {tourss.map((tour)=>{
       
      
        return  (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
    
    
        )

      }
    )
    }
      

        </div>
      </section>
)
}
export default Tours