const API_BASE_URL = 'http://localhost:3001';

class FoobarApi {
  static fetchFoobars() {
    const request = new Request(`${API_BASE_URL}/foobars`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({})
    });

    return fetch(request).then(response => response.json());
  }
}

export default FoobarApi;
