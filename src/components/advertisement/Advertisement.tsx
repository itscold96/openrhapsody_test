import { useAdvertisement } from '../../queries/useAdvertisement';

interface AdvertisementProps {
  unitId: string;
}

export default function Advertisement({ unitId }: AdvertisementProps) {
  const { data, error } = useAdvertisement(unitId);

  if (error) return <div>{error.message}</div>;
  if (!data.result) return <div>{data.msg}</div>;

  return <div dangerouslySetInnerHTML={{ __html: data.result.ad ?? '' }} />;
}
