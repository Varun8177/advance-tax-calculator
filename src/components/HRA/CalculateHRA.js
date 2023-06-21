
const CalculateHRA = (basicSalary,
    daSalary,
    commissionPercentage,
    turnover,
    hraReceived,
    rentPaid,
    isMetroCity) => {
    const total = basicSalary + daSalary + (commissionPercentage / 100) * turnover;
    // 1. hra recieved by user
    const actualHRA = hraReceived;

    // 2. 50% for metro cities and 40% for non metro
    const amount = isMetroCity ? 0.5 * total : 0.4 * total;

    // 3. 10% of total salary - rent
    const rent = rentPaid - 0.1 * total;
    const exemptedHRA = Math.min(actualHRA, amount, rent);
    const taxableHouseRentAllowance = actualHRA - amount;
    return { exemptedHRA, taxableHouseRentAllowance };
}

export default CalculateHRA