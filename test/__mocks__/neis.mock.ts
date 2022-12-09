import { NeisClassInfo, NeisSchoolInfo, NeisSchoolMajorInfo, Optional } from 'src/types';

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
