import { lazy, Suspense, useContext } from 'preact/compat';
import { AppContext } from './settings/constant';
import { PAGE } from './settings/config';
import LoadingProcess from '@common/loadingProcess';

const App = () => {
  const value = useContext(AppContext);
  const loadingProcess = value[0].loadingProcess;
  const Page = lazy(() => import(`./${PAGE.home}/index.tsx`));
  return (
    <AppContext.Provider value={value}>
      <Suspense fallback=''>
        <Page />
      </Suspense>
      {loadingProcess.enabled && <LoadingProcess />}
    </AppContext.Provider>
  );
};
export default App;
