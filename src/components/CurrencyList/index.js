import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

const CurrencyList = ({ countries, exchange }) => {
    const countName = [];
    const countFlag = [];
    const countCioc = [];
    const exchCc = [];
    const exchRate = [];
    for (let key in countries) {
        countName.push(countries[key].name);
        countFlag.push(countries[key].flag);
        countCioc.push(countries[key].currencies[0].code);
    }
    for (let key in exchange) {
        exchCc.push(exchange[key].cc);
        exchRate.push(exchange[key].rate);
    }
    let tableData=[];
    let obj=[];
    for (let i = 0; i < countries.length; i++) {
        for (let j = 0; j < exchange.length; j++) {
            if (countries[i].currencies[0].code === exchange[j].cc) {
                tableData.push(<tr>
                    <td><img src={countries[i].flag} width="100px"/></td>
                    <td>Country: {countries[i].name}<br/>
                    Currency code: {countries[i].currencies[0].code}<br/>
                    Rate: {exchange[j].rate}</td>
                </tr>)
            }
        }
    }
    console.log('obj', obj);
    return (
        <div>
            {tableData.map(el => <div className="card w-50 col-mb-6">
            <div className="card-body">
                <p className="card-text">{el}</p>
            </div>
        </div>)}
        </div>
    );
}

export default CurrencyList;