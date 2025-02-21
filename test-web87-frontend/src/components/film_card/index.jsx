import React from 'react'
import "./style.css"

function Film_card({img_url, title="", country, director, rating, episode}) {
  return (
    <div className="filmcard">
        <div className="left">
            <img src={img_url != null ? img_url : ""} alt="Film IMG" />
        </div>
        <div className="right">
            <div className="detailGrid">
                <div className="top">
                    <h3>{title != "" ? title : "No title loaded"}</h3>
                </div>
                <div className="left">
                    <p>Country: {country != null ? country :"Error"}</p>
                    <p>Rating: {rating != null ? rating : "Error"}</p>
                </div>
                <div className="right">
                    <p>Director: {director != null ? director : "Error"}</p>
                    <p>Episodes: {episode != null ?  episode : "Error"}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Film_card