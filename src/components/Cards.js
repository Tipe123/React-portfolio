import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out This Epic Websites We Are Offering</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem src="pictures/beautiful.jpg"
                        text="Explore the beauty of our galaxy Explore the beauty of our galaxy Explore the beauty of our galaxy"
                        label="Planets"
                        path="services"
                        />

                        <Carditem src="pictures/OIP.jpg"
                        text="Explore the beauty of our galaxy"
                        label="Planets"
                        path="services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <Carditem src="pictures/black.jpg"
                        text="Explore the beauty of our galaxy"
                        label="Planets"
                        path="services"
                        />

                        <Carditem src="pictures/code-screen-programming-writing-script-programmer-editing-background-developer-software-source-171572442.jpg"
                        text="Explore the beauty of our galaxy"
                        label="Planets"
                        path="services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
