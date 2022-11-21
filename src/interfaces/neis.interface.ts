export type NeisAPIResponseType = 'json' | 'xml';

export interface NeisConstructor {
  type: NeisAPIResponseType;
  key: string;
}
