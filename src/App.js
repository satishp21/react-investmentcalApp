import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';

function App() {

  const [yearlyData, setYearlyData] = useState([]);
  const calculateHandler = (event) => {
    event.preventDefault();

    const userInput = {
      currentsavings: currentsavings,
      yearlycontribution: yearlysavings,
      expectedreturn: expectedinterest,
      duration: investmentduration,
    };
    console.log(userInput);

    const calculatedYearlyData = [];

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput["currentsavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlycontribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedreturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      calculatedYearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData);
    setYearlyData(calculatedYearlyData)
    setISResult(true);
    // do something with yearlyData ...
  };

  const [currentsavings, setCurrentSavings] = useState("");
  const [yearlysavings, setYearlySavings] = useState("");
  const [expectedinterest, setExpectedInterest] = useState("");
  const [investmentduration, setInvestmentDuration] = useState("");

  const [isresult, setISResult] = useState(false);

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
    console.log(currentsavings);
  };

  const yearlySavingHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const interestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };

  const durationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const resetHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  if (!isresult) {
    return (
      <div>
        <header className="header">
          <img src={logo} alt="logo" />
          <h1>Investment Calculator</h1>
        </header>

        <form className="form">
          <div className="input-group">
            <p>
              <label htmlFor="current-savings">Current Savings ($)</label>
              <input
                type="number"
                id="current-savings"
                onChange={currentSavingsHandler}
              />
            </p>
            <p>
              <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
              <input
                type="number"
                id="yearly-contribution"
                onChange={yearlySavingHandler}
              />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label htmlFor="expected-return">
                Expected Interest (%, per year)
              </label>
              <input
                type="number"
                id="expected-return"
                onChange={interestHandler}
              />
            </p>
            <p>
              <label htmlFor="duration">Investment Duration (years)</label>
              <input type="number" id="duration" onChange={durationHandler} />
            </p>
          </div>
          <p className="actions">
            <button type="reset" className="buttonAlt" onClick={resetHandler}>
              Reset
            </button>
            <button type="submit" className="button" onClick={calculateHandler}>
              Calculate
            </button>
          </p>
          <h2>Your table will be shown below</h2>
        </form>
      </div>
    );
  }

  if (isresult) {
    return (
      // {/* Todo: Show below table conditionally (only once result data is available) */}
      // {/* Show fallback text if no data is available */}
      <div>
        <header className="header">
          <img src={logo} alt="logo" />
          <h1>Investment Calculator</h1>
        </header>

        <form className="form">
          <div className="input-group">
            <p>
              <label htmlFor="current-savings">Current Savings ($)</label>
              <input
                type="number"
                id="current-savings"
                onChange={currentSavingsHandler}
              />
            </p>
            <p>
              <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
              <input
                type="number"
                id="yearly-contribution"
                onChange={yearlySavingHandler}
              />
            </p>
          </div>
          <div className="input-group">
            <p>
              <label htmlFor="expected-return">
                Expected Interest (%, per year)
              </label>
              <input
                type="number"
                id="expected-return"
                onChange={interestHandler}
              />
            </p>
            <p>
              <label htmlFor="duration">Investment Duration (years)</label>
              <input type="number" id="duration" onChange={durationHandler} />
            </p>
          </div>
          <p className="actions">
            <button type="reset" className="buttonAlt" onClick={resetHandler}>
              Reset
            </button>
            <button type="submit" className="button" onClick={calculateHandler}>
              Calculate
            </button>
          </p>
          <h2>Your table will be shown below</h2>
        </form>
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {yearlyData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{'nothing'}</td>
                <td>{'nothing'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
