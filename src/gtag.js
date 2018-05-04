const TRACKING_ID = "UA-111743668-2";

function gtag() {
  window.dataLayer.push(arguments);
}

export function init() {
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", TRACKING_ID);
}

export function event(name, category, label, value, nonInteractive) {
  gtag("event", name, {
    event_category: category,
    event_label: label,
    non_interaction: nonInteractive,
    value
  });
}

export function exception(description, fatal) {
  gtag("event", "exception", {
    description: description,
    fatal: !!fatal
  });
}

export function navigate(name) {
  let page_path = "/" + name;
  gtag("config", TRACKING_ID, { page_path });
}
