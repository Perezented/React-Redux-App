import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../store/actions';
import EachCurrency from './EachCurrency';

const DisplayedData = (props) => {
    console.log(props);
    const someArr = {};
    useEffect(() => {
        props.fetchData();
    }, []);
    return (
        <section>
            <h3>This is the displayed data section</h3>
            {props.dataArray && (
                <div>
                    <h2>Based off of {props.dataArray.base}</h2>
                    <h3>for the date of {props.dataArray.date}</h3>
                    {console.log(props.dataArray.rates)}
                    <EachCurrency rates={props.dataArray.rates} />
                    {/* {someObj.push(props.dataArray.rates)} */}

                    {/* {props.dataArray.rates.map((currency) => {
                        return <EachCurrency currency={currency} />;
                    })} */}
                </div>
            )}
            {props.error && <h1>{props.error}</h1>}
        </section>
    );
};

const mapStateToProps = (state) => {
    console.log('DisplayedData mSTP: ', state);
    return {
        isFetching: state.dataFetchReducer.isFetching,
        error: state.dataFetchReducer.error,
        dataArray: state.dataFetchReducer.dataArray,
    };
};
export default connect(mapStateToProps, { fetchData })(DisplayedData);
