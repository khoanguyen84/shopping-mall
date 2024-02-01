export function priceAfterDiscount(price, discountPercentage) {
    return Math.round((price * (1 - Number(discountPercentage) * 0.01)))
}

export function formatCurrency(number) {
    return Number(number).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}