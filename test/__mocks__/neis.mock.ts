import {
  NeisClassInfo,
  NeisMealInfo,
  NeisSchoolAflcoInfo,
  NeisSchoolInfo,
  NeisSchoolMajorInfo,
  NeisSchoolSchedule,
  Optional,
} from '../../src/types';

export const classInfoMock: Optional<NeisClassInfo, 'LOAD_DTM'>[] = [
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    AY: '2022',
    GRADE: '2',
    DGHT_CRSE_SC_NM: '주간',
    SCHUL_CRSE_SC_NM: '고등학교',
    ORD_SC_NM: '공업계',
    DDDEP_NM: '해킹보안과',
    CLASS_NM: '1',
  },
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    AY: '2022',
    GRADE: '2',
    DGHT_CRSE_SC_NM: '주간',
    SCHUL_CRSE_SC_NM: '고등학교',
    ORD_SC_NM: '공업계',
    DDDEP_NM: '해킹보안과',
    CLASS_NM: '2',
  },
];

export const mealInfoMock: NeisMealInfo[] = [
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    MMEAL_SC_CODE: '2',
    MMEAL_SC_NM: '중식',
    MLSV_YMD: '20221209',
    MLSV_FGR: '182',
    DDISH_NM:
      '야채볶음밥  (5.6.13.)<br/>마라탕  (5.6.13.16.18.)<br/>타코야끼  (1.2.5.6.13.17.18.)<br/>과일음료(1)  (5.13.)<br/>포도무피클  (13.)<br/>단호박샐러드  (1.5.)',
    ORPLC_INFO:
      '쌀 : 국내산<br/>김치류 : 국내산<br/>고춧가루(김치류) : 국내산<br/>쇠고기(종류) : 국내산(육우)<br/>돼지고기 : 국내산<br/>닭고기 : 국내산<br/>오리고기 : 국내산<br/>쇠고기 식육가공품 : 국내산<br/>돼지고기 식육가공품 : 국내산<br/>닭고기 식육가공품 : 국내산<br/>오리고기 가공품 : 국내산<br/>낙지 : 국내산<br/>고등어 : 국내산<br/>갈치 : 국내산<br/>오징어 : 국내산<br/>꽃게 : 국내산<br/>참조기 : 국내산<br/>콩 : 국내산',
    CAL_INFO: '850.1 Kcal',
    NTR_INFO:
      '탄수화물(g) : 126.5<br/>단백질(g) : 23.4<br/>지방(g) : 30.0<br/>비타민A(R.E) : 176.1<br/>티아민(mg) : 0.6<br/>리보플라빈(mg) : 0.6<br/>비타민C(mg) : 64.3<br/>칼슘(mg) : 145.3<br/>철분(mg) : 6.0',
    MLSV_FROM_YMD: '20221209',
    MLSV_TO_YMD: '20221209',
  },
];

export const schoolAflcoInfoMock: Optional<NeisSchoolAflcoInfo, 'LOAD_DTM'>[] = [
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    DGHT_CRSE_SC_NM: '야간',
    ORD_SC_NM: '공업계',
  },
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    DGHT_CRSE_SC_NM: '주간',
    ORD_SC_NM: '공업계',
  },
];

export const schoolInfoMock: Optional<NeisSchoolInfo, 'LOAD_DTM'>[] = [
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    ENG_SCHUL_NM: 'Hansei Cyber Security High School',
    SCHUL_KND_SC_NM: '고등학교',
    LCTN_SC_NM: '서울특별시',
    JU_ORG_NM: '서울특별시교육청',
    FOND_SC_NM: '사립',
    ORG_RDNZC: '04129 ',
    ORG_RDNMA: '서울특별시 마포구 마포대로11길 44-80',
    ORG_RDNDA: '(아현동)',
    ORG_TELNO: '02-362-0130',
    HMPG_ADRES: 'http://www.hansei.org',
    COEDU_SC_NM: '남여공학',
    ORG_FAXNO: '02-312-3996',
    HS_SC_NM: '특성화고',
    INDST_SPECL_CCCCL_EXST_YN: 'N',
    HS_GNRL_BUSNS_SC_NM: '전문계',
    SPCLY_PURPS_HS_ORD_NM: null,
    ENE_BFE_SEHF_SC_NM: '전기',
    DGHT_SC_NM: '주간',
    FOND_YMD: '19941005',
    FOAS_MEMRD: '19941005',
  },
];

export const schoolMajorInfoMock: Optional<NeisSchoolMajorInfo, 'LOAD_DTM'> = {
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010911',
  SCHUL_NM: '한세사이버보안고등학교',
  DGHT_CRSE_SC_NM: '주간',
  ORD_SC_NM: '공업계',
  DDDEP_NM: '해킹보안과',
};

export const schoolScheduleMock: Optional<NeisSchoolSchedule, 'LOAD_DTM'>[] = [
  {
    ATPT_OFCDC_SC_CODE: 'B10',
    ATPT_OFCDC_SC_NM: '서울특별시교육청',
    SD_SCHUL_CODE: '7010911',
    SCHUL_NM: '한세사이버보안고등학교',
    AY: '2022',
    DGHT_CRSE_SC_NM: '주간',
    SCHUL_CRSE_SC_NM: '고등학교',
    SBTR_DD_SC_NM: '해당없음',
    AA_YMD: '20230203',
    EVENT_NM: '겨울개학식',
    EVENT_CNTNT: null,
    ONE_GRADE_EVENT_YN: 'Y',
    TW_GRADE_EVENT_YN: 'Y',
    THREE_GRADE_EVENT_YN: 'Y',
    FR_GRADE_EVENT_YN: '*',
    FIV_GRADE_EVENT_YN: '*',
    SIX_GRADE_EVENT_YN: '*',
  },
];
