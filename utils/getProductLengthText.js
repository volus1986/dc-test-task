export default function getProductLengthText(count) {
    const lastTwo = count % 100;
    const lastOne = count % 10;

    if (lastTwo >= 11 && lastTwo <= 14) return 'Продуктов';

    if (lastOne === 1) return 'Продукт';
    if (lastOne >= 2 && lastOne <= 4) return 'Продукта';

    return 'Продуктов';
}
