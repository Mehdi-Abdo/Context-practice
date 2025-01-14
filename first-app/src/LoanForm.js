import "./FormStyles.css";
import { useState } from "react";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./contexts/LoanFormInputContext";

export default function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });


  function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }
  return (
    <div>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <LoanInputContext.Provider
          value={{
            value: loanInputs.name,
            handleChange: handleNameInputChange,
            labelTitle: "name",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <LoanInputContext.Provider
          value={{
            value: loanInputs.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "Phone Number",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <LoanInputContext.Provider
          value={{
            value: loanInputs.age,
            handleChange: handleAgeInputChange,
            labelTitle: "Age:",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>

        <button        
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>
    </div>
);
}
