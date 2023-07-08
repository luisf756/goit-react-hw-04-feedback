// import style from './Satistics.module.css';
import PropTypes from 'prop-types'
import React from 'react';

export const Statistics = ({ state, total, posFid}) => { //   
    
    if(total>=1){
        return (
            <>
              <h2>Statistics</h2>
              <p>good: {state[0]}</p>
              <p>Neutral: {state[1]}</p>
              <p>Bad: {state[2]}</p>
              <p>Total: {total}</p>
              <p>Positive feedback: {Math.round(posFid)} %</p>
            </>
          );
    }
    return (
        <>
          <h2>Statistics</h2>
          <Notification message={'No feedback given'}></Notification>
        </>
    );
  };

  
  const Notification=({message})=>{
    return (<>
        <p>{message}</p>
        </>);
  };

  //validation with proptypes
  Statistics.propTypes = {
  state: PropTypes.shape({
    0: PropTypes.number.isRequired,
    2: PropTypes.number.isRequired,
    1: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  posFid:  PropTypes.number.isRequired
  }