const sendRequest = async <T>(url: string, config: RequestInit = {}): Promise<T | null> => {
  const cache: string | null = localStorage.getItem(url)

  if (cache) {
    return JSON.parse(cache)
  }

  const response = await fetch(url, config)

  if (response) {
    const json = await response.json()
    const data = json['data'] as T

    localStorage.setItem(url, JSON.stringify(data));

    return data
  }
  return null
}

export default sendRequest
