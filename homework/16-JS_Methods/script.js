const transactions = [
    { id: "T001", info: "  apple.com/bill  ", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T002", info: "Sberbank Transfer", amount: "5000.00 RUB", date: "2023-10-01" },
    { id: "T003", info: "APPLE.COM/BILL", amount: "1200.50 USD", date: "2023-10-01" }, // duplicate
    { id: "T004", info: " Netflix Subscription ", amount: "15.99 USD", date: "2023-10-02" },
    { id: "T005", info: "Amazon Web Services", amount: "450.00 USD", date: "2023-10-03" },
    { id: "T006", info: "Apple.com/bill", amount: "30.00 USD", date: "2023-10-04" }
];


// Նորմալացում և մաքրում

const normalTransactions = transactions.map(item => {

    const maqurInfo = item.info.trim().toLowerCase();

    const [value, currency] = item.amount.split(" ");

    return {
        ...item,
        info: maqurInfo,
        amount: {
            value: parseFloat(value),
            currency
        }
    };

});


// Կրկնօրինակների հեռացում

const uniqueTransactions = normalTransactions.filter((item, index, array) => {

    return index === array.findIndex(el =>
        el.info === item.info &&
        el.amount.value === item.amount.value &&
        el.amount.currency === item.amount.currency &&
        el.date === item.date
    );

});


// RUB - USD (1 USD = 90 RUB)

const convertedTransactions = uniqueTransactions.map(item => {

    if (item.amount.currency === "RUB") {

        return {
            ...item,
            amount: {
                value: +(item.amount.value / 90).toFixed(2),
                currency: "USD"
            }
        };

    }

    return item;

});


// Խմբավորում ըստ info դաշտի

const groupedTransactions = convertedTransactions.reduce((acc, item) => {

    if (!acc[item.info]) {
        acc[item.info] = [];
    }

    acc[item.info].push(item);

    return acc;

}, {});


// Ընդհանուր գումարի հաշվարկ USD-ով

const totalAmountUSD = convertedTransactions.reduce((sum, item) => {

    return sum + item.amount.value;

}, 0);


// Արդյունք

console.log("Grouped Transactions:");
console.dir(groupedTransactions, { depth: null });

console.log("Total Amount (USD):", totalAmountUSD.toFixed(2));