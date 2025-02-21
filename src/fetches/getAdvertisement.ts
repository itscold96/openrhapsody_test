import { axiosInstance } from '../apis/setupAxios';

export const getAdvertisement = async (unitId: string) => {
  try {
    const { data } = await axiosInstance.get(`/request?unit=${unitId}&pf=web&lcl=ko_KR`);
    return data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
