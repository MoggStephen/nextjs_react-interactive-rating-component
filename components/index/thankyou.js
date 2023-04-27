import Image from "next/image";

export default function ThankYou({rating}){
    return(
        <>
            <section className="thankyou-container text-center">
                <Image className="my-3" src={"./images/illustration-thank-you.svg"} width={100} height={100} alt="Phone illustration"/>
                <div className="rating-text px-2 py-1 rounded-4 my-4">You selected <output className="rating">{rating}</output> out of 5</div>
                <h2 className="mb-3">Thank you!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </section>           
        </>
    );
}