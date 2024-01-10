const sendRequest = async <T>(url: string, config: RequestInit = {}): Promise<T> => {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data['data'] as T);
}

export default sendRequest
