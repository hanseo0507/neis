export type NeisAPIResponseType = 'json' | 'xml';

export interface NeisConfig {
  type: NeisAPIResponseType;
  key: string;
}

export enum NeisAPICode {
  RequestSuccess = 'INFO-000',
  DataNotFound = 'INFO-200',
  RestrictApiKey = 'INFO-300',

  InvalidApiKey = 'ERROR-290',
  MissingRequiredValues = 'ERROR-300',
  ServiceNotFound = 'ERROR-310',
  InvalidRequestType = 'ERROR-333',
  TooManyRequestData = 'ERROR-336',
  TooManyRequest = 'ERROR-337',
  InternalServerError = 'ERROR-500',
  DatabaseError = 'ERROR-600',
  DatabaseSQLError = 'ERROR-601',
}

export const neisApiCodeMessages: { [key in NeisAPICode]: string } = {
  'INFO-000': '정상 처리되었습니다.',
  'INFO-200': '해당하는 데이터가 없습니다.',
  'INFO-300': '관리자에 의해 인증키 사용이 제한되었습니다.',

  'ERROR-290':
    '인증키가 유효하지 않습니다. 인증키가 없는 경우, 홈페이지에서 인증키를 신청하십시오.',
  'ERROR-300': '필수 값이 누락되어 있습니다. 요청인자를 참고 하십시오.',
  'ERROR-310': '해당하는 서비스를 찾을 수 없습니다. 요청인자 중 SERVICE를 확인하십시오.',
  'ERROR-333': '요청위치 값의 타입이 유효하지 않습니다.요청위치 값은 정수를 입력하세요.',
  'ERROR-336': '데이터요청은 한번에 최대 1,000건을 넘을 수 없습니다.',
  'ERROR-337': '일별 트래픽 제한을 넘은 호출입니다. 오늘은 더이상 호출할 수 없습니다.',
  'ERROR-500': '서버 오류입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다.',
  'ERROR-600': '데이터베이스 연결 오류입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다.',
  'ERROR-601': 'SQL 문장 오류 입니다. 지속적으로 발생시 홈페이지로 문의(Q&A) 바랍니다.',
} as const;

export type NeisAPIResponse<ServiceName extends string, RowType = unknown> = {
  [key in ServiceName]: [
    {
      head: [NeisAPIResponseHead];
    },
    {
      row: RowType[];
    }
  ];
};

export interface NeisAPIResponseHead {
  list_total_count: number;
  RESULT: NeisAPIResponseHeadResult;
}

export interface NeisAPIResponseHeadResult {
  CODE: NeisAPICode;
  MESSAGE: typeof neisApiCodeMessages[NeisAPICode];
}

export interface NeisAPIErrorResponse {
  RESULT: NeisAPIResponseHeadResult;
}
