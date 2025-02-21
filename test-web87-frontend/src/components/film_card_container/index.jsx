import React from 'react'
import "./style.css"

function Film_card_container({children}) {
  return (
    <div className="cards_contianer">
        {children}
    </div>
  )
}

export default Film_card_container