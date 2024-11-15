import { LoadingType, TLoadingState } from '@common/loading/src/type';
import { createContext, Dispatch, SetStateAction } from 'preact/compat';

export enum AppStepType {
  unset,
}
export type TAppState = {
  loading: TLoadingState;
  step: AppStepType;
};
export type TAppContext = [TAppState, Dispatch<SetStateAction<TAppState>>];

export const AppState: TAppState = {
  step: AppStepType.unset,
  loading: { enabled: false, type: LoadingType.Bars },
};
export const AppContext = createContext<TAppContext>([AppState, () => {}]);
