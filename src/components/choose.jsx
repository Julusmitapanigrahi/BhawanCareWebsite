import React from 'react';
import AnimatedComponent from "./animation";

const Choose = () => {
    return (

        <div className="chooseContainer">
            <div className="col-md-10 col-md-offset-1 section-title">
                <AnimatedComponent animationType="scaleUp" >
                    <h2 className='service'>Why Choose Us ?</h2>
                </AnimatedComponent>
            </div>

            <div 
            className="card__container"
            >
                <article 
                className="card__article"
                >
                    <img src="img/image2.jpg" alt="Vancouver Mountains" className="card__img" />

                    <div className="card__data">
                        <span className="card__description">Vancouver Mountains, Canada</span>
                        <h2 className="card__title">The Great Path</h2>
                        <a href="#" className="card__button">Read More</a>
                    </div>
                </article>

                <article className="card__article">
                    <img src="img/image.jpg" alt="Poon Hill" className="card__img" />

                    <div className="card__data">
                        <span className="card__description">Poon Hill, Nepal</span>
                        <h2 className="card__title">Starry Night</h2>
                        <a href="#" className="card__button">Read More</a>
                    </div>
                </article>

                <article className="card__article">
                    <img src="/img/image3.jpg" alt="Bojcin Forest" className="card__img" />

                    <div className="card__data">
                        <span className="card__description">Bojcin Forest, Serbia</span>
                        <h2 className="card__title">Path Of Peace</h2>
                        <a href="#" className="card__button">Read More</a>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Choose;