/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './apiClient';

type ApiMethod = 'get' | 'post' | 'put' | 'delete';

interface ApiOptions<T> {
  endpoint: string;
  method?: ApiMethod;
  body?: any;
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export async function callApi<T>({
  endpoint,
  method = 'get',
  body,
  onSuccess,
  onError,
}: ApiOptions<T>): Promise<void> {
  try {
    const response = await api.request<T>({
      url: endpoint,
      method,
      data: JSON.stringify(body),
    });
    if(response.status === 200 || response.status === 201) {
      onSuccess?.(response.data);
    }
    else {
      onError?.(response.data);
    }    
  } catch (error: any) {
    onError?.(error);
  }
}
