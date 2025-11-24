---
title: Maintainer's Handbook | Commerce Contributor
description: Review Commerce open-source maintainer respsonsibilities and GitHub tools to make performing those activities easier.
---

# Maintainers handbook

This document describes activities performed by a community maintainer, provides some insight and description of the tools integrated within GitHub to assist our maintainers.

## Repositories and projects

Our maintainers work on repositories within the Magento Github organization. Currently, contributions are accepted from the following repositories:

-  [magento2](https://github.com/magento/magento2)
-  [magento2-page-builder](https://github.com/magento/magento2-page-builder)
-  [inventory](https://github.com/magento/inventory)

There are several GitHub projects to help manage these contributions.

![Repository and Projects](../../_images/repo-and-projects-v2.png)

Each project has a description of what it does.

## Pull requests dashboard

Within projects there are pull request dashboards. There you will find our Kanban board, which has columns representing the pull request delivery workflow. The columns title are self-explanatory and should represent the action required for the pull requests on that column.

![pull request Dashboard](../../_images/pr-dashboard.png)

## Pull request review process

The first step in the review process is to choose and self-assign a pull request from the dashboard. To help maintainers choose a pull request to review, there are several labels, the most important being **Priority**. We encourage our maintainers to choose pull requests with the highest priority from the **Pending Review** column.

Once you have chosen a pull request, there are some steps to be followed during the review process.

### Check Contributor License Agreement and builds

The first thing we encourage a maintainer to check is if the contributor has signed the Adobe Contributor License Agreement (CLA). Without this signature, we cannot accept the contribution. If the Contributor has not signed the CLA, that check will be red. Add a comment to the pull request requesting the contributor to sign the CLA.

Once the CLA has been signed, we can check the other builds. Those builds are run based on the contributors pull request and will let us know if the proposed changes are causing existing functionality to break or are not fully compliant with coding standards. If either the Heath Index or Semantic Version Checker fail, the pull request should be changed or the proposed changes will need approval by the Adobe team. More information can be found on our [Contributor Guide](../code-contributions/pull-request-tests.md).

![Check Contributor License Agreement and Builds](../../_images/builds-and-checks.png)

### Check the pull request target

It is important to ensure that pull requests are targeted to the correct branch. Currently, on the Magento2 repository, we are processing only those pull requests that are aimed at the 2.4-develop branch. Please make sure your pull request targets this branch.

![Check pull request Target](../../_images/pr-target-branch.png)

### Code review

The code review is one of the most important parts of the review process. Our community maintainers are responsible for reviewing the proposed changes and confirm they are following the [Technical Guidelines](https://developer.adobe.com/commerce/php/coding-standards/technical-guidelines/). It is important to evaluate if the proposed changes are backward compatible and follow the rules and best practice of our [Backward Compatible Development Guide](../code-contributions/backward-compatibility-policy.md). We count on our Maintainers judgement for other recommendations to increase contribution quality.

![Code review](../../_images/pr-code-review.png)

### Test coverage

As described on our [Definition of Done](../code-contributions/definition-of-done.md), all code changes must be covered by automated tests. It is part of the review process to:

-  Guarantee the changes are properly covered
-  Ensure the type of test used to cover the changes is appropriate
-  Add the appropriate label to the pull request

If the pull request is not covered by tests, the maintainer should advise the contributor on how to add proper test coverage.

![Test coverage](../../_images/test-coverage-labels.png)

### Approve changes

Once all the steps above are complete, the maintainer can approve the contributor's pull request. After approving the pull request, it will proceed through the delivery process and will be tested to guarantee quality.

![Approve Changes](../../_images/approve-changes.png)

## Other useful information

Besides the repositories, projects and code review process, there are other tools and processes that maintainers should know about.

### Related pull requests

Magento Open source is a complex platform and, some changes may require changes in multiple repositories. For example, if a contributor's pull request performs a change on a feature that is being used on the Adobe Commerce edition, it may require a parallel pull request in that repository.

In that case, builds need to run using the changes from both pull requests. To do so, use the 'related pull requests' feature. This feature is enabled by adding the link to the related pull request on the main pull request description using Github keywords. Details on this are in the [Contributor Guide](../code-contributions/pull-request-tests.md#related-pull-requests).

![Related pull requests](../../_images/related-prs.png)

### Maintainers Slack channel

We communicate with our community maintainers on our Slack channel. Once you are on-boarded as a maintainer, we will add you to this channel. You can discuss contributions and share your ideas or information with other maintainers.

![Maintainers Slack Channel](../../_images/slack-channel.png)

### Regular meetings

Currently, we have a meeting that we encourage our maintainers to attend and engage with the Community Engineering team:

-  [Community Contributions Triage](https://github.com/magento/magento2/wiki/Public-Triage-Meeting) – Scheduled once a week.
