import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { apiUrls } from '../../constants/api-urls';
import { AxiosMethod } from '../../constants/axios-mothod';
import { DEFAULT_API_KEY, UNAUTHORIZED_STATUS } from '../../constants/default-constants';
import { PlainObject } from '../../models/PlainObject';
import { LocalStorageService } from '../../services/LocalStorageService';
import { initialData } from './constants/initial-data';
import { CustomAxiosResult } from './models/CustomAxiosResult';

type requestCallback<T> = (response: AxiosResponse<T> | null, error: AxiosError | null) => void;

// should update Auth token and set to localStorage
const updateToken = () => new Promise((res, rej) => {
  Axios({
    method: AxiosMethod.POST,
    url: apiUrls.AUTH,
    data: { apiKey: DEFAULT_API_KEY }
  })
    .then((response: AxiosResponse) => {
      if (!response.data || !response.data.token) {
        return rej();
      }

      LocalStorageService.setToken(response.data.token);

      res();
    })
    .catch(rej)
});

const executeRequest = <T>(config: AxiosRequestConfig, onResponse?: requestCallback<T>, canUpdateToken = true) => new Promise<AxiosResponse<T>>((res, rej) => {
  const resolve = (resData: AxiosResponse<T>) => {
    res(resData);

    if (!onResponse) {
      return;
    }

    onResponse(resData, null);
  };
  const reject = (resError: AxiosError) => {
    rej(resError);

    if (!onResponse) {
      return;
    }

    onResponse(null, resError);
  };
  const updateTokenAndRepeatRequest = (responseError: AxiosError<PlainObject>) => updateToken().then(() => {
    executeRequest<T>(config, null, false).then(resolve).catch(reject)
  }).catch(() => {
    reject(responseError);
  });

  Axios(config)
    .then(resolve)
    .catch((responseError: AxiosError<PlainObject>) => {
      // if error status Unauthorized and request was failed at first time - should get new auth token and make request again
      if (responseError.response.data.status === UNAUTHORIZED_STATUS && canUpdateToken) {
        updateTokenAndRepeatRequest(responseError);
      } else {
        reject(responseError);
      }
      reject(responseError);
    })
});

export function useCustomAxios<T>(mainConfig: AxiosRequestConfig): [CustomAxiosResult<T>, (config?: AxiosRequestConfig) => void] {
  const [ state, setState ] = useState<CustomAxiosResult<T>>(initialData);

  const execute = (config: AxiosRequestConfig = {}) => {
    setState({
      ...state,
      loading: true
    });

    return executeRequest<T>({
      method: AxiosMethod.POST,
      ...mainConfig,
      ...config
    }, (response, error) => {
      setState({
        ...initialData,
        data: response && response.data,
        response,
        error,
        loading: false
      })
    })
  };

  return [state, execute];
}
