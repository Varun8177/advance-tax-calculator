import React, { useEffect } from "react";
import styles from "../HRA/FieldCards.module.css";
import { useState } from "react";
import CalculateHUF from "./calculations/CalculateHUFF";

const Individual = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [income, setIncome] = useState(0);
  const [Values, setValues] = useState({
    incomeTax: 0,
    surcharge: 0,
    educationCess: 0,
    secondaryEducationCess: 0,
    totalTaxLiability: 0,
  });
  useEffect(() => {
    const data = CalculateHUF(income);
    console.log(data);
    setValues(data);
  }, [income]);
  return (
    <div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Whether opting for taxation under Section 115BAC?
        </label>
        <select
          style={{
            padding: "10px",
            minWidth: "325px",
          }}
        >
          <option value="">Select</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Male / Female / Senior Citizen
        </label>
        <select
          style={{
            padding: "10px",
            minWidth: "325px",
          }}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="senior-citizen">Senior Citizen</option>
          <option value="super-senior-citizen">Super Senior Citizen</option>
        </select>
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Residential Status
        </label>
        <select
          style={{
            padding: "10px",
            minWidth: "325px",
          }}
        >
          <option value="">Select</option>
          <option value="resident">Resident</option>
          <option value="non-resident">Non Resident</option>
          <option value="resident">Not Ordinary Resident</option>
        </select>
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Income from Salary
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Income From House Property
        </label>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              height: "fit-content",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setShow1(!show1)}
          >
            show details
          </button>
          <input
            type={"number"}
            style={{
              padding: "10px",
              minWidth: "300px",
              fontWeight: "bolder",
            }}
            disabled
          />
        </div>
      </div>
      <div
        className={styles.container3}
        style={{ display: show1 ? "block" : "none" }}
      >
        <p style={{ minWidth: "100%", marginBottom: "20px" }}>
          a. Income from Self-occupied Property
        </p>
        <p style={{ minWidth: "100%" }}>
          Interest Paid/Payable on Housing Loan
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "20px",
            height: "40px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>1. Interest on Housing Loan</p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            Income from self-occupied house property
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
            disabled
          />
        </div>
        <p style={{ minWidth: "100%", marginTop: "50px" }}>
          b. Income from Let-out Property
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
            marginBottom: "20px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            1. Annual Letable Value/Rent Received or Receivable
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
            marginBottom: "20px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            2. Less: Municipal Taxes Paid During the Year
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
            marginBottom: "20px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>3. Less:Unrealized Rent</p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            4. Net Annual Value (1-(2+3))
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
            disabled
          />
        </div>
        <p style={{ minWidth: "100%", marginTop: "50px" }}>
          Less: Deductions from Net Annual Value
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
            marginBottom: "20px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            i. Standard Deduction @ 30% of Net Annual Value
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
            disabled
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
            marginBottom: "20px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            ii. Interest on Housing Loan
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "40px",
            marginBottom: "20px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            Income from Let-out House Property
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
            disabled
          />
        </div>
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Income From Other Sources
        </label>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              height: "fit-content",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setShow2(!show2)}
          >
            show details
          </button>
          <input
            type={"number"}
            style={{
              padding: "10px",
              minWidth: "300px",
              fontWeight: "bolder",
            }}
            disabled
          />
        </div>
      </div>
      <div
        className={styles.container3}
        style={{ display: show2 ? "block" : "none" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "20px",
            height: "40px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>Interest</p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "20px",
            height: "40px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>Commission/Other Income</p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "20px",
            height: "40px",
          }}
        >
          <p style={{ minWidth: "fit-content" }}>
            Winnings from Lottery, Crossword Puzzles, etc.
          </p>
          <input
            type={"number"}
            style={{
              minWidth: "200px",
              fontWeight: "bolder",
              border: 0,
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Profits and Gains of Business or Profession (enter profit only)
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
        />
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Agricultural Income
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
        />
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Net Taxable Income
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container5}>
        <label htmlFor="" style={{ maxWidth: "250px" }}>
          Income Liable to Tax at Normal Rate ---
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            maxWidth: "100px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "150px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
      </div>
      <div className={styles.container4}>
        <label htmlFor="" style={{ maxWidth: "250px" }}>
          Short Term Capital Gains (Covered u/s 111A) 15%
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            maxWidth: "100px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "150px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
      </div>
      <div className={styles.container5}>
        <label htmlFor="" style={{ maxWidth: "250px" }}>
          Long Term Capital Gains (Covered u/s 112A) 10%
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            maxWidth: "100px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "150px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
      </div>
      <div className={styles.container4}>
        <label htmlFor="" style={{ maxWidth: "250px" }}>
          Long Term Capital Gains (Charged to tax @ 20%) 20%
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            maxWidth: "100px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "150px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
      </div>
      <div className={styles.container5}>
        <label htmlFor="" style={{ maxWidth: "250px" }}>
          Long Term Capital Gains (Charged to tax @ 10%) 10%
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            maxWidth: "100px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "150px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
      </div>
      <div className={styles.container4}>
        <label htmlFor="" style={{ maxWidth: "250px" }}>
          Winnings from Lottery, Crossword Puzzles, etc) 30%
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            maxWidth: "100px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "150px",
            fontWeight: "bolder",
            cursor: "not-allowed",
          }}
          disabled
        />
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Income Tax after relief u/s 87A
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Surcharge
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Health and Education Cess
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Total Tax Liability
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Relief other than relief u/s 87A
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container1}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          TDS/TCS/MAT (AMT) Credit Utilized
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div className={styles.container2}>
        <label htmlFor="" style={{ minWidth: "fit-content" }}>
          Assessed Tax
        </label>
        <input
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            fontWeight: "bolder",
          }}
          disabled
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "fit-content",
          gap: "20px",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "#a0a1a1",
            padding: "15px 25px 15px 25px",
            border: 0,
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          reset
        </button>
        <button
          style={{
            backgroundColor: "#fe6c5f",
            padding: "15px 25px 15px 25px",
            border: 0,
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          calculate
        </button>
      </div>
    </div>
  );
};

export default Individual;
