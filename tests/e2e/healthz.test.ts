import axios from 'axios';

const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3000';

describe('GET /healthz', () => {
  it('should return status code 200', async () => {
    const response = await axios.get(`${baseURL}/healthz`);

    expect(response.status).toEqual(200);
  });

  it('should return `ok`', async () => {
    const response = await axios.get(`${baseURL}/healthz`);

    expect(response.data).toEqual('ok');
  });
});
