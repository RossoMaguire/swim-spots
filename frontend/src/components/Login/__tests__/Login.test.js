import ApiClient from "../../repositories/ApiClient";
import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";

jest.mock("axios");

describe("Login Component", () => {
  it("successfully renders the form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getAllByTestId("loginField").length).toEqual(2);
  });
});

describe("Login Api", () => {
  it("posts data successfully to the api when the login form is filled out and submit is clicked", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const client = new ApiClient();

    fireEvent.change(screen.getByPlaceholderText("Username"), "rossmag17");
    fireEvent.change(screen.getByPlaceholderText("Password"), "test");
    fireEvent.submit(screen.getByTestId("loginBtn"));

    const data = {
      user_name: "rossmag17",
      password: "test",
    };

    const returnData = {
      id: 1,
      user_name: "rossmag17",
      first_name: "Ross",
      last_name: "Maguire",
      email: "ross@example.com",
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(returnData));
    await expect(client.createLogin(data)).resolves.toEqual(returnData);
  });
});
