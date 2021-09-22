import ApiClient from "../../repositories/ApiClient";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateSpot from "../CreateSpot";
import axios from "axios";

jest.mock("axios");

describe("Create Spot Component", () => {
  it("successfully renders the form", () => {
    render(
      <BrowserRouter>
        <CreateSpot user="rossmag17" />
      </BrowserRouter>
    );

    expect(screen.getAllByTestId("createField").length).toEqual(4);
  });
});

describe("Create Spot Api", () => {
  it("posts data successfully to the api when the form is submitted", async () => {
    render(
      <BrowserRouter>
        <CreateSpot user="rossmag17" />
      </BrowserRouter>
    );
    const client = new ApiClient();

    fireEvent.change(screen.getByPlaceholderText("Name"), "A Swim Spot");
    fireEvent.change(
      screen.getByPlaceholderText("Description"),
      "An Awesome Swim Spot"
    );
    fireEvent.change(screen.getByPlaceholderText("County"), "Dublin");
    fireEvent.change(screen.getByPlaceholderText("Coordinates"), "12345");
    fireEvent.submit(screen.getByTestId("createBtn"));

    const data = {
      user_name: "rossmag17",
      name: "A Swim Spot",
      description: "An Awesome Swim Spot",
      coordinates: "12345",
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    await expect(client.createSpot(data)).resolves.toEqual(data);
  });
});
