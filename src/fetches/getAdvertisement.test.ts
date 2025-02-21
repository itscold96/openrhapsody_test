import { axiosInstance } from '../apis/setupAxios';
import { getAdvertisement } from './getAdvertisement';

describe('광고 받아오기 함수 테스트', () => {
  const testUnitId = 'PUBLIC_TEST_UNIT_ID_375_80';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAdvertisement() 함수가 정상적으로 작동하는지 검사', async () => {
    const expectedResult = '광고 HTML';
    const spyGet = jest.spyOn(axiosInstance, 'get').mockResolvedValue({
      data: { result: expectedResult },
    });

    const data = await getAdvertisement(testUnitId);

    expect(spyGet).toHaveBeenCalledTimes(1);
    expect(spyGet).toHaveBeenCalledWith(`/request?unit=${testUnitId}&pf=web&lcl=ko_KR`);
    expect(data).toHaveProperty('result', expectedResult);
  });

  test('getAdvertisement() 함수가 네트워크 오류 시 적절한 예외를 반환하는지 검사', async () => {
    jest.spyOn(axiosInstance, 'get').mockRejectedValue(new Error('네트워크 오류'));

    await expect(getAdvertisement(testUnitId)).rejects.toThrow('네트워크 오류');
  });
});
