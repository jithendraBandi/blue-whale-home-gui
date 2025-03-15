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
                    <div className="flex-column">
                        <span><b>{cabinet?.model}</b></span>
                        <span>{cabinet?.description}</span>
                        <span><b>Rs.{cabinet?.price}/-</b></span>
                        <a href="https://forms.gle/CcH4SqVYJcHNzt5A6" rel="noopener noreferrer" target="_blank">Get Quote</a>
                    </div>
                </div>
            ))}
        </article>
    </section>
  )
}

export default Cabinets