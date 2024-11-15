import Preloader from '@common/preloader';
import './index.less';

const Scene = () => {
  return (
    <Preloader
      onload={(e) => {
        console.log(e);
      }}
    >
      <div className='Scene1st absolute left-0 top-0 h-full w-full bg-red-500'>
        <div className='h-full w-full' />
      </div>
    </Preloader>
  );
};

export default Scene;
