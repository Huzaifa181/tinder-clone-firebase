import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import {db} from './firebase'
const TinderCards = () => {
    const [people, setPeople]=useState([])
        useEffect(() => {
            let unsubscribe;
                unsubscribe=db.collection("people")
                .onSnapshot(snapshot=>{
                    setPeople(snapshot.docs.map(doc=>{
                        return(doc.data())
                    }))
                })

            return ()=>{
                unsubscribe()
            }
        }, []);
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
