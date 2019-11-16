import { handler } from '../../../src/healthz/handler';

describe('Healthz handler', () => {
  it('should return status code 200', async () => {
    const response = await handler();

    expect(response.statusCode).toEqual(200);
  });

  it('should return `ok`', async () => {
    const response = await handler();

    expect(response.body).toEqual('ok');
  });
});
