import Loading from '@common/loading';
import { lazy, Suspense, useContext } from 'preact/compat';
import { PAGE } from './settings/config';
import { AppContext } from './settings/constant';

const width = import.meta.env.VITE_WIDTH || 720;
const height = import.meta.env.VITE_HEIGHT || 1280;

const App = () => {
  const value = useContext(AppContext);
  const loadingProcess = value[0].loading;
  const Page = lazy(() => import(`./${PAGE.home}/index.tsx`));
  return (
    <div
      className='bg-backgroundColor relative overflow-hidden'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <AppContext.Provider value={value}>
        <Suspense fallback=''>
          <Page />
        </Suspense>
        {loadingProcess.enabled && <Loading state={value[0]} />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
