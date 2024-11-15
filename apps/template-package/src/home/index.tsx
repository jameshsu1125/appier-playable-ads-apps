import Trigger from '@common/trigger';
import { useEffect } from 'preact/hooks';
import './index.less';

console.log(import.meta.env);

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className='Home'>
      <Trigger>trigger</Trigger>
    </div>
  );
};
export default Home;
