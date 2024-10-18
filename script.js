const exchangeRates = {
    USD: { EUR: 0.85, BRL: 5.30, GBP: 0.75, JPY: 110, CAD: 1.25, AUD: 1.35, USD: 1 },
    EUR: { USD: 1.18, BRL: 6.24, GBP: 0.88, JPY: 130, CAD: 1.47, AUD: 1.59, EUR: 1 },
    BRL: { USD: 0.19, EUR: 0.16, GBP: 0.15, JPY: 21, CAD: 0.20, AUD: 0.23, BRL: 1 },
    GBP: { USD: 1.33, EUR: 1.14, BRL: 6.73, JPY: 151, CAD: 1.67, AUD: 1.79, GBP: 1 },
    JPY: { USD: 0.0091, EUR: 0.0077, BRL: 0.047, GBP: 0.0066, CAD: 0.013, AUD: 0.012, JPY: 1 },
    CAD: { USD: 0.80, EUR: 0.68, BRL: 5.00, GBP: 0.60, JPY: 76, AUD: 0.94, CAD: 1 },
    AUD: { USD: 0.74, EUR: 0.63, BRL: 4.60, GBP: 0.56, JPY: 80, CAD: 1.06, AUD: 1 }
};

document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    
    document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});

