
function Card({card}) {
    let price
    if(card.tcgplayer.prices.normal){
        price = card.tcgplayer.prices.normal.market
    }else{
        price = card.tcgplayer.prices.holofoil.market
    }

    return(
        <div className="rounded bg-gray-200 dark:bg-gray-800 grid place-content-center  w-fit m-2 p-2" >
            <img src={card.images.small} alt='pokemon-card'></img>
            <h1 className="text-xl font-semibold mt-1" >{card.name}</h1>
            <p><span className="font-semibold">Types :</span> {card.types}</p>
            <p><span className="font-semibold">Rarity :</span> {card.rarity}</p>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold m-1" >${price}</h1>
                <a href={card.tcgplayer.url} target="_blank" rel="noreferrer" className="p-2 bg-yellow-400 rounded text-black font-black">Buy Now</a>
            </div>
        </div>
    )
}

export default Card;