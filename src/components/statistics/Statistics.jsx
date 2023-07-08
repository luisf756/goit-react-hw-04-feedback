// import style from './Satistics.module.css';
import PropTypes from 'prop-types'
import React from 'react';

export const Statistics = ({ state, total, posFid}) => { //   
    
    if(total>=1){
        return (
            <>
              <h2>Statistics</h2>
              <p>good: {state.good}</p>
              <p>Neutral: {state.neutral}</p>
              <p>Bad: {state.bad}</p>
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
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  posFid:  PropTypes.number.isRequired
  }