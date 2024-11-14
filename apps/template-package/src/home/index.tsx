import EventTricker from '@common/eventTrigger';
import { useEffect } from 'preact/hooks';
import './index.less';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className='Home'>
      <EventTricker />
    </div>
  );
};
export default Home;
