import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import MediaQuery from 'react-responsive'
import { Carousel } from 'react-responsive-carousel'

const BlogCarousel = () => (
    <div>
        <MediaQuery maxWidth={767}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showArrows={false}
                showThumbs={false}
                width="45%"
            >
                <div className="card">
                    <img src="imgs/download.jpeg" />
                    <div className="card__text-area">
                    <div className="card__category">
                        <p>Category</p>
                    </div>
                    <h2>Description/Title</h2>
                </div>
                </div>
                <div className="card">
                    <img src="imgs/download2.jpeg" />
                    <div className="card__text-area">
                    <div className="card__category">
                        <p>Category</p>
                    </div>
                    <h2>Description/Title</h2>
                </div>
                </div>
                <div className="card">
                    <img src="imgs/download3.jpeg" />
                    <div className="card__text-area">
                    <div className="card__category">
                        <p>Category</p>
                    </div>
                    <h2>Description/Title</h2>
                </div>
                </div>
            </Carousel>
        </MediaQuery>
        <MediaQuery minWidth={768}>
            <div className="card__container">
                <div className="card">
                    <img src="imgs/download.jpeg" />
                    <div className="card__text-area">
                        <div className="card__category">
                            <p>Category</p>
                        </div>
                        <h2>Description/Title</h2>
                    </div>
                </div>
                <div className="card">
                    <img src="imgs/download2.jpeg" />
                    <div className="card__text-area">
                        <div className="card__category">
                            <p>Category</p>
                        </div>
                        <h2>Description/Title</h2>
                    </div>
                </div>
                <div className="card">
                    <img src="imgs/download3.jpeg" />
                    <div className="card__text-area">
                        <div className="card__category">
                            <p>Category</p>
                        </div>
                        <h2>Description/Title</h2>
                    </div>
                </div>
            </div>
        </MediaQuery>
    </div>
)

export default BlogCarousel