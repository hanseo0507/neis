import { Neis } from '../src';

describe('Define Neis() class', () => {
  const neis = new Neis({ type: 'json', key: 'key' });

  test('defines .type', () => {
    expect(neis.type).toBe('json');
  });

  test('define .key', () => {
    expect(neis.key).toBe('key');
  });
});
