import { fetchData } from './fetchData'; 

describe('fetchData function', () => {
  // Mocking fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ mockData: 'mockValue' }), // Mock response data
    })
  );

  it('should fetch data from the given URL with the provided options', async () => {
    const url = 'https://example.com';
    const options = { method: 'GET' };

    await fetchData(url, options);

    expect(fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return the response data', async () => {
    const url = 'https://example.com';
    const options = { method: 'GET' };

    const data = await fetchData(url, options);

    expect(data).toEqual({ mockData: 'mockValue' });
  });
});
