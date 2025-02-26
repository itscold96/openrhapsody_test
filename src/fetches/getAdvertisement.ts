import { axiosInstance } from '../apis/setupAxios';

interface GetAdvertisementSuccessResult {
  ad: string;
  creativeId: string;
  format: string;
  unit: string;
  w: number;
  h: number;
}

interface GetAdvertisementResponse {
  code: number;
  msg: string;
  result: null | GetAdvertisementSuccessResult;
}

export const getAdvertisement = async (unitId: string): Promise<GetAdvertisementResponse> => {
  try {
    const { data } = await axiosInstance.get(`/request`, {
      params: {
        unit: unitId,
        pf: 'web',
        lcl: 'ko_KR',
      },
    });
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
