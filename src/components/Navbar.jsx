import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <img src="/logo.png" alt="" width={100} height={70} />
      <div className={styles.LinkContainer}>
        <Link to={"/"}>ADVANCE TAX CALCULATOR</Link>
        <Link to={"/house-rent-allowance-calculator"}>
          HOUSE RENT ALLOWANCE CALCULATOR
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
