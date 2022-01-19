
//bootstrap imports
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from "react";
import "./App.css";

//components
import Offers from "./components/Offers"

function App(): JSX.Element {
    const [offers, setOffers] = useState([]);
    const [err, setErr] = useState<null | Error>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch('http://cdn.sixt.io/codingtask/offers.json');
                const resData = await response.json();
                setOffers(resData.offers)
                setIsLoading(false)
            }
            catch(e){
                if(!(e instanceof Error)) {
                    return
                }
                setErr(e)
            }
            
        };
        fetchData();
      }, []);

    return (
        <div className="App">
            <Container>
                {err ? err.message : <Offers isLoading={isLoading} offers={offers}/>}
            </Container>
            
        </div>
    );
}

export default App;
