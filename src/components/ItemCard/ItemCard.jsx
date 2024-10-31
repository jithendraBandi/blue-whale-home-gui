
const ItemCard = ({item}) => {
  return (
    <div className="flex-row half-width">
      <img className="item-image" src={item?.image} alt={item?.title} />
      <div>
        <h3>{item?.title}</h3>
        <p>{item?.description}</p>
        <p>{item?.offerPrice ? <p><span className="line-through">{item?.price}</span> {item?.offerPrice}</p> : item?.price}</p>
      </div>
    </div>
  )
}

export default ItemCard