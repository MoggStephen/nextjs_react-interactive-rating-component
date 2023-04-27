import Image from "next/image";

export default function HowDidWeDo({ onSubmit }){
    //Used to easily render each rating button
    const ratings = [1,2,3,4,5]

    //Decided on using a variable instead of using state as we dont need to rerender the component!
    let selectedRating = null;

    //Used on rating button click. Simply assigns a value to it.
    const handleRatingSelect = (rating) => {
        selectedRating = rating;
    };
    
    //Used on submit button click. Ternary operator to tell if a user has clicked on a rating button.
    //If they have clicked a rating then we trigger the function passed down via props!
    const handleSubmit = () => {
        {selectedRating ? onSubmit(selectedRating) : {/* Do nothing */}};
    };

    return(
        <>   
            <section className="rating-container">
                <Image className="img-star rounded-circle p-3" src="/images/icon-star.svg" width={50} height={50}  alt="Star icon"/>
                <h1 className="my-3 my-sm-4">How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="ratings-container d-flex justify-content-between my-3 my-sm-4">
                    {ratings.map(rating => (
                        <button key={rating} className="rating rounded-circle border-0" onClick={() => handleRatingSelect(rating)}>{rating}</button>
                    ))}
                </div>
                <button className="submit-btn w-100 border-0 text-uppercase rounded-5 py-2 mt-2 mt-sm-3" onClick={handleSubmit}>Submit</button>
            </section>
        </>
    );
}