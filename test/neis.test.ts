import { Neis } from '../src';

describe('Check environment variables', () => {
  test('process.env.NEIS_API_KEY', () => {
    expect(process.env.NEIS_API_KEY).not.toBeNull();
  });
});

describe('Define Neis() class', () => {
  const neis = new Neis({ type: 'json', key: 'key' });

  test('defines .type', () => {
    expect(neis.type).toBe('json');
  });

  test('define .key', () => {
    expect(neis.key).toBe('key');
  });
});
