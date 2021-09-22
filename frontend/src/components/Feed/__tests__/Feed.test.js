import ApiClient from "../../repositories/ApiClient";
import { render } from "@testing-library/react";
import App from "../../App";
import axios from "axios";

jest.mock("axios");

describe("Fetching Apis in Feed", () => {
  it("get swim data successfully from the api when the component is loaded", async () => {
    render(<App />);
    const client = new ApiClient();

    const data = {
      id: 1,
      name: "Awesome Spot",
      county: "Dublin",
      description: "Awesome Place to Swim",
      coordinates: "12345",
      favourites: 4,
      user_name: "rossmag17",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(client.getSpots()).resolves.toEqual(data);
  });

  it("get favourites data successfully from the api when the component is loaded", async () => {
    render(<App />);
    const client = new ApiClient();

    const data = {
      id: 1,
      user_name: "rossmag17",
      swim_spot_name: "Awesome Swim Spot",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(client.getFavourites()).resolves.toEqual(data);
  });

  it("get user favourites data successfully from the api when the component is loaded", async () => {
    render(<App />);
    const client = new ApiClient();

    const data = [
      {
        id: 1,
        user_name: "rossmag17",
        swim_spot_name: "Awesome Swim Spot",
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(client.getUserFavourites()).resolves.toEqual(data);
  });
});
