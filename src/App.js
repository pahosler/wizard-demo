import React, { Component } from 'react';
import Wizard from '@rahsheen/react-wizard';
import MakeTimer from 'maketimer';
import './App.css';
import Header from './Header.js'

const timer = new MakeTimer();
timer.start(1000, () => {
  console.log('HI');
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard>
          <Wizard.Step>
            {({ nextStep, prevStep }) => {
              return (
                <div>
                <Header />
                  <div>
                    <h2>This is Step 1</h2>
                    <button onClick={nextStep}>Next</button>
                  </div>
                </div>
              );
            }}
          </Wizard.Step>
          <Wizard.Step>
            {({ submit, prevStep }) => (
              <div>
              <Header />
                <h2>This is Step 2</h2>
                <button onClick={prevStep}>Back</button>
                <button onClick={onsubmit}>Finish</button>
              </div>
            )}
          </Wizard.Step>
        </Wizard>
      </div>
    );
  }
}

export default App;
