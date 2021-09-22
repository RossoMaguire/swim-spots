import ApiClient from "../../repositories/ApiClient";
import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../Register";

jest.mock("axios");

describe("Login Component", () => {
  it("successfully renders the form", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    expect(screen.getAllByTestId("registerField").length).toEqual(5);
  });
});

describe("Register Api", () => {
  it("posts data successfully to the api when the register form is filled out and submit is clicked", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const client = new ApiClient();

    fireEvent.change(screen.getByPlaceholderText("Username"), "rossmag17");
    fireEvent.change(screen.getByPlaceholderText("First Name"), "Ross");
    fireEvent.change(screen.getByPlaceholderText("Last Name"), "Maguire");
    fireEvent.change(screen.getByPlaceholderText("Email"), "ross@test.com");
    fireEvent.change(screen.getByPlaceholderText("Password"), "test");
    fireEvent.submit(screen.getByTestId("registerBtn"));

    const data = {
      user_name: "rossmag17",
      first_name: "Ross",
      last_name: "Maguire",
      email: "ross@example.com",
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    await expect(client.createRegister(data)).resolves.toEqual(data);
  });
});
