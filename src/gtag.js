function gTag() {
  window.dataLayer.push(arguments);
}

export function init() {
  window.dataLayer = window.dataLayer || [];
  gTag("js", new Date());
  gTag("config", "UA-111743668-2");
}

export function event(name, param) {
  if (param) {
    gTag("event", name, param);
  } else {
    gTag("event", name);
  }
}
