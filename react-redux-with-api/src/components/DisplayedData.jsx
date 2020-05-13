import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../store/actions';

const DisplayedData = (props) => {
    console.log(props);
    useEffect(() => {
        props.fetchData();
    }, [fetchData]);
    return (
        <section>
            <h3>This is the displayed data section</h3>
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
