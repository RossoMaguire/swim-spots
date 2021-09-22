import ApiClient from "../../repositories/ApiClient";
import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SwimPanel from "../SwimPanel";
import DeleteSpot from "../DeleteSpot";

jest.mock("axios");

describe("Delete Spot Modal", () => {
  it("successfully opens the modal on delete click", () => {
    const props = {
      id: 1,
      name: "Swim Spot",
      county: "Dublin",
      desc: "Awesome Spot",
      coordinates: "12345",
      username: "rossmag17",
      faves: [
        { id: 1, swim_spot_name: "awesome swim spot", user_name: "rossmag17" },
      ],
      userFaves: [],
      currentUser: "rossmag17",
    };
    render(
      <BrowserRouter>
        <SwimPanel
          id={props.id}
          name={props.name}
          county={props.county}
          desc={props.desc}
          coordinates={props.coordinates}
          username={props.username}
          faves={props.faves}
          userFaves={props.userFaves}
          currentUser={props.currentUser}
        />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("deleteBtn"));
    expect(screen.getAllByTestId("deleteModal").length).toEqual(1);
  });
});

describe("Delete Spot Api", () => {
  it("posts data successfully to the api when the delete button is clicked", async () => {
    render(
      <BrowserRouter>
        <DeleteSpot id={1} />
      </BrowserRouter>
    );
    const client = new ApiClient();

    fireEvent.submit(screen.getByTestId("deleteBtn"));

    const data = {
      user_name: "rossmag17",
      name: "A Swim Spot",
      description: "An Awesome Swim Spot",
      coordinates: "12345",
    };

    axios.delete.mockImplementationOnce(() => Promise.resolve(data));
    await expect(client.deleteSpot()).resolves.toEqual(data);
  });
});
