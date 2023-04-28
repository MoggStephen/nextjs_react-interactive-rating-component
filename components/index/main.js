//Components
import HowDidWeDo from './rating';
import ThankYou from './thankyou';
//Hooks
import { useState } from 'react'

//DEFAULT FUNCTION
export default function Main(){
    //To hold the selected rating
    const [selectedRating, setSelectedRating] = useState(null);
    //To change to the thankyou screen
    const [showThankYou, setShowThankYou] = useState(false);

    //Function passed down to rating component to get the rating!
    //useReducer can be used to update multiple state variables at once. Not used due to small project!
    const handleRatingSubmit = (rating) => {
        setSelectedRating(rating);
        setShowThankYou(true);
    };

    return(
        <> 
            {/* Couldnt get @import in globals.scss to import this and work in the vercel live deployment site. Doing it here fixed it! and made next.js happy*/}
            <link href="https://fonts.googleapis.com/css?family=Overpass:400,700&display=swap" rel="stylesheet"/>
            
            <main className="rating-component-container p-4 rounded-5">
                {/* Ternary conditional rendering statement. Use this more often! */}
                {showThankYou ? <ThankYou rating={selectedRating}/> : <HowDidWeDo onSubmit={handleRatingSubmit} />}
            </main>   
        </>
    );
}