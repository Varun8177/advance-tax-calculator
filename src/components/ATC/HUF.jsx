import React from "react";
import HUF_CARD from "./cards/HUF_card";
import { useState } from "react";
import { useEffect } from "react";
import CalculateHUF from "./calculations/CalculateHUFF";

const HUF = ({ tag }) => {
  const [assessedTax, setAssessedTax] = useState({
    netTaxableIncome: 0,
    incomeTax: 0,
    surcharge: 0,
    educationCess: 0,
    secondaryEducationCess: 0,
    totalTaxLiability: 0,
    relief: 0,
    tdsTcsMatCreditUtilized: 0,
    assessed_Tax: 0,
  });

  const HUF_Fields = [
    {
      title: "Whether opting for taxation under Section 115BAC?",
    },
    {
      title: "Net Taxable Income",
      name: "netTaxableIncome",
      value: assessedTax.netTaxableIncome,
    },
    {
      title: "Income Tax",
      name: "incomeTax",
      value: assessedTax.incomeTax,
    },
    {
      title: "Surcharge",
      name: "surcharge",
      value: assessedTax.surcharge,
    },
    {
      title: "Health and Education Cess",
      name: "secondaryEducationCess",
      value: assessedTax.secondaryEducationCess,
    },
    {
      title: "Total Tax Liability",
      name: "totalTaxLiability",
      value: assessedTax.totalTaxLiability,
    },
    {
      title: "Relief",
      name: "relief",
      value: assessedTax.relief,
    },
    {
      title: "TDS/TCS/MAT (AMT) Credit Utilized",
      name: "tdsTcsMatCreditUtilized",
      value: assessedTax.tdsTcsMatCreditUtilized,
    },
    {
      title: "Assessed Tax",
      name: "assessed_Tax",
      value: assessedTax.assessed_Tax,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "tdsTcsMatCreditUtilized") {
      const data = CalculateHUF(+assessedTax.netTaxableIncome);
      setAssessedTax((prevDetails) => ({
        ...prevDetails,
        [name]: value,
        assessed_Tax:
          data.totalTaxLiability - Number(value) - assessedTax.relief,
      }));
    } else if (name === "relief") {
      const data = CalculateHUF(+assessedTax.netTaxableIncome);
      setAssessedTax((prevDetails) => ({
        ...prevDetails,
        [name]: value,
        assessed_Tax:
          data.totalTaxLiability -
          Number(value) -
          assessedTax.tdsTcsMatCreditUtilized,
      }));
    } else {
      setAssessedTax((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const HandleUpdate = (netTaxableIncome) => {
    //   calculate
    const data = CalculateHUF(+netTaxableIncome);

    //   update state
    setAssessedTax((prevDetails) => ({
      ...prevDetails,
      educationCess: data.educationCess,
      secondaryEducationCess: data.secondaryEducationCess,
      surcharge: data.surcharge,
      totalTaxLiability: data.totalTaxLiability,
      incomeTax: data.incomeTax,
      assessed_Tax:
        data.totalTaxLiability -
        (assessedTax.relief + assessedTax.tdsTcsMatCreditUtilized),
    }));
  };

  useEffect(() => {
    HandleUpdate(assessedTax.netTaxableIncome);
  }, [assessedTax.netTaxableIncome]);
  return (
    <>
      {HUF_Fields.map((item, i) => {
        return i === 0 && tag ? (
          <HUF_CARD
            key={i}
            i={i}
            item={item}
            handleChange={handleChange}
            tag={tag}
          />
        ) : i > 0 ? (
          <HUF_CARD
            key={i}
            i={i}
            item={item}
            handleChange={handleChange}
            tag={tag}
          />
        ) : null;
      })}
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
          onClick={() =>
            setAssessedTax({
              netTaxableIncome: 0,
              incomeTax: 0,
              surcharge: 0,
              educationCess: 0,
              secondaryEducationCess: 0,
              totalTaxLiability: 0,
              relief: 0,
              tdsTcsMatCreditUtilized: 0,
              assessed_Tax: 0,
            })
          }
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
          onClick={() => {
            HandleUpdate(assessedTax.netTaxableIncome);
          }}
        >
          calculate
        </button>
      </div>
    </>
  );
};

export default HUF;
