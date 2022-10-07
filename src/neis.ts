import { ConstructorParameters } from './interfaces';

export class Neis {
  public type: string;
  public key: string;

  constructor({ type, key }: ConstructorParameters) {
    this.type = type;
    this.key = key;
  }
}
