export interface NeisSchoolScheduleOptions {
  /**
   * 시도교육청코드
   */
  ATPT_OFCDC_SC_CODE: string;
  /**
   * 표준학교코드
   */
  SD_SCHUL_CODE: string;
  /**
   * 주야과정명
   */
  DGHT_CRSE_SC_NM?: string;
  /**
   * 학교과정명
   */
  SCHUL_CRSE_SC_NM?: string;
  /**
   * 학사일자
   */
  AA_YMD?: string;
  /**
   * 학사시작일자
   */
  AA_FROM_YMD?: string;
  /**
   * 학사종료일자
   */
  AA_TO_YMD?: string;
}

export interface NeisSchoolSchedule {
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
   * 주야과정명
   */
  DGHT_CRSE_SC_NM: string;
  /**
   * 학교과정명
   */
  SCHUL_CRSE_SC_NM: string;
  /**
   * 수업공제일명
   */
  SBTR_DD_SC_NM: string;
  /**
   * 학사일자
   */
  AA_YMD: string;
  /**
   * 행사명
   */
  EVENT_NM: string;
  /**
   * 행사내용
   */
  EVENT_CNTNT: string | null;
  /**
   * 1학년행사여부
   */
  ONE_GRADE_EVENT_YN: string;
  /**
   * 2학년행사여부
   */
  TW_GRADE_EVENT_YN: string;
  /**
   * 3학년행사여부
   */
  THREE_GRADE_EVENT_YN: string;
  /**
   * 4학년행사여부
   */
  FR_GRADE_EVENT_YN: string;
  /**
   * 5학년행사여부
   */
  FIV_GRADE_EVENT_YN: string;
  /**
   * 6학년행사여부
   */
  SIX_GRADE_EVENT_YN: string;
  /**
   * 적재일시
   */
  LOAD_DTM: string;
}
