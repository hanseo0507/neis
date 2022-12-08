import { Neis } from '../src';
import { NeisSchoolInfo, Optional } from '../src/types';

describe('Check environment variables', () => {
  test('process.env.NEIS_API_KEY', () => {
    expect(process.env.NEIS_API_KEY).not.toBeNull();
  });
});

describe('Define Neis() class', () => {
  const neis = new Neis({ type: 'json', key: process.env.NEIS_API_KEY || '' });

  test('defines .type', () => {
    expect(neis.type).toBe('json');
  });

  test('define .key', () => {
    expect(neis.key).toBe(process.env.NEIS_API_KEY || '');
  });

  test('.getSchoolInfo()', async () => {
    const schoolInfo = (await neis.getSchoolInfo({
      SCHUL_NM: '한세사이버보안고등학교',
    })) as Optional<NeisSchoolInfo, 'LOAD_DTM'>[];

    schoolInfo[0].LOAD_DTM = undefined;

    const expectValue = {
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
      LOAD_DTM: undefined,
    };

    expect(schoolInfo[0]).toStrictEqual(expectValue);
  });
});
