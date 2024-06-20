import axios from 'axios';

const COINCAP_API = 'https://api.coincap.io/v2/assets';
const CURRENCY_API = 'https://open.er-api.com/v6/latest/USD';

export const getCryptoData = async () => {
  const response = await axios.get(COINCAP_API);
  return response.data.data.slice(0, 25);  // Get top 25
};

export const getCurrencyRates = async () => {
  const response = await axios.get(CURRENCY_API);
  return response.data.rates;
};
