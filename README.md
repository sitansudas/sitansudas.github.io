# Sitansu Das — DevOps Portfolio

A dark, cloud-ops-dashboard-themed portfolio site. Plain HTML/CSS/JS —
no build step, no npm install, works by just opening `index.html`.

## Structure
```
sitansu-portfolio/
├── index.html          → all page content
├── css/style.css        → all styling (dark theme, bento grid, terminal UI)
├── js/script.js         → typing effect, boot log, live terminal, GitHub stats
└── assets/
    ├── profile-placeholder.svg   → auto-shown until you add profile.jpg
    ├── PUT_YOUR_PHOTO_HERE.txt
    └── PUT_YOUR_RESUME_HERE.txt
```

## Before you publish — 3 things to finish

1. **Add your real photo** → save it as `assets/profile.jpg` (replaces the "SD" placeholder automatically).
2. **Add your real resume** → save it as `assets/resume.pdf` (the Resume button already links to this path).
3. **Check the project links** in `index.html` (search for `card-projects`) —
   two of the three project cards currently have `href="#"` placeholder
   links because I only had the confirmed repo for the Utilities API
   (`github.com/sitansudas/python-mini-project-sitansu`). Swap in the
   real repo URLs for the CI/CD Pipeline and Infrastructure Automation
   projects once they're pushed to GitHub.

Everything else — name, email, LinkedIn, GitHub username, skills,
timeline, terminal commands — is already filled in with your real info.

## Live GitHub stats
The GitHub card fetches your public repo/follower counts live from the
GitHub API, and the contribution graph is pulled from `ghchart.rshah.org`.
Nothing to configure — it just works once the site is live, using the
username `sitansudas`. If you ever change your GitHub username, update
`GITHUB_USERNAME` at the top of `js/script.js`.

## Try the terminal
Scroll to the "Cloud Terminal" card and type commands like:
`about`, `skills`, `projects`, `github`, `contact`, `whoami`, `clear`.
It's all defined in `commandResponses` in `js/script.js` — easy to add
more commands later.

## Deploy it (free, ~5 minutes) — GitHub Pages
1. Create a new GitHub repo, e.g. `sitansudas.github.io` (using your
   exact username makes it your root domain) — or any repo name works too.
2. Upload all files in this folder to that repo (drag-and-drop on
   github.com works, or use git).
3. Go to the repo's **Settings → Pages** → set source to the `main`
   branch, root folder.
4. Your site goes live at:
   - `https://sitansudas.github.io` (if you used the special repo name), or
   - `https://sitansudas.github.io/<repo-name>` (any other name).

### Alternative: Netlify (drag-and-drop, even faster)
Go to https://app.netlify.com/drop and drag this whole folder in.
You get a live URL instantly, and can add a custom domain later for free.

## Customizing further
- Colors: all defined as CSS variables at the top of `css/style.css`
  (`--blue`, `--purple`, `--green`, etc.) — change once, updates everywhere.
- Skill percentages: edit the `--w` values in the `.skill-row` elements
  in `index.html` — these are your own estimate, adjust as you improve.
- Timeline / About copy: plain text in `index.html`, edit freely.

## Notes
- No backend, no database, no build tools — just static files, so it's
  free to host anywhere (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
- Fully responsive down to mobile, keyboard-accessible terminal input,
  and respects reduced-motion settings.
