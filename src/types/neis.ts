import { NeisSchoolInfo } from './schoolInfo';

export type NeisAPIResponseType = 'json' | 'xml';

export interface NeisConfig {
  type: NeisAPIResponseType;
  key: string;
}

export interface NeisServicesWithRow {
  schoolInfo: NeisSchoolInfo;
}
