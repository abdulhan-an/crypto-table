export const processCryptoData = (cryptoData, currencyRates) => {
    return cryptoData.map((crypto) => {
      const usdPrice = parseFloat(crypto.priceUsd);
      return {
        id: crypto.id,
        rank: crypto.rank,
        symbol: crypto.symbol,
        name: crypto.name,
        website: `https://coincap.io/assets/${crypto.id}`,
        priceUsd: usdPrice.toFixed(2),
        priceGbp: (usdPrice * currencyRates.GBP).toFixed(2),
        priceEur: (usdPrice * currencyRates.EUR).toFixed(2),
        priceAed: (usdPrice * currencyRates.AED).toFixed(2),
      };
    });
  };
  