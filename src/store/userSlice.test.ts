// 📝 ASSIGNMENT: Part 4. Replace each it.todo(...) with a real test
import { describe, it, expect } from "vitest";
import userReducer, { login, logout } from "./userSlice";

describe("userSlice", () => {
  it("starts logged out", () => {
    const state = userReducer(undefined, { type: "unknown" });
    expect(state.isLoggedIn).toBe(false);
    expect(state.name).toBe("");
  });

  it("logs the user in with their name", () => {
    const state = userReducer({ name: "", isLoggedIn: false }, login("Ada"));
    expect(state.name).toBe("Ada");
    expect(state.isLoggedIn).toBe(true);
  });

  it("logs the user out and clears the name", () => {
    const state = userReducer({ name: "Ada", isLoggedIn: true }, logout());
    expect(state.name).toBe("");
    expect(state.isLoggedIn).toBe(false);
  });
});
