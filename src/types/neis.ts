import { NeisClassInfo } from './neis/classInfo';
import { NeisSchoolInfo } from './neis/schoolInfo';
import { NeisSchoolMajorInfo } from './neis/schoolMajorInfo';

export type NeisAPIResponseType = 'json' | 'xml';

export interface NeisConfig {
  type: NeisAPIResponseType;
  key: string;
}

export interface NeisServicesWithRow {
  classInfo: NeisClassInfo;
  schoolInfo: NeisSchoolInfo;
  schoolMajorinfo: NeisSchoolMajorInfo;
}
