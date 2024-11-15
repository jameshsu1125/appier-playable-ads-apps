import { ReactElement } from 'preact/compat';

export enum StatusType {
  unload,
  loading,
  loaded,
}

export type TItem = {
  url: string;
  index: number;
  status: StatusType;
};

export interface TResult {
  total: number;
  loaded: number;
  index?: number;
  url?: string;
}

export type TOptions = {
  hideBeforeLoaded?: boolean;
  onUpdate?: (result: TResult) => void;
};

export interface IOnLoaderProps {
  children: ReactElement;
  hideBeforeLoaded?: boolean;
  onStep?: (e: TResult) => void;
  onload?: (e: TResult) => void;
}

export interface IImageOnloadResult {
  loaded: number;
  total: number;
  index: number;
  url: string;
}
