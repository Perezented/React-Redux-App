import React from 'react';
const EachCurrency = (currency) => {
    console.log('each currecny', currency);
    return (
        <section>
            {currency.amount.map((value) => {
                console.log(value);
                return <h4>{value}</h4>;
            })}
        </section>
    );
};
export default EachCurrency;
