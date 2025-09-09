/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const midleTerm = 3;
  const longTermDiscount = 50;
  const midleTermDiscount = 20;
  let rentalCost = days * 40;

  if (days >= longTerm) {
    rentalCost -= longTermDiscount;

    return rentalCost;
  }

  if (days >= midleTerm) {
    rentalCost -= midleTermDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
