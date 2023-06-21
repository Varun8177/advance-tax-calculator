import React, { useState } from "react";
import styles from "../components/HRA/FieldCards.module.css";
import HUF from "../components/ATC/HUF";
import Individual from "../components/ATC/Individual";

const ATC = () => {
  const [opt, setOpt] = useState("");

  return (
    <>
      <div style={{ width: "90%", margin: "auto" }}>
        <div
          style={{
            backgroundColor: "#3b9ac6",
            width: "fit-content",
            display: "flex",
            gap: "10px",
            padding: 5,
            color: "white",
            border: "1px solid #ececec",
          }}
        >
          <img src="./calIcon.png" alt="" width={"50"} />
          <p>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</p>
        </div>
        <div className={0 % 2 === 0 ? styles.container1 : styles.container2}>
          <label htmlFor="" style={{ minWidth: "fit-content" }}>
            Tax Payer
          </label>
          <select
            style={{
              padding: "10px",
              minWidth: "325px",
            }}
            onChange={(e) => setOpt(e.target.value)}
          >
            <option value="">select</option>
            <option value="1">Individual</option>
            <option value="2">HUF</option>
            <option value="3">AOPs/BOI</option>
            <option value="4">Domestic Company</option>
            <option value="5">Foreign Company</option>
            <option value="6">Firms</option>
            <option value="7">LLP</option>
            <option value="8">Co-operative Society</option>
          </select>
        </div>
        {opt === "1" ? (
          <Individual />
        ) : (opt > "1" && opt < "4") || opt === "" ? (
          <HUF tag={true} />
        ) : (
          <HUF />
        )}
      </div>
    </>
  );
};

export default ATC;
