const ACCESS_HASH = "cc6193e4badc6e8675378809874b136cc677b9c2f5ab114129b874d717f3fdb7";
const STORAGE_KEY = "liang-xie-homepage-unlocked";

const form = document.querySelector("#access-form");
const input = document.querySelector("#access-code");
const message = document.querySelector("#access-message");
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
    document.querySelector("#about-me")?.scrollIntoView();
    return;
  }

  message.textContent = "Incorrect access code.";
  input.select();
});

document.querySelectorAll(".collapsible-list").forEach((list) => {
  const visibleCount = Number(list.dataset.visible || 5);
  const items = Array.from(list.children);
  const button = list.nextElementSibling?.classList.contains("more-button")
    ? list.nextElementSibling
    : null;

  if (!button || items.length <= visibleCount) {
    button?.classList.add("is-hidden");
    return;
  }

  let expanded = false;

  function render() {
    items.forEach((item, index) => {
      item.classList.toggle("is-hidden", !expanded && index >= visibleCount);
    });
    button.textContent = expanded ? button.dataset.less : button.dataset.more;
  }

  button.addEventListener("click", () => {
    expanded = !expanded;
    render();
  });

  render();
});
