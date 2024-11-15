import Trigger from '@common/trigger';
import { lazy, Suspense } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { AppStepType } from '../settings/constant';
import './index.less';
import { TAppScene } from '../settings/config';

const Pages = ({ value }: { value: string }) => {
  if (value === AppStepType.unset) return null;

  const Page = lazy(() => import(`./${value}/index.tsx`));
  return (
    <Suspense fallback=''>
      <Page />
    </Suspense>
  );
};

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className='Home'>
      {Object.values(TAppScene)
        .filter((v) => v !== AppStepType.unset)
        .map((value) => (
          <Pages key={value} value={value} />
        ))}
      <Trigger>trigger</Trigger>
    </div>
  );
};
export default Home;
