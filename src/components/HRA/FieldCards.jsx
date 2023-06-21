import React from "react";
import styles from "./FieldCards.module.css";
const FieldCard = ({ i, item, handleChange }) => {
  return (
    <div className={i % 2 === 0 ? styles.container1 : styles.container2}>
      <label htmlFor="" style={{ minWidth: "fit-content" }}>
        {item.text}
      </label>
      {item.checkBox ? (
        <div style={{ display: "flex", marginRight: "220px" }}>
          <input
            name={item.name}
            type={"checkbox"}
            disabled={item.disabled}
            style={{ cursor: item.disabled ? "not-allowed" : "default" }}
            onChange={(e) => handleChange(e)}
            value={item.value}
          />
          <p>(Tick if Yes)</p>
        </div>
      ) : (
        <input
          name={item.name}
          type={"number"}
          disabled={item.disabled}
          style={{
            padding: "10px",
            minWidth: "300px",
            cursor: item.disabled ? "not-allowed" : "default",
          }}
          value={item.value || ""}
          onChange={(e) => handleChange(e)}
        />
      )}
    </div>
  );
};

export default FieldCard;
