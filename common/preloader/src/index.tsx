import { Children, cloneElement, useEffect, useRef } from 'preact/compat';
import ImagePreloader from './seeker';
import { IOnLoaderProps, TResult } from './type';

const Preloader = ({ children, hideBeforeLoaded, onStep, onload }: IOnLoaderProps) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      new ImagePreloader()
        .load(ref.current, {
          hideBeforeLoaded,
          onUpdate: (e: TResult) => onStep?.(e),
        })
        .then((e: any) => {
          onload?.(e);
        });
    }
  }, []);

  return (
    <div>{Children.map(children, (child) => cloneElement(child, { ...child.props, ref }))}</div>
  );
};

export default Preloader;
