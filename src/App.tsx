import Advertisement from './\bcomponents/advertisement/Advertisement';

const BANNER_LARGE = 'PUBLIC_TEST_UNIT_ID_375_80';

export default function App() {
  return (
    <div style={{ height: '80px', width: '375px' }}>
      <Advertisement unitId={BANNER_LARGE} />
    </div>
  );
}
