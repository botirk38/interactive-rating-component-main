import React, { useState } from 'react';
import './styles.css';
import star from './icon-star.svg';
import thankYou from './illustration-thank-you.svg';




export default function RatingForm(){
    const [ rating, setRating ] = useState(0);
    const [ submitted, setSubmitted ] = useState(false);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    const handleRatingChange = (event ) => {
        setRating(event.target.value);
    }

    if(submitted){
        return (
            <div className="App">
                <div className="thank-you-container">
                    <img src={thankYou} alt="thank you" />
                    <div className="rating-received-container">
                    <span className="rating-received"> You selected {rating} out of 5 </span>
                    </div>
                    <h1>Thank you!</h1>
                    <p>
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don't hesitate to get in touch!
                    </p>
                </div>
            </div>
        );
    }
    

    return (
        <div className="App">
            <div className="img-container">
                <img src= {star} alt="star" />
            </div>
            <h1>How did we do?</h1>
            <p>
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
            </p>
            <form onSubmit={handleSubmitForm}>
            <div className="ratings-container">
                <input type="radio" id="rating-1" name="ratings" value="1" onChange={handleRatingChange} required />
                <label htmlFor="rating-1">1</label>
                <input type="radio" id="rating-2" name="ratings" value="2" onChange={handleRatingChange} required/>
                <label htmlFor="rating-2">2</label>
                <input type="radio" id="rating-3" name="ratings" value="3" onChange={handleRatingChange} required />
                <label htmlFor="rating-3">3</label>
                <input type="radio" id="rating-4" name="ratings" value="4" onChange={handleRatingChange} required />
                <label htmlFor="rating-4">4</label>
                <input type="radio" id="rating-5" name="ratings" value="5" onChange={handleRatingChange} required />
                <label htmlFor="rating-5">5</label>
            </div>

                    <button type="submit">Submit</button>
                    </form>

            </div>
    );
}