import Trigger from '@common/trigger';
import { useEffect } from 'preact/hooks';
import './index.less';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className='Home'>
      <Trigger>trigger</Trigger>
    </div>
  );
};
export default Home;
