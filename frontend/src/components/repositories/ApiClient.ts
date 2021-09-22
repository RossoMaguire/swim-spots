import axios, { AxiosResponse } from "axios";
import {
  ICreateSpotPayload,
  ILoginPayload,
  IRegisterPayload,
} from "./interfaces/payloads";

class ApiClient {
  config = {
    headers: {
      "Content-Type": "text/plain",
    },
  };
  baseUrl: string = "http://localhost:8090/api/";
  // post
  createSpot = (
    url: string,
    payload: ICreateSpotPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload, this.config);
  };

  deleteSpot = (url: string): Promise<AxiosResponse<any>> => {
    return axios.delete(this.baseUrl + url, this.config);
  };

  createLogin = (
    url: string,
    payload: ILoginPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload, this.config);
  };

  createRegister = (
    url: string,
    payload: IRegisterPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload, this.config);
  };

  //get
  getSpots = (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url, this.config);
  };

  getFavourites = (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url, this.config);
  };

  getUserFavourites = (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(this.baseUrl + url, this.config);
  };
}

export default ApiClient;
