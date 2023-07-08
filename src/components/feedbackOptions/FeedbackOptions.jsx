import React from 'react';
import { Statistics } from 'components/statistics/Statistics';
import './Feddback.module.css';
import { useState } from "react";

const FeedbackOptions = () => {
    
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    //   };
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    //  incrementGood = () => {
    //     this.setState({ good: this.state.good + 1 });
    //   };
    //   incrementBad = () => {
    //     this.setState({ bad: this.state.bad + 1 });
    //   };
    //    incrementNeutral = () => {
    //     this.setState({ neutral: this.state.neutral + 1 });
    //   };
      
    // render() {
        
      return (
        <>
        <section>
          <button onClick={() => setGood(good + 1)}>Good</button>
          <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
          <button onClick={() => setBad(bad + 1)}>Bad</button>
        </section>
          
          <Statistics 
               state={{good, neutral,bad}} 
               total={good+neutral+bad}
               posFid={(good/(good + bad+ neutral))*100}
          ></Statistics>
          
        </>
      );
    }
  // }


export default FeedbackOptions;
