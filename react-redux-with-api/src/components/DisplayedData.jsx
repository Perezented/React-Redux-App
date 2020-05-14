import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../store/actions';
import EachCurrencyAmt from './EachCurrency';
import Types from './Types';

import { Columns, MainSection } from './Styled-Comp';

const DisplayedData = (props) => {
    console.log(props);
    const someArr = {};
    useEffect(() => {
        props.fetchData();
    }, []);
    return (
        <section>
            {props.dataArray && (
                <MainSection>
                    <h2>Currently based off of the {props.dataArray.base}</h2>
                    <h3>for the date of {props.dataArray.date}</h3>
                    {console.log(props.dataArray.rates)}
                    {console.log(
                        Object.keys(props.dataArray.rates).filter(
                            (currencyType, i) => {
                                if (currencyType === props.dataArray.base) {
                                    return currencyType, i;
                                }
                            }
                        )
                    )}
                    <Columns>
                        {' '}
                        <div>
                            {' '}
                            <Types type={Object.keys(props.dataArray.rates)} />
                        </div>
                        <div>
                            {' '}
                            <EachCurrencyAmt
                                amount={Object.values(props.dataArray.rates)}
                            />
                        </div>
                    </Columns>
                </MainSection>
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
