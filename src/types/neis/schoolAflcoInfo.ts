export interface NeisSchoolAflcoInfoOptions {
  /**
   * 시도교육청코드
   */
  ATPT_OFCDC_SC_CODE: string;
  /**
   * 표준학교코드
   */
  SD_SCHUL_CODE?: string;
  /**
   * 주야과정명
   */
  DGHT_CRSE_SC_NM?: string;
}

export interface NeisSchoolAflcoInfo {
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
   * 주야과정명
   */
  DGHT_CRSE_SC_NM: string;
  /**
   * 계열명
   */
  ORD_SC_NM: string;
  /**
   * 적재일시
   */
  LOAD_DTM: string;
}
