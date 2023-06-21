
const calculate = (income, amount, percentage, addon = 0) => {
    const incomeTax = ((income - amount) * percentage) + addon;
    const surcharge = incomeTax > 20000000 ? Math.floor(incomeTax * 0.25) : incomeTax > 10000000 ? Math.floor(incomeTax * 0.15) : 0;
    const educationCess = 0;
    const secondaryEducationCess = incomeTax * 0.04;
    const totalTaxLiability = incomeTax + educationCess + secondaryEducationCess;

    return {
        incomeTax: Math.floor(incomeTax),
        surcharge,
        educationCess,
        secondaryEducationCess: Math.floor(secondaryEducationCess),
        totalTaxLiability: Math.floor(totalTaxLiability)
    };
}

const CalculateHUF = (income) => {
    if (income > 300000 && income < 600000) {
        const data = calculate(income, 300000, 0.05, 0)
        return data
    } else if (income > 600000 && income < 900000) {
        const data = calculate(income, 600000, 0.1, 15000)
        return data
    } else if (income > 900000 && income < 1200000) {
        const data = calculate(income, 900000, 0.15, 30000)
        return data
    } else if (income > 1200000 && income < 1500000) {
        const data = calculate(income, 1200000, 0.2, 60000)
        return data
    } else if (income > 1500000) {
        const data = calculate(income, 1500000, 0.3, 162600)
        return data
    } else {
        const data = calculate(0, 0, 0, 0)
        return data
    }
}

export default CalculateHUF