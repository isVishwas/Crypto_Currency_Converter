
const crypto_API = async (path) => {
    const requestUrl = `${process.env.CRYPTO_URL}/${path}`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

module.exports = crypto_API;