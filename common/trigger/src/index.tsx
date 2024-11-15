import { ReactNode } from 'preact/compat';
import './index.css';

const Trigger = ({ children }: { children?: ReactNode }) => {
  return <a>{children}</a>;
};
export default Trigger;
