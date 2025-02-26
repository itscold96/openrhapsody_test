import { lazy, Suspense } from 'react';
const LazyAdvertisement = lazy(() => import('./components/advertisement/Advertisement'));

const BANNER_LARGE = 'PUBLIC_TEST_UNIT_ID_375_80';

export default function App() {
  return (
    <div style={{ height: '80px', width: '375px' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAdvertisement unitId={BANNER_LARGE} />
      </Suspense>
    </div>
  );
}
