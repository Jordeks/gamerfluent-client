import React, { Component } from 'react'
import NewsCard from '../components/NewsCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class NewsContainer extends Component {
    render() {
        return (
            <>
                <h1>I HOLD ALL THE NEWS</h1>
                <Carousel>
                    <div>
                    <img src="../imgs/header.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="../imgs/keyboard.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="../imgs/newsfeed.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </>
        )
    }
}
