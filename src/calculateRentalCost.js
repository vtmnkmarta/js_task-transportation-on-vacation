/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  let rentalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    rentalCost -= LONG_TERM_DISCOUNT;

    return rentalCost;
  }

  if (days >= SHORT_TERM) {
    rentalCost -= SHORT_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
