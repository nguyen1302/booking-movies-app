import React from 'react'
import apisauce, {ApisauceInstance} from 'apisauce'


export class ResponseError extends Error {
    public response: Response;
  
    constructor(response: Response) {
      super(response.statusText);
      this.response = response;
    }
  }
  
  function parseJSON(response: Response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }
  

export async function request(
    url: string,
    options?: RequestInit
  ): Promise<{} | { err: ResponseError }> {
    const fetchResponse = await fetch(url, options);
    const response = checkStatus(fetchResponse);
    return parseJSON(response);
  }

  function checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new ResponseError(response);
    error.response = response;
    throw error;
  }
  

export class HttpRequest {
    request: ApisauceInstance;
    localService: any;
    location: any;

    constructor(APIEndpoint: any) {   
        this.request = apisauce.create({
          baseURL: APIEndpoint,
          timeout: 3600000,
          withCredentials: true
        });
    
        this.request.axiosInstance.interceptors.response.use(
          (response) => {
            return response;
          },
          (error) => {           
            return Promise.reject(error);
          }
        );
      }
}  

