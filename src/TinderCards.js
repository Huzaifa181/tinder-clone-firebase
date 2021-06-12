import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
const TinderCards = () => {
    const [people, setPeople]=useState([
        {
            name:'steve jobs',
            url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name:'obama',
            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg'
        },
    ]
        
        )
    return (
        <div>
            <div className="tinerCards__cardsContainer">

            {people.map(p=>{
                return(
            <TinderCard
            className="swipe"
            key={p.name}
            >
                <div
                style={{backgroundImage:`url(${p.url})`}}
                className='card'
                preventSwipe={['up', 'down']}
                >
                    <h3>{p.name}</h3>
                </div>
            </TinderCard>

                )
            })}
            </div>
        </div>
    )
}

export default TinderCards
