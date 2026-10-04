// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
// It's an example of a finished test file. Copy its pattern for your own tests.
import { describe, it, expect } from "vitest";
import cartReducer, { addItem, clearCart } from "./cartSlice";
import type { Product } from "../types";

const backpack: Product = {
  id: 1,
  title: "Backpack",
  price: 15000,
  description: "",
  category: "bags",
  image: "",
};

describe("cartSlice", () => {
  it("adds an item to the cart", () => {
    const state = cartReducer({ items: [] }, addItem(backpack));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].title).toBe("Backpack");
  });

  it("clears the cart", () => {
    const state = cartReducer({ items: [backpack, backpack] }, clearCart());
    expect(state.items).toHaveLength(0);
  });
});
