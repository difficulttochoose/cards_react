import React, { useState, useEffect } from 'react';
import Header from "../Header";
import CurrencyList from "../CurrencyList";

const restCountriesUrl = 'http://restcountries.eu/rest/v2/all';
const exchangeUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const App = () => {

    const [countries, setCountries] = useState([]);
    const [exchange, setExchange] = useState([]);

    useEffect(() => {
        console.error('useEffect');
        fetch(restCountriesUrl)
            .then(res => res.json())
            .then(res => {
                setCountries(res);
                console.log('restCountriesUrl', countries, exchange);
                fetch(exchangeUrl)
                    .then(res => res.json())
                    .then(res => {
                        setExchange(res);
                        console.log('exchangeUrl', countries, exchange);
                    })
            });
    }, []);
    return (
        <div>
            <Header header={'Currency Inspector'} />
            <CurrencyList countries={countries} exchange={exchange} />
        </div>
    );
}

export default App;
