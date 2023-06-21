import React from "react";
import styles from "../../HRA/FieldCards.module.css";

const HUF_CARD = ({ i, item, handleChange, tag }) => {
  return (
    <div className={i % 2 !== 0 ? styles.container1 : styles.container2}>
      <label htmlFor="" style={{ minWidth: "fit-content" }}>
        {item.title}
      </label>
      {i === 0 ? (
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
      ) : (
        <input
          name={item.name}
          type={"number"}
          style={{
            padding: "10px",
            minWidth: "300px",
            cursor: i > 1 && i < 6 ? "not-allowed" : "default",
            fontWeight: "bolder",
          }}
          disabled={(i > 1 && i < 6) || i === 8}
          value={item.value}
          onChange={(e) => handleChange(e)}
        />
      )}
    </div>
  );
};

export default HUF_CARD;
