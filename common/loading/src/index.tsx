import './index.css';
import { TLoadingState } from './type';
import { twMerge } from 'tailwind-merge';

const Loading = ({ state }: { state: { loading: TLoadingState } }) => {
  console.log(state.loading);

  return (
    <div className='Loading'>
      <div className='background' />
      <div className={twMerge('icon', state.loading.type)} />
    </div>
  );
};

export default Loading;
