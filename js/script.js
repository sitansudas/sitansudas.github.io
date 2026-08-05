// ============ CONFIG ============
const GITHUB_USERNAME = "sitansudas";

// ============ YEAR ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ MOBILE NAV ============
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  navLinks.style.flexDirection = "column";
  navLinks.style.position = "absolute";
  navLinks.style.top = "56px";
  navLinks.style.right = "16px";
  navLinks.style.background = "#0d1220";
  navLinks.style.border = "1px solid rgba(255,255,255,0.08)";
  navLinks.style.borderRadius = "10px";
  navLinks.style.padding = "14px 18px";
  navLinks.style.gap = "12px";
});

// ============ TYPING ROLE EFFECT ============
const roles = [
  "DevOps Engineer",
  "Cloud Automation Enthusiast",
  "CI/CD Specialist",
  "Infrastructure as Code",
];
const typedEl = document.getElementById("typedRole");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ============ BOOT LOG ANIMATION ============
const bootSteps = [
  "Initializing Cloud Operations Center...",
  "Loading infrastructure...",
  "Connecting to AWS...",
  "Authenticating GitHub...",
  "Starting Kubernetes cluster...",
  "Loading monitoring services...",
  "Done.",
];
const bootLog = document.getElementById("bootLog");
let bootIndex = 0;
function runBoot() {
  if (bootIndex >= bootSteps.length) {
    const welcome = document.createElement("p");
    welcome.className = "boot-ok";
    welcome.innerHTML = `&gt; <span style="color:var(--text)">Welcome, Sitansu!</span> 🚀`;
    bootLog.appendChild(welcome);
    return;
  }
  const line = document.createElement("p");
  line.className = "boot-ok";
  line.innerHTML = `&gt; ${bootSteps[bootIndex]} <b>OK</b>`;
  bootLog.appendChild(line);
  bootIndex++;
  setTimeout(runBoot, 260);
}
runBoot();

// ============ SCROLL REVEAL STAGGER ============
document.querySelectorAll(".card").forEach((el, i) => {
  el.style.animationDelay = `${i * 60}ms`;
});
document.querySelectorAll(".tool-chip").forEach((el, i) => {
  el.style.animationDelay = `${i * 70}ms`;
});

// ============ GITHUB LIVE STATS ============
async function loadGithubStats() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) throw new Error("GitHub API error");
    const data = await res.json();
    document.getElementById("ghRepos").textContent = data.public_repos ?? "—";
    document.getElementById("ghFollowers").textContent = data.followers ?? "—";
    document.getElementById("ghFollowing").textContent = data.following ?? "—";
  } catch (e) {
    // Fail quietly — placeholders stay as "—"
    console.warn("Could not load live GitHub stats:", e);
  }
}
loadGithubStats();

// ============ TERMINAL ============
const terminalLines = document.getElementById("terminalLines");
const terminalInput = document.getElementById("terminalInput");
const terminalWindow = document.getElementById("terminalWindow");

const commandResponses = {
  about: "Fresher DevOps Engineer based in Bengaluru, India. B.Sc. in Computer Science. I automate infrastructure and build CI/CD pipelines — Linux, AWS, Docker, Kubernetes, Terraform, Ansible, Jenkins.",
  skills: "Linux, Git/GitHub, Docker, AWS, Kubernetes, Terraform, Ansible, Jenkins, Python, FastAPI, Boto3, Prometheus, Grafana, Shell scripting.",
  projects: "1) DevOps CI/CD Pipeline (Jenkins/Docker/ArgoCD)  2) Infrastructure Automation (Terraform/Ansible)  3) Internal DevOps Utilities API (FastAPI/Boto3) — type 'github' for the repo.",
  experience: "Fresher — built hands-on projects covering the full DevOps toolchain instead of formal work experience. Actively interviewing for DevOps / Cloud Engineer roles.",
  education: "B.Sc. in Computer Science.",
  github: "https://github.com/sitansudas",
  resume: "Downloading resume... (see the 'Resume' button in the top nav)",
  contact: "Email: sitansudas52@gmail.com | LinkedIn: linkedin.com/in/sitansu-das-6003a0312",
  whoami: "sitansu — devops engineer, cloud enthusiast, terminal dweller.",
  help: "Available commands: about, skills, projects, experience, education, github, resume, contact, whoami, clear",
};

function printLine(text, cls = "t-line") {
  const p = document.createElement("p");
  p.className = cls;
  p.textContent = text;
  terminalLines.appendChild(p);
  terminalLines.scrollTop = terminalLines.scrollHeight;
}

function handleCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  printLine(`sitansu@cloudops:~$ ${raw}`, "t-line t-muted");
  if (!cmd) return;
  if (cmd === "clear") {
    terminalLines.innerHTML = "";
    return;
  }
  if (commandResponses[cmd]) {
    printLine(commandResponses[cmd]);
  } else if (cmd === "sudo hire-me") {
    printLine("Permission granted. ✅ Let's talk — sitansudas52@gmail.com");
  } else {
    printLine(`command not found: ${cmd} — type 'help' for a list of commands`, "t-error");
  }
}

terminalInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCommand(terminalInput.value);
    terminalInput.value = "";
  }
});
terminalWindow?.addEventListener("click", () => terminalInput?.focus());
