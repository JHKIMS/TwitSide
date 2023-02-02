import React from 'react';
import 'antd/dist/antd.css'
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const Twit = ({Component}) =>{
    return (
        <>
        <Head>
            <title>TwitHoon</title>
        </Head>
            <Component/>
        </>
        
    )
}

Twit.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(Twit);