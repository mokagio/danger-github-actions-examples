// The import is not required for the file to run standalone and it actually
// results in a runtime error when importing this file.
//
// import {warn, danger} from "danger";

export default async function checkMilestone() {
  // Warn if the PR doesn't have a milestone
  const issue = await danger.github.api.issues.get(danger.github.thisPR);
  if (issue.data.milestone == null) {
    warn("PR is not assigned to a milestone.");
  }

  // TODO: Add example of skipping this check if the PR branch name matches a
  // pattern or if there's a certain label.
};

