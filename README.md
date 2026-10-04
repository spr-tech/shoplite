# 🛒 ShopLite: Week 4 · Git, GitHub & GitHub Actions Assignment

This project is provided as a **starter** and a **reference**. It's a working ShopLite app with a cart, a light/dark theme and a user login, all built with Redux Toolkit. **Vitest** is already installed, with one finished test file to copy from.

It is **not** on GitHub yet, and it isn't a Git repository yet. In this assignment you will:

- put it on **GitHub**
- add a **CI pipeline** with GitHub Actions
- **protect** the `main` branch
- write **tests**, and watch CI catch a broken one
- cause and resolve a **merge conflict**

All your work happens through **branches and pull requests**, the way real teams work.

---

## 1. What you need

- **Node.js 20 or newer.** Check with `node -v`. If it's lower, install the **LTS** version from https://nodejs.org
- **Git.** Check with `git --version`. If it's missing, install it from https://git-scm.com/downloads
- **A GitHub account:** https://github.com
- **VS Code** (or any code editor)

Tell Git who you are, if you haven't already (use the same email as your GitHub account):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase false
```

---

## 2. Run it first

1. **Unzip** the folder somewhere easy to find.
2. Open it in **VS Code**: *File → Open Folder… → `shoplite-github-starter`*
3. Open a terminal (*Terminal → New Terminal*) and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the link it prints (usually **http://localhost:5173**). You should see the ShopLite header with **Log in**, the 🛒 count and **🌙 Dark**, plus an **Add backpack** button.

Then stop the app (**Ctrl + C**) and check the three checks your pipeline will run:

```bash
npm run lint
npm test
npm run build
```

All three should pass. `npm test` shows **2 passed** and **5 todo**. The todos are your tests to write in Part 4.

---

## 3. Your task

Work through the parts **in order**. Each part builds on the one before.

| Part | What you'll do |
|------|----------------|
| 1 | Put the project on GitHub |
| 2 | Add a CI workflow, through a pull request |
| 3 | Protect the `main` branch |
| 4 | Write tests, through a pull request |
| 5 | Break a test on purpose, then fix it in the same pull request |
| 6 | Cause and resolve a merge conflict |
| 7 | Add your screenshots and submit |

**Every change from Part 2 onwards goes through its own branch and pull request.** Never commit straight to `main` after Part 1.

> 💡 Take the screenshots marked 📸 as you go. You'll need them in Part 7.

---

### Part 1: Put the project on GitHub

1. Turn the folder into a Git repository and make your **first commit**:
   - Check `.gitignore` first. `node_modules` must **not** be committed.
   - Use `git status` before committing to check what's about to be saved.
2. On GitHub, create a **new, empty, public** repository called `shoplite`.
   - **Public** matters: branch protection (Part 3) only works on public repos with a free account.
   - **Don't** tick "Add a README", ".gitignore" or "license". The repo must be empty.
3. Connect your folder to the GitHub repo and **push** `main`.

**Check:** your files are on GitHub, and `node_modules` is **not** there.

---

### Part 2: Add a CI workflow

1. Create a branch called `ci/add-workflow`.
2. Create the file `.github/workflows/ci.yml`. It must:
   - be called `CI`
   - run on every **push to `main`** and every **pull request into `main`**
   - have one job called **`build`**, running on `ubuntu-latest`
   - check out the code, set up **Node 24** (with npm caching), then run `npm ci`, `npm run lint`, `npm test` and `npm run build`, in that order, each as its own named step
3. Commit, push the branch, and open a **pull request** into `main`.
4. Wait for the check to finish. It should be **green ✅**.
5. **Merge** the pull request. Then update your local `main` and delete the branch.

**Check:** the **Actions** tab shows your workflow, and the latest commit on `main` has a ✅.

---

### Part 3: Protect the `main` branch

On GitHub: **Settings → Branches →** add a branch protection rule for `main` that:

- **requires a pull request** before merging, with **no** required approvals (you can't approve your own pull request)
- **requires the `build` status check** to pass before merging
- does **not** allow bypassing the rules (otherwise you, as the owner, can merge anyway)

> 💡 The `build` check only appears in the list after your workflow has run at least once, which it did in Part 2.

**Check:** try to `git push` a commit straight to `main`. GitHub should **reject** it. (Then undo that local commit with `git reset --hard origin/main`.)

---

### Part 4: Write tests

1. Create a branch called `test/theme-and-user`.
2. Open `src/store/themeSlice.test.ts` and `src/store/userSlice.test.ts`. Replace **every** `it.todo(...)` with a real test that checks what its name says. Use `src/store/cartSlice.test.ts` as your reference.
3. Run `npm test`. You should see **7 passed** and **0 todo**.
4. Commit, push, open a pull request, wait for **green ✅**, and **merge**.

> 💡 Make your tests **real**: each one must be able to fail. A test like `expect(true).toBe(true)` checks nothing.

---

### Part 5: Break a test on purpose

1. Create a branch called `test/break-the-build`.
2. Change **one** of your tests so it's **wrong** (for example, expect the wrong name after login). Run `npm test` and see it fail on your computer.
3. Commit, push, and open a pull request.
4. Wait for the check to go **red ❌**.
   - 📸 **Screenshot 1:** the pull request showing the failed check **and** the **greyed-out Merge button**.
5. Open the failed run (**Details**) and find the **Test** step's error message.
   - 📸 **Screenshot 2:** the log showing your test's error message.
6. Fix the test, commit, and push **to the same branch**. Don't open a new pull request.
7. Wait for the **same** pull request to turn **green ✅**.
   - 📸 **Screenshot 3:** the same pull request, now green, with the Merge button available.
8. **Merge** it.

---

### Part 6: Cause and resolve a merge conflict

You'll make two branches that change **the same line** in different ways, then merge both.

1. Start from an up-to-date `main`.
2. Create a branch `feature/rename-shop`. In `src/components/Header.tsx`, change the shop name `ShopLite` to a new name of your choice. Commit, push, and open a pull request. **Don't merge it yet.**
3. Go back to `main` and create **another** branch, `feature/style-title`. On the **same line**, change the heading's style instead (for example, `className="font-bold"` → `className="text-2xl font-extrabold text-blue-600"`). Commit, push, and open a pull request.
4. **Merge the `feature/rename-shop` pull request** on GitHub.
5. Look at the `feature/style-title` pull request. GitHub now says it **has conflicts**, and its checks can't run until they're fixed.
6. On your computer, bring the latest `main` **into** `feature/style-title`. You'll get a conflict.
   - 📸 **Screenshot 4:** `Header.tsx` in VS Code showing the **conflict markers**, **before** you fix anything.
7. Resolve the conflict so the heading has **both** the new name **and** the new style. Remove all the markers, commit, and push.
8. Wait for **green ✅**, then **merge** the pull request.
9. Update your local `main`, then run:
   ```bash
   git log --oneline --graph
   ```
   - 📸 **Screenshot 5:** the output, showing your branches joining back into `main`.

**Check:** run `npm run dev`. The heading shows the new name **with** the new style.

---

### Part 7: Submit

1. Create a branch called `docs/screenshots`.
2. Create a folder called `screenshots` in the project and put your 5 screenshots in it, named:
   - `1-red-pr.png`
   - `2-failed-log.png`
   - `3-green-pr.png`
   - `4-conflict-markers.png`
   - `5-git-log-graph.png`
3. Commit, push, open a pull request, and **merge** it once it's green.
4. **Submit the link to your GitHub repository.**

---

## 4. Before you submit, check

- The repo is **public**, and `node_modules` is **not** in it
- `.github/workflows/ci.yml` runs **install → lint → test → build** on pull requests into `main`
- The **Actions** tab shows red and green runs
- Branch protection is on: `main` requires a pull request **and** the `build` check
- `themeSlice.test.ts` and `userSlice.test.ts` have **no** `it.todo` left, and every test is real
- Your commit messages describe what changed (no `update`, `fix` or `asdf`)
- All 5 screenshots are in the `screenshots` folder on `main`

---

## 5. ⭐ Optional: Deploy to Vercel

1. Sign in to https://vercel.com with GitHub.
2. **Add New… → Project**, and import your `shoplite` repo. Vercel detects Vite by itself.
3. Click **Deploy**.

From now on, every merge into `main` updates your live site, and every pull request gets its own preview link. Because `main` is protected, **only code that passed CI ever goes live.** Add your live link to the top of this README.

Good luck! 🚀
