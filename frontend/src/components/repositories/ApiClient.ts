import axios, { AxiosResponse } from "axios";
import {
  ICreateSpotPayload,
  ILoginPayload,
  IRegisterPayload,
  ICreateFavouritePayload,
} from "./interfaces/payloads";

class ApiClient {
  config = {
    headers: {
      "Content-Type": "text/plain",
    },
  };

  /***
   *
   * Change this to call local vs production API - should ideally move to env variable
  // baseUrl: string = "http://localhost:8090/api/"; // local
  */
  baseUrl: string = "https://swim-spots.herokuapp.com/api/"; // production

  // post
  createSpot = (
    url: string,
    payload: ICreateSpotPayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload, this.config);
  };

  createFavourite = (
    url: string,
    payload: ICreateFavouritePayload
  ): Promise<AxiosResponse<any>> => {
    return axios.post(this.baseUrl + url, payload, this.config);
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

  // delete
  deleteSpot = (url: string): Promise<AxiosResponse<any>> => {
    return axios.delete(this.baseUrl + url, this.config);
  };
}

export default ApiClient;
