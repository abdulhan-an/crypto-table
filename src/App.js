import React, { useEffect, useState } from 'react';
import { getCryptoData, getCurrencyRates } from './services/api';
import { processCryptoData } from './utils/dataProcessor';
import CryptoTable from './components/CryptoTable';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [cryptoData, currencyRates] = await Promise.all([getCryptoData(), getCurrencyRates()]);
      const processedData = processCryptoData(cryptoData, currencyRates);
      setCryptoData(processedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Top 25 Cryptocurrencies</h1>
      {loading ? <p>Loading...</p> : <CryptoTable data={cryptoData} />}
    </div>
  );
};

export default App;
