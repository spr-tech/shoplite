// 📝 ASSIGNMENT: Part 4. Replace each it.todo(...) with a real test
import { describe, it, expect } from "vitest";
import themeReducer, { toggleTheme } from "./themeSlice";

describe("themeSlice", () => {
  it("switches from light to dark", () => {
    const state = themeReducer({ mode: "light" }, toggleTheme());
    expect(state.mode).toBe("dark");
  });

  it("switches back from dark to light", () => {
    const state = themeReducer({ mode: "dark" }, toggleTheme());
    expect(state.mode).toBe("light");
  });
});
