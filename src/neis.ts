import { NeisConstructor } from '@interfaces/neis.interface';

export class Neis {
  public type: string;
  public key: string;

  constructor({ type, key }: NeisConstructor) {
    this.type = type;
    this.key = key;
  }
}
