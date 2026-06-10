/**
 * Data Engine Layer accessing the Google Apps Script deployment array endpoints
 */
const API_URL = "https://script.google.com/macros/s/AKfycbyR8mvYPlbjwCNDUskA-FYclOC5rkj3y1qhEDqjN7UQu8LwQQyIR0BoLJfkWLNG1WaA/exec";

const APIManager = {
    async fetchProducts() {
        const cacheKey = 'affiliate_products_data';
        const cacheTimeKey = 'affiliate_products_timestamp';
        const cacheDuration = 10 * 60 * 1000; // 10 minutes optimization cache window

        const cachedData = localStorage.getItem(cacheKey);
        const cachedTimestamp = localStorage.getItem(cacheTimeKey);

        if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheDuration)) {
            return JSON.parse(cachedData);
        }

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Network response failure.');
            const data = await response.json();
            
            localStorage.setItem(cacheKey, JSON.stringify(data));
            localStorage.setItem(cacheTimeKey, Date.now().toString());
            return data;
        } catch (error) {
            console.error("API Fetch Error: ", error);
            if (cachedData) {
                console.warn("Serving expired fallback cache data.");
                return JSON.parse(cachedData);
            }
            throw error;
        }
    }
};
