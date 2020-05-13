import React from 'react';
import './EachCurrency.css';
const EachCurrency = (currency) => {
    console.log('each currecny', Object.keys(currency.rates));
    return (
        <section>
            <div className="columns">
                {Object.keys(currency.rates).map((value) => {
                    console.log(value);
                    return <h3 key={value}>{value}</h3>;
                })}
            </div>
            <div>
                {' '}
                {Object.values(currency.rates).map((value) => {
                    console.log(value);
                    return <h3 key={value}>{value}</h3>;
                })}
            </div>
        </section>
    );
};
export default EachCurrency;
