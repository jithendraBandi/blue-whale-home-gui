import React from 'react'
import { cabinets } from '../../utils/StaticData'
import "./categoryItems.css"

const Cabinets = () => {
  return (
    <section>
        <article className="category-item-card">
            {cabinets?.map((cabinet, index) => (
                <div key={index} className="flex-row">
                    <img src={cabinet?.src} alt={cabinet?.model} className="category-item-image" />
                    <div>
                        <h1>{cabinet?.model}</h1>
                        <p>{cabinet?.description}</p>
                        <p><b>Rs.{cabinet?.price}/-</b></p>
                    </div>
                </div>
            ))}
        </article>
    </section>
  )
}

export default Cabinets