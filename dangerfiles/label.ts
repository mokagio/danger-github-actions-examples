import {warn, danger} from "danger";

export default async () => {
  const labels = danger.github.issue.labels;

  // Warn if the PR doesn't have any labels
  if (danger.github.issue.labels.length == 0) {
    warn("PR is missing at least one label.");
  }

  // TODO: Add example of how to check the label values to make more specific
  // warnings
};

