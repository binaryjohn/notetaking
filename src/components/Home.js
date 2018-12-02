import React from 'react';

const Home = (props) => (
    <div> 
        <h1>{props.summary}</h1>
        <div>{props.detail}</div>
        <div>{props.created}</div>
    </div>
)

export default Home;