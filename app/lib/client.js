export default class Client {
  constructor() {
    this.baseUrl = "https://api.coingecko.com/api/v3";
  }

  async getData(endpoint) {
    const response = await fetch(this.baseUrl + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
}
