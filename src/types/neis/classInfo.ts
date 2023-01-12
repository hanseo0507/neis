export interface NeisClassInfoOptions {
  /**
   * 시도교육청코드
   */
  ATPT_OFCDC_SC_CODE: string;
  /**
   * 표준학교코드
   */
  SD_SCHUL_CODE: string;
  /**
   * 학년도
   */
  AY?: string;
  /**
   * 학년
   */
  GRADE?: string;
  /**
   * 주야과정명
   */
  DGHT_CRSE_SC_NM?: string;
  /**
   * 학교과정명
   */
  SCHUL_CRSE_SC_NM?: string;
  /**
   * 계열명
   */
  ORD_SC_NM?: string;
  /**
   * 학과명
   */
  DDDEP_NM?: string;
}

export interface NeisClassInfo {
  /**
   * 시도교육청코드
   */
  ATPT_OFCDC_SC_CODE: string;
  /**
   * 시도교육청명
   */
  ATPT_OFCDC_SC_NM: string;
  /**
   * 표준학교코드
   */
  SD_SCHUL_CODE: string;
  /**
   * 학교명
   */
  SCHUL_NM: string;
  /**
   * 학년도
   */
  AY: string;
  /**
   * 학년
   */
  GRADE: string;
  /**
   * 주야과정명
   */
  DGHT_CRSE_SC_NM: string;
  /**
   * 학교과정명
   */
  SCHUL_CRSE_SC_NM: string;
  /**
   * 계열명
   */
  ORD_SC_NM: string;
  /**
   * 학과명
   */
  DDDEP_NM: string;
  /**
   * 반명
   */
  CLASS_NM: string;
  /**
   * 적재일시
   */
  LOAD_DTM: string;
}
