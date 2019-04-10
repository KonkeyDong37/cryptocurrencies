class CryptoAPI {
    // Query the rest api with a currency and a cryptocurrency
    async queryAPI(currence, cryptocurrency) {
        // Query the url
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currence}`);

        // Return as json
        const result = await url.json();

        // Return the object
        return {
            result
        }
    }

    // Get all the cryptocurencies
    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        // Return this as a json
        const cryptoCurrencies = await url.json();

        // Return the object
        return {
            cryptoCurrencies
        }
    }
}