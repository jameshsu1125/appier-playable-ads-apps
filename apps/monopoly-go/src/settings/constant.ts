import { LoadingType, TLoadingState } from '@common/loading/src/type';
import { createContext, Dispatch, SetStateAction } from 'preact/compat';

export enum AppStepType {
  unset = 'unset',
  loaded = 'loaded',
}

export type TAppState = {
  loading: TLoadingState;
  step: AppStepType;
  select: null | 1 | 2 | 3 | 4 | 5;
};
export type TAppContext = [TAppState, Dispatch<SetStateAction<TAppState>>];

export const AppState: TAppState = {
  step: AppStepType.unset,
  select: null,
  loading: { enabled: false, type: LoadingType.Bars },
};
export const AppContext = createContext<TAppContext>([AppState, () => {}]);
