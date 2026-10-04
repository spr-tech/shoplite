// ✅ PROVIDED: part of the starter. Use it as a reference. (You will change the shop name in it in Part 6.)
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";
import { login, logout } from "../store/userSlice";
import { clearCart } from "../store/cartSlice";

export function Header() {
  const count = useSelector((state: RootState) => state.cart.items.length);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <header
      className={`flex items-center justify-between p-4 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold">ShopLite</h1>

      <div className="flex items-center gap-4">
        {user.isLoggedIn ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={() => dispatch(logout())}>Log out</button>
          </>
        ) : (
          <button onClick={() => dispatch(login("Ada"))}>Log in</button>
        )}
        <span>🛒 {count}</span>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        <button onClick={() => dispatch(toggleTheme())}>
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
