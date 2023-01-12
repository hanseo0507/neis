import { NeisClassInfo } from './neis/classInfo';
import { NeisMealInfo } from './neis/mealInfo';
import { NeisSchoolAflcoInfo } from './neis/schoolAflcoInfo';
import { NeisSchoolInfo } from './neis/schoolInfo';
import { NeisSchoolMajorInfo } from './neis/schoolMajorInfo';

export type NeisAPIResponseType = 'json' | 'xml';

export interface NeisConfig {
  type: NeisAPIResponseType;
  key: string;
}

export interface NeisServicesWithRow {
  classInfo: NeisClassInfo;
  mealServiceDietInfo: NeisMealInfo;
  schulAflcoinfo: NeisSchoolAflcoInfo;
  schoolInfo: NeisSchoolInfo;
  schoolMajorinfo: NeisSchoolMajorInfo;
}
