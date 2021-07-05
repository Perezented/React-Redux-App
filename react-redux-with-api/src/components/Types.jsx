import React from 'react';
import { fetchDifferentData } from '../store/actions';
import { connect } from 'react-redux';
const Types = (currency, props) => {
    console.log('each currecny', currency);
    return (
        <section>
            {currency.type.map((value) => {
                console.log(value);
                return (
                    <h4
                        onClick={() => {
                            currency.fetchDifferentData(value);
                        }}
                    >
                        {value}
                    </h4>
                );
            })}
        </section>
    );
};
export default connect(null, { fetchDifferentData })(Types);
