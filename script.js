const ACCESS_HASH = "cc6193e4badc6e8675378809874b136cc677b9c2f5ab114129b874d717f3fdb7";
const STORAGE_KEY = "liang-xie-homepage-unlocked";

const form = document.querySelector("#access-form");
const input = document.querySelector("#access-code");
const message = document.querySelector("#access-message");
const lockButton = document.querySelector("#lock-button");
const protectedSite = document.querySelector(".protected");

function setUnlocked(unlocked) {
  document.body.classList.toggle("unlocked", unlocked);
  document.body.classList.toggle("locked", !unlocked);
  protectedSite?.setAttribute("aria-hidden", unlocked ? "false" : "true");
  if (unlocked) {
    sessionStorage.setItem(STORAGE_KEY, "true");
  } else {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

if (sessionStorage.getItem(STORAGE_KEY) === "true") {
  setUnlocked(true);
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const entered = input.value.trim();
  const digest = await sha256(entered);

  if (digest === ACCESS_HASH) {
    message.textContent = "";
    input.value = "";
    setUnlocked(true);
    document.querySelector("#about")?.scrollIntoView();
    return;
  }

  message.textContent = "Incorrect access code.";
  input.select();
});

lockButton?.addEventListener("click", () => {
  setUnlocked(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => input?.focus(), 250);
});
