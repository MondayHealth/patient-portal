const TRACKING_ID = "UA-111743668-2";

function gTag() {
  window.dataLayer.push(arguments);
}

export function init() {
  window.dataLayer = window.dataLayer || [];
  gTag("js", new Date());
  gTag("config", TRACKING_ID);
}

export function event(name, category, label, value, nonInteractive) {
  gTag("event", name, {
    event_category: category,
    event_label: label,
    non_interaction: nonInteractive,
    value
  });
}

export function exception(description, fatal) {
  gTag("event", "exception", {
    description: description,
    fatal: !!fatal
  });
}

export function setPage(name) {
  const page_path = "/" + name;
  gTag("config", TRACKING_ID, { page_path });
}
