import { NeisClassInfo } from './neis/classInfo';
import { NeisSchoolInfo } from './neis/schoolInfo';

export type NeisAPIResponseType = 'json' | 'xml';

export interface NeisConfig {
  type: NeisAPIResponseType;
  key: string;
}

export interface NeisServicesWithRow {
  schoolInfo: NeisSchoolInfo;
  classInfo: NeisClassInfo;
}
