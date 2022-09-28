import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {

  return (
    <div className='cards'>
        <h1>Check out these workouts</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="test"
                    label='workout 1'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-2.jpg"
                    text="test"
                    label='workout 2'
                    path='/products'
                    />
                    <CardItem 
                    src="images/img-3.jpg"
                    text="TEST SIGNUP"
                    label='workout 2'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards