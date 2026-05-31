// ============================================================
//  Product Pricing Assistant
// ============================================================

// Step 1: Variables
const productName       = "Wireless Noise-Cancelling Headphones";
const costPerUnit       = 12.50;
const basePrice         = 19.99;
const discountRate      = 0.15;
const salesTaxRate      = 0.07;
const fixedMonthlyCosts = 1500.00;

// Step 2: Calculations
const discountedPrice    = basePrice * (1 - discountRate);
const finalPriceWithTax  = discountedPrice * (1 + salesTaxRate);
const profitPerUnit      = finalPriceWithTax - costPerUnit;
const breakEvenUnits     = profitPerUnit > 0 ? Math.ceil(fixedMonthlyCosts / profitPerUnit) : Infinity;
const isProfitablePerUnit = profitPerUnit > 0;

// Step 3: Output
console.log("========================================");
console.log("       PRODUCT PRICING ASSISTANT        ");
console.log("========================================");
console.log(`Product Name          : ${productName}`);
console.log(`Discounted Price      : $${discountedPrice.toFixed(2)}`);
console.log(`Final Price (w/ Tax)  : $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit Per Unit       : $${profitPerUnit.toFixed(2)}`);
console.log(`Break-Even Units/Mo   : ${breakEvenUnits}`);
console.log(`Profitable Per Unit?  : ${isProfitablePerUnit}`);
console.log("========================================");
