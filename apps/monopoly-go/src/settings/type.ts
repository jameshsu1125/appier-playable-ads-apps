import { ReactNode } from 'preact/compat';

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export interface IReactProps {
  readonly children?: ReactNode;
}
