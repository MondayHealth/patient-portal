function gTag() {
  window.dataLayer.push(arguments);
}

export function init() {
  window.dataLayer = window.dataLayer || [];
  gTag("js", new Date());
  gTag("config", "UA-111743668-2");
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
