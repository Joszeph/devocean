import React from 'react'
import './places.css'

const Places = ({items}) => {
  return (
    <>
    {items.slice(0, 4).map((item) => (
        <div className="addressContainer" key={item.id}>
            <div className="addressTitle">
                <h4>{item.name}</h4>
            </div>
            <div className="addressAll">
                <p>{item.address.number} {item.address.street} {item.address.city}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default Places