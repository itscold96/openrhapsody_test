import { axiosInstance } from '../apis/setupAxios';

export const getAdvertisement = async (unitId: string) => {
  try {
    const { data } = await axiosInstance.get(`/request?unit=${unitId}&pf=web&lcl=ko_KR`);
    return data;
  } catch (error) {
    console.error('광고 데이터를 가져오는 중 오류 발생하였습니다.:', error);
    throw new Error('광고 데이터를 불러오지 못했습니다.');
  }
};
