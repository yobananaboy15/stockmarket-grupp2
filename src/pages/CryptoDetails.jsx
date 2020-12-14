import React, {useState, useEffect} from 'react'

export default function CryptoDetails(props) {
    const id = props.match.params.ticker
    const[cryptoItem, setCryptoItem] = useState(null)
    

    useEffect(()=> {
        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setCryptoItem(data))
    },[id])
    
    return (
        <div className="container">
            <div className="row">
        
         {! cryptoItem  ? (
            <p>Loading...</p>
         ) : (
        <>
             <div className="col-md-12">
             
             <h2>NAME: {cryptoItem.name}</h2>
             <h5>Current Trading At: {cryptoItem.price}</h5>
             </div>
             <div className="col-md-2">Change 1D: {cryptoItem.today}%</div>
             <div className="col-md-2">Source: {cryptoItem.source}</div>
             <div className="col-md-3">Link: {cryptoItem.link}</div>
             </>
         )}
        
        </div>
        </div>

        
    )
}
