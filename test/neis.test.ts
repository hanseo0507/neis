import { Neis } from '../src';

import {
  classInfoMock,
  schoolAflcoInfoMock,
  schoolInfoMock,
  schoolMajorInfoMock,
  schoolScheduleMock,
} from './__mocks__/neis.mock';
import { removeLoadDTM } from './helper/removeLoadDTM';

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

  test('.getClassInfo()', async () => {
    const classInfo = await neis.getClassInfo({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7010911',
      AY: '2022',
      GRADE: '2',
      DDDEP_NM: '해킹보안과',
    });

    expect(removeLoadDTM(classInfo)).toStrictEqual(classInfoMock);
  });

  test('.getSchoolAflcoInfo()', async () => {
    const schoolAflcoInfo = await neis.getSchoolAflcoInfo({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7010911',
    });

    expect(removeLoadDTM(schoolAflcoInfo)).toStrictEqual(schoolAflcoInfoMock);
  });

  test('.getSchoolInfo()', async () => {
    const schoolInfo = await neis.getSchoolInfo({ SCHUL_NM: '한세사이버보안고등학교' });
    expect(removeLoadDTM(schoolInfo)).toStrictEqual(schoolInfoMock);
  });

  test('.getSchoolMajorInfo()', async () => {
    const schoolMajorInfo = await neis.getSchoolMajorInfo({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7010911',
    });
    expect(removeLoadDTM(schoolMajorInfo)).toContainEqual(schoolMajorInfoMock);
  });

  test('.getMealInfo()', async () => {
    const mealInfo = await neis.getMealInfo({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7010911',
      MLSV_YMD: '20221209',
    });

    expect(mealInfo).toStrictEqual(mealInfo);
  });

  test('.getSchoolSchedule()', async () => {
    const schoolSchedule = await neis.getSchoolSchedule({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7010911',
      AA_YMD: '20230203',
    });

    expect(removeLoadDTM(schoolSchedule)).toStrictEqual(schoolScheduleMock);
  });
});
