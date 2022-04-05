import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTuC9y81rYv1-gGvhH3mC1tEmaE2TslfA3w&usqp=CAU"/>
                        </div>
                   
                    <div className="details">
                        <h2>RRR<span className="job-title">Watch now</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNGOf1SIuISevgM4nmxDnrHqgrS0s8Y04_g&usqp=CAU" />
                    </div>
               
                    <div className="details">
                        <h2>James<span className="job-title">Watch now</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTiTa_uNiN1_F4utOAKLktA4KaiL9lBEWTA&usqp=CAU" />
                    </div>
                   
                    <div className="details">
                        <h2>Spider Man<span className="job-title">Watch Now</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9TpPXHemcAkkpElc1nIgDScXKRBf_D6fvg&usqp=CAU" />
                    </div>
                
                    <div className="details">
                        <h2>Jalsa<span className="job-title">Watch now</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider