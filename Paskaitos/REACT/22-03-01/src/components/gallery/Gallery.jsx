import Card from "../card/Card";
import CardData from "../data/CardData";

const Gallery = ()=>{
    return(
        <div class="container-fluid">
            <div class="px-lg-5">
                <div class="row">
                {/* {CardData.map((card)=>
                    <Card
                        key = {card.id}
                        content = {card.joke}
                    />
                )} */}

                {CardData.map((card)=>{
                    if(card.type == 'twopart')
                    return <Card
                        key = {card.id}
                        title = {card.category}
                        content = {card.setup + ' ' + card.delivery}
                            />
                    return <Card
                        key = {card.id}
                        title = {card.category}
                        content = {card.joke}
                    />
                })}  
                </div>
            </div>
        </div>
    )
}

export default Gallery;