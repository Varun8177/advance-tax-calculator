import React, { useState } from "react";
import FieldCard from "../components/HRA/FieldCards";
import CalculateHRA from "../components/HRA/CalculateHRA";

const HRA = () => {
  const [details, setDetails] = useState({
    basic_salary: 0,
    DA: 0,
    commission_percentage: 0,
    HRA_Received: 0,
    rent_Paid: 0,
    metro: false,
    exempted_HRA: 0,
    taxable_HRA: 0,
  });

  const Fields = [
    {
      text: "Basic salary",
      disabled: false,
      checkBox: false,
      value: details.basic_salary,
      name: "basic_salary",
    },
    {
      text: "DA forming part of salary",
      disabled: false,
      checkBox: false,
      value: details.DA,
      name: "DA",
    },
    {
      text: "Commission (as % of turnover achieved by the employee)",
      disabled: false,
      checkBox: false,
      value: details.commission_percentage,
      name: "commission_percentage",
    },
    {
      text: "HRA Received",
      disabled: false,
      checkBox: false,
      value: details.HRA_Received,
      name: "HRA_Received",
    },
    {
      text: "Rent Paid",
      disabled: false,
      checkBox: false,
      value: details.rent_Paid,
      name: "rent_Paid",
    },
    {
      text: "Tick if residing in metro city.",
      disabled: false,
      checkBox: true,
      value: details.metro,
      name: "metro",
    },
    {
      text: "Exempted House Rent Allowance",
      disabled: true,
      checkBox: false,
      value: details.exempted_HRA,
      name: "exemptedHRA",
    },
    {
      text: "Taxable House Rent Allowance",
      disabled: true,
      checkBox: false,
      value: details.taxable_HRA,
      name: "taxableHouseRentAllowance",
    },
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === "metro" ? checked : +value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      basic_salary,
      DA,
      commission_percentage,
      HRA_Received,
      rent_Paid,
      metro,
    } = details;

    const { exemptedHRA, taxableHouseRentAllowance } = CalculateHRA(
      basic_salary,
      DA,
      commission_percentage,
      0,
      HRA_Received,
      rent_Paid,
      metro
    );
    setDetails((prevDetails) => ({
      ...prevDetails,
      exempted_HRA: exemptedHRA < 0 ? 0 : exemptedHRA,
      taxable_HRA:
        taxableHouseRentAllowance < 0 ? 0 : taxableHouseRentAllowance,
    }));
  };

  return (
    <>
      <form style={{ width: "90%", margin: "auto" }} onSubmit={handleSubmit}>
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
          <p>HOUSE RENT ALLOWANCE CALCULATOR</p>
        </div>
        {Fields.map((item, i) => (
          <FieldCard i={i} item={item} key={i} handleChange={handleChange} />
        ))}
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
              setDetails({
                basic_salary: 0,
                DA: 0,
                commission_percentage: 0,
                HRA_Received: 0,
                rent_Paid: 0,
                metro: false,
                exempted_HRA: 0,
                taxable_HRA: 0,
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
            type="submit"
          >
            calculate
          </button>
        </div>
      </form>
    </>
  );
};

export default HRA;
