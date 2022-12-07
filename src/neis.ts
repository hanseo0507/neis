import { NeisConfig } from './types';

export class Neis {
  public type: string;
  public key: string;

  constructor({ type, key }: NeisConfig) {
    this.type = type;
    this.key = key;
  }
}
