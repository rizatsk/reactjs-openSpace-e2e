import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginInput from "../../components/LoginInput";

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle username typing correctly", async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("Username");

    // Action
    await userEvent.type(usernameInput, "usernametest");

    // Assert
    expect(usernameInput).toHaveValue("usernametest");
  });
  it("should handle password typing correctly", async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText("Password");

    // Action
    await userEvent.type(passwordInput, "passwordtest");

    // Assert
    expect(passwordInput).toHaveValue("passwordtest");
  });
  it("should call login function when login button is clicked", async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const usernameInput = screen.getByPlaceholderText("Username");
    await userEvent.type(usernameInput, "usernametest");
    const passwordInput = screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const loginButton = screen.getByRole("button", { name: "Login" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      id: "usernametest",
      password: "passwordtest",
    });
  });
});
