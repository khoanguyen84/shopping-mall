export function priceAfterDiscount(price, discountPercentage){
    return Math.round((price * (1 - Number(discountPercentage) * 0.01)))
}