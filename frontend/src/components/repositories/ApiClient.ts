import axios, { AxiosResponse } from "axios";
import {
  ICreateSpotPayload,
  ILoginPayload,
  IRegisterPayload,
} from "./interfaces/payloads";

class ApiClient {
  baseUrl: string = "http://localhost:8090/api/";
  // post
  createSpot = (
    url: string,
    payload: ICreateSpotPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload);
  };

  deleteSpot = (url: string): Promise<AxiosResponse<any>> => {
    return axios.delete(this.baseUrl + url);
  };

  createLogin = (
    url: string,
    payload: ILoginPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload);
  };

  createRegister = (
    url: string,
    payload: IRegisterPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload);
  };

  //get
  getSpots = (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url);
  };

  getFavourites = (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url);
  };

  getUserFavourites = (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url);
  };
}

export default ApiClient;
