
import React, {useState} from 'react'




const Tour = ({tour, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    
    const removeTou = (id) => {
       
    removeTour(id);
    
    };
    
  
    const {id, name, price, image, text} = tour;
    return (
        <article className="tour-card">
        <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
        </div>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
            <p>
            {readMore ? text : `${text.substring(0,20)}...`}
            <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
            </p>
            <button className="tour-delete-btn" onClick={() => removeTou(id)}>not interested</button>
        </div>
        </article>
    )
    }

    export default Tour