import { useState } from "react";
import { dataImage } from "./DataImage";

function About() {
    const [storeImage, setStoreImage] = useState(0);
    const {id, image} = dataImage[storeImage];

    const previousImage = () => {
        setStoreImage( (storeImage => {
            storeImage--;
            if (storeImage < 0) {
                return dataImage.length-1;
            }
            return storeImage;
        }))
    }

    const nextImage = () => {
        setStoreImage( (storeImage => {
            storeImage++;
            if (storeImage > dataImage.length-1) {
                storeImage = 0;
            }
            return storeImage;
        }))
    }

    return(
        <div>
            <div className="about">
                <h2>About Us</h2>
                <p>At our Coffee Store, we are focused on bringing our clients the tastiest, 
                    most elevated quality The Coffee Lab. We perceive that the shopper has numerous options with 
                    regard to the coffee they drink. We, along these lines, guarantee our coffee’s 
                    quality is fantastic. We have gone for satisfying the most segregating purchaser; 
                    the most modern palates. Also, this responsibility has served us well.
                </p>
                <p>Our main goal since we began has remained basic: acquaint our clients with the domains 
                    we specifically purchase our extraordinary-tasting coffee from, broil the beans 
                    with consideration, and make astounding coffee increasingly available through 
                    The Coffee Lab store. The coffee we cook is the coffee we like to drink, 
                    and we trust you like it as well.
                </p>
            </div>
            <div key={id} className='slider'>
                <button onClick={previousImage} className="btnArrow"> <span>&#11164;</span> </button>
                <img src={image} alt='store_image'/>
                <button onClick={nextImage} className="btnArrow"> <span>&#11166;</span> </button>
            </div>
        </div>
    )
}

export default About;