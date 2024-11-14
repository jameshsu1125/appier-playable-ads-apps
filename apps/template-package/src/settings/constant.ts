import { createContext, Dispatch, SetStateAction } from 'preact/compat';
import { LoadingProcessType, TLoadingProcessState } from './type';

export enum AppStepType {
  unset,
}
export type TAppState = {
  loadingProcess: TLoadingProcessState;
  step: AppStepType;
};
export type TAppContext = [TAppState, Dispatch<SetStateAction<TAppState>>];

export const AppState: TAppState = {
  step: AppStepType.unset,
  loadingProcess: { enabled: true, type: LoadingProcessType.Ball },
};
export const AppContext = createContext<TAppContext>([AppState, () => {}]);
