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

    // return prices
    //     .map((priceArray: { value: number; symbol: string }[]) =>
    //         priceArray.find((price) => price.symbol === symbol),
    //     )
    //     .map((price) => price?.value ?? 0)
    //     .reduce((total, price) => total + price, 0);
}
