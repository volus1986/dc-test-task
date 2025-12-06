export default function getProductPricesAmount(
    prices: {
        value: number;
        symbol: string;
    }[][],
) {
    const amount: Record<string, number> = {};
    prices
        .flatMap((price) => price)
        .forEach((price) => {
            if (price.symbol in amount) {
                amount[price.symbol] += price.value;
            } else {
                amount[price.symbol] = price.value;
            }
        });

    return amount;
}
