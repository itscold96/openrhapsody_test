import { useEffect, useState } from 'react';
import { getAdvertisement } from '../../fetches/getAdvertisement';

interface AdvertisementProps {
  unitId: string;
}

export default function Advertisement({ unitId }: AdvertisementProps) {
  const [adHTML, setAdHTML] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const { msg, result } = await getAdvertisement(unitId);
        if (result) {
          setAdHTML(result.ad);
        } else {
          // unitId가 잘못되었을 경우, 200 ok임에도 result가 null 값으로 반환됨.
          setError(msg);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : '알 수 없는 오류 발생');
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [unitId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div dangerouslySetInnerHTML={{ __html: adHTML ?? '' }} />;
}
