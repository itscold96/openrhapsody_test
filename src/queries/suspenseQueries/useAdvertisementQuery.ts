import { useSuspenseQuery } from '@tanstack/react-query';
import { advertiseQueryKeys } from '../../constants/queryKeys';
import { getAdvertisement } from '../../fetches/getAdvertisement';

export const useAdvertisementQuery = (unitId: string) => {
  return useSuspenseQuery({
    queryKey: [advertiseQueryKeys.get(unitId)],
    queryFn: () => getAdvertisement(unitId),
  });
};
