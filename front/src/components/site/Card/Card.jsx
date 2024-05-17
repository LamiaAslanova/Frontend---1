import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        <div className="col-6">
            <Link to={`/details/${card._id}`}>
                <div class="card w-75">
                    <div class="card-body">
                        <div className="card__main">
                            <img width="70px" height="70px" src={card.image} alt="" />
                            <div className="card__main__text">
                                <h5 class="card-title">{card.title}</h5>
                                <p class="card-text">{card.ingredients}</p>
                            </div>
                        </div>
                        <p>${card.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
