---
title: Code Contributions | Commerce Contributor
description: Review all operational aspects of contributing to Commerce open-source projects.
---

# Code contributions

<InlineAlert variant="info" slots="text"/>

Connect with Magento Open Source Contributors and Maintainers to learn more about contributions and special projects. Join us in our [Slack workspace](https://opensource.magento.com/slack), in the [#general](https://magentocommeng.slack.com/archives/C4YS78WE6) channel, follow the [#announcements](https://magentocommeng.slack.com/archives/C7FA71S3V), and browse for more [channels](https://devdocs.magento.com/community/resources/resources.html#community-engineering-slack)!

## Contribute to Magento Open Source code

We use the [fork and pull](#forks-and-pull-requests) model to contribute to the Magento Open Source codebase. This method allows contributors to maintain their own copy of the forked codebase, which can be easily synced with the main copy. The forked repository is then used to submit a pull request to the base repository to merge a set of changes from the fork into the main repository.

Contributions can take the form of new components or features, changes to existing features, tests, documentation (such as developer guides, user guides, examples, or specifications), bug fixes, optimizations, or just good suggestions.

The Community Engineering Team reviews all issues and contributions submitted by the community developers. During the review we might require clarifications from the contributor. If there is no response from the contributor in two weeks (14 days) time, the issue might be closed.

When the Community Engineering Team works on reviewing the suggested changes, we will add a label to the issue to indicate certain information, like the status or who is working the issue. See [Labels](#labels-applied-by-the-community-engineering-team) to learn more.

<InlineAlert variant="info" slots="text"/>

Refer to the [Adobe Contributor Agreement](https://opensource.adobe.com/cla.html) for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms.

## Community backlog priority

In order to provide timely resolution on the most critical issues and pull requests, the Adobe team has implemented Severity/Priority concepts to our community driven projects. This approach makes open-source collaboration more transparent for all participants.
Having clear contribution rules in place helps to build clear expectations for Community Contributors and establish clear priorities for Community Maintainers and the ADobe team.

If you would like to contribute improvements or bug fixes and make sure it is valuable for the Community as well, we highly recommend that Community Contributors to take issues from the backlog based on **Priority**.
Adobe and Community Maintainers process contributions based on the issue/pull requests priority starting from P0, P1 to P4.

<InlineAlert variant="info" slots="text"/>

**Priority** signifies how important or detrimental a defect is. The defect priority status is set by Product Managers. Priority also helps to determine the scheduling of the fix: Higher priority bugs will be fixed and merged first. It is a reflection on how bad the bug is for the system and also for business or marketing requirements.

<InlineAlert variant="info" slots="text"/>

**Severity** is a measure of how ‘bad’ the bug is and how much disruption it causes, without regard to remaining work or the release schedule.

### Priority and severity descriptions

| Severity | Description |
| -------- | ------------- |
| Severity: S0 | -  Affects critical data or functionality and leaves users with no workaround.<br />-  Significant catastrophic impact.<br />-  A problem that is blocking the ability to work. An immediate fix is needed.<br /> |
| Severity: S1 | -  Affects critical data or functionality and forces users to employ a workaround.<br />-  Impact to the key product qualities.<br />-  An immediate fix is needed.<br /> |
| Severity: S2 | -  Affects non-critical data or functionality and forces users to employ a workaround.<br />-  Impact to the product qualities that makes the product more usable.<br />-  Major restrictions or short-term circumventions are required until a fix is available. A fix is important.<br /> |
| Severity: S3 | -  Affects non-critical data or functionality and does not force users to employ a workaround.<br />-  Problem has moderate impact requiring some restrictions. The fix is in an area that is not critical.<br /> |
| Severity: S4 | -  A minor problem, annoyance, or technical issue with minimal impact.<br />-  Impact that does not prevent or hinder functionality.<br />-  Affects aesthetics, professional look and feel, “quality” or “usability”.<br /> |

| Priority | Description |
| ------------- | ------------- |
| Priority: P0 | -  The defect needs to be fixed right now, everything else can wait.<br /> - This generally occurs in cases when the entire functionality is blocked. |
| Priority: P1 | -  Needs to be fixed before any other issues.<br />-  Once P0 defects have been fixed, a defect having this priority is the next candidate for fixing. |
| Priority: P2 | -  Should be fixed as early as possible<br />-  A defect with this priority could have functionality issues which are not to expectations. |
| Priority: P3 | -  May be fixed according to the position in the backlog.|
| Priority: P4 | -  No current plan to fix. Fixing can be deferred as a logical part of more important work.|

### Who and how can define severity and priority?

#### Priority

The Adobe team defines priorities during regular triage review meetings, based on the community assessment for severity.

#### Severity

-  Community Maintainers are allowed to set Severity labels during the initial issue triage according to the [Issue Processing Workflow](https://github.com/magento/magento2/wiki/GitHub-Issues-Processing-Workflow).
-  The Adobe team can set or edit severity and priority based on our internal triage process and information provided in the initial community triage.
-  Issue reporters can provide their own evaluation for severity by selecting a checkbox in the Issue description.

The following list consists of questions you can ask to help determine the proper severity:

-  Does the system stop working after defect occurs?
-  Can the system recover from the defect?
-  If the defect is recoverable, does the system require external effort to recover from the defect? (i.e. it will not recover on its own)
-  Does the defect affect other related sections (or the entire system)?
-  Can I repeat the defect in some other system having same configuration (O/S, Browsers) as that of the system where I found the defect?
-  Does the defect show up in other configurations?
-  Does the defect affect all users/roles? (i.e. Only a particular category of users will face the defect)
-  Does the defect occurs frequently?
-  Are the inputs to make the defect easy to reproduce? (i.e. special data is not required)

The number of 'Yes' answers should help you to determine the severity.

### Pull request risk assessment

The 'Risk:' label highlights the risk that the suggested changes may bring to the platform.
It helps maintainers decide:

-  to which version the pull requests should be delivered
-  which reviewers should see it
-  whether a request should be approved or not

| Risk | Description |
| ------------- | ------------- |
| High | A pull request that makes changes on the framework or changes that will affect multiple areas. |
| Medium | A pull request that makes changes which may affect multiple areas or makes considerable changes on a specific area. |
| Low | A pull request that will probably not affect other areas. |

## GitHub and two-factor authentication

Adobe **requires all Partners** who contribute code to enable 2FA on their GitHub accounts. You can use a mobile device or 2FA application for added protection. See [Configuring two-factor authentication](https://help.github.com/en/articles/configuring-two-factor-authentication) in the GitHub help.

We also recommend creating a personal access token for your account to use when interacting with GitHub in scripts and on the command line. See [Creating a personal access token for the command line](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) in the GitHub help.

## Questions or enhancement requests?

We capture code-related issues in the [GitHub repo](https://github.com/magento/magento2) and documentation-related issues in the [DevDocs repo](https://github.com/magento/devdocs). If you have questions about functionality or processes, we recommend posting them to a question-and-answer site, such as [Stack Exchange](https://magento.stackexchange.com/) and the [Community Forums](https://community.magento.com/), where Magento Open Source community members can quickly provide recommendations and advice.

Submit feature requests or enhancement suggestions to the [Feature Requests and Improvements forum](https://community.magento.com/t5/Magento-2-Feature-Requests-and/idb-p/feature-requests). For details about how requests are managed, see [Improvements to GitHub Management](https://community.magento.com/t5/News-Announcements/Improvements-to-GitHub-Management/m-p/44572#M96).

## Accepted pull requests and ported code

<InlineAlert variant="help" slots="text"/>

**v2.4 Contribution Notice:**
Adobe is focusing development efforts on v2.4, so we are no longer accepting pull requests to the v2.3, v2.2, v2.1, and v2.0 release lines.

Review the following supported and accepted pull request rules. We defined these rules to simplify and accelerate your submissions, ensure code consistency, manage current and backlog tasks, and so on.

|     |                 Fix for Existing Issue                 |                     Test Coverage                      |                      Refactoring                       |                      New Feature                       |                      Code Cleanup                      |
|:----|:------------------------------------------------------:|:------------------------------------------------------:|:------------------------------------------------------:|:------------------------------------------------------:|:------------------------------------------------------:|
| 2.1 |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |
| 2.2 |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |
| 2.3 |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |    ![No](../../_images/red-x.png)     |
| 2.4 | ![Yes](../../_images/green-check.png) | ![Yes](../../_images/green-check.png) | ![Yes](../../_images/green-check.png) | ![Yes](../../_images/green-check.png) | ![Yes](../../_images/green-check.png) |

## Contribution requirements

1. Contributions must adhere to the [coding standards](https://developer.adobe.com/commerce/php/coding-standards/).
1. Refer to the [Definition of Done](definition-of-done.md). We use these guidelines internally to ensure that we deliver well-tested, well-documented, and solid code. We encourage you to use this as well!
1. Pull requests (PRs) must be accompanied by a meaningful description of their purpose. Comprehensive descriptions increase the chances that a pull request is merged quickly and without additional clarification requests.
1. Commits must be accompanied by meaningful commit messages.
1. PRs that include bug fixes must be accompanied by a step-by-step description of how to reproduce the bug.
1. PRs that include new logic or new features must be submitted along with:
   -  Unit/integration test coverage (we will be releasing more information about writing test coverage in the near future).
   -  Follow the [DevDocs contribution work flow and guidelines](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md) to submit proposed documentation updates to the [DevDocs Github repository](https://github.com/magento/devdocs).
1. For large features or changes, [open an issue](https://github.com/magento/magento2/issues) to discuss your proposal first.  Notifying us in advance can prevent duplicate or unnecessary effort, and also offers an opportunity to get additional background information and help from other contributors.
1. To report a bug, [open an issue](https://github.com/magento/magento2/issues) and follow the [Issue reporting guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines).
1. Verify that all automated tests on your pull request pass successfully.

## Forks and pull requests

For complete information about contributing to Magento Open Source projects, see the [Beginner Guides](https://github.com/magento/magento2/wiki/Getting-Started) on the GitHub repository. These guides help you:

-  Select an issue to work on and self-assign
-  Fork a repository
-  Create a branch
-  Fix/implement the functionality
-  Cover the changes with tests
-  Open a pull request
-  Launch tests and ensure they are green (see more details on [pull request tests](pull-request-tests.md))

## Squash commits

Sometimes your pull request may have more than one commit (the main commit, then changes to it after review, etc). A good practice is to deliver commits that bring finalized, functional parts/bugfixes. In that case, all intermediate commits like "static test fix", "typo fix", "minor refactoring" should be squashed into a single commit. This helps keep a clean history and makes the repo easier to read. There is no requirement to have only one commit per PR. However, the intermediate commits in most cases bring no value into the commits history, which is why it is a good to keep the history clean and useful.

## Contributor assistant

The Contributor Assistant is a bot that runs on all repositories in the `magento` GitHub organization. It helps automate issue and pull request workflows by using commands entered as comments.

### Assigning an issue

If you would like to have an issue assigned to you, add a comment and the contribution assistant will do the work.

**Command:** To assign as issue to your GitHub account, add the following command as a comment to the issue:

```text
@magento I am working on this
```

This command has several variations:

```text
@magento I am working on this
@magento I am working on it
@magento I'm working on this
@magento I'm working on it
```

**Actions:** The following actions occur:

-  If the user is a member of the Magento GitHub organization, the user will be assigned to the ticket automatically.
-  If the user is not yet a member of the Magento GitHub organization, an invitation will be sent to the user. Check your email or accept the [Github invitation](https://github.com/orgs/magento/invitation). Once the user has joined the Magento GitHub organization, the user should repeat the command to get assigned to the ticket.

**Permissions:**

-  All permissions granted for all users.

Currently, the Contributor Assistant automatically deploys a test instance based on a contributor's pull request, or, it provides a vanilla Magento Open Source instance on the `magento/magento2` repository. This is used to test pull requests or reported issues.

-  [Deploy vanilla Magento Open Source instance](#deploy-vanilla-magento-open-source-instance)
-  [Deploy instance based on PR changes](#deploy-instance-based-on-pr-changes)
-  [Customize deployed instances](#customize-deployed-instances)

### Deploy vanilla Magento Open Source instance

When you want to verify an issue or pull request, use the `instance` command to generate an instance. This is a clean installation of a specified version tag or branch of a specified release line.

**Command:** To deploy an instance, add the following command as a comment to the GitHub pull request or issue:

```text
@magento give me {$version} instance
```

Replace `{$version}` with the version tag or branch. The following values are supported: the version tag for the latest release and `2.4-develop` for the development branch.

```text
@magento give me 2.4.3 instance
```

**Actions:** The following actions complete the command:

-  If the instance does not exist, it is deployed. Deployment takes approximately 2 minutes.
-  If the instance exists, a fresh instance is redeployed.
-  By default, instances have a lifetime of 3 hours. All deployments are then terminated.

**Admin access:**

Admins access is shared via comment on GitHub.

**Permissions:**

-  All permissions granted for all users.

### Deploy instance based on PR changes

To verify and test changes within a pull request, enter a command to generate a Magento Open Source instance using code based on the PR.

**Command:** To deploy, [Community Maintainers](https://github.com/magento/magento2/wiki/Community-Maintainers), an Adobe EngCom Team member, or a contributor under the existing Pull Request enters the following command as a comment to the pull request:

```text
@magento give me test instance
```

**Actions:**

-  It deploys a new instance based on Pull Request changes.
-  Deployment takes approximately 2 minutes.
-  By default, instances have a lifetime of 3 hours. All deployments are then terminated.

**Admin access:**

Admins access will be shared via comment on GitHub.

**Permissions:**

-  [Community Maintainers](https://github.com/magento/magento2/wiki/Community-Maintainers)
-  Adobe EngCom Team
-  [Contributor](../contributors/)

### Customize deployed instances

In some cases a custom environment is required to test an issue or a pull request. You can create a custom environment by appending custom configuration settings to the PR comment to [Deploy a vanilla Magento Open Source instance](#deploy-vanilla-magento-open-source-instance) or [Deploy an instance based on PR changes](#deploy-instance-based-on-pr-changes).

#### Specify the edition

Append the following text to your PR comment to specify the edition to use when you [Deploy a vanilla Magento Open Source instance](#deploy-vanilla-magento-open-source-instance) or [Deploy an instance based on PR changes](#deploy-instance-based-on-pr-changes).

```text
with edition {$edition}
```

Replace `{$edition}` with either of the following values:

-  `ee` deploys the Adobe Commerce edition
-  `b2b` deploys Adobe Commerce with B2B modules.

For example, append the following text to the PR comment to deploy a Adobe Commerce instance with B2B modules:

```text
with edition b2b
```

#### Add extensions

Append the following text to your PR comment to specify extensions to add to an instance when you [Deploy a vanilla Magento Open Source instance](#deploy-vanilla-magento-open-source-instance) or [Deploy an instance based on PR changes](#deploy-instance-based-on-pr-changes).

```text
with extensions {$extensionRepo}
```

Replace `{$extensionRepo}` with one or more extension repositories to include when compiling your instance.  If you specify multiple repositories, use a comma after each repository. You can specify a specific branch in a repository using the pattern: `org/repo-name:branch-name`. For example:

```text
with extensions magento/security-package:1.0-develop, magento/security-package-ee
```

#### Remove extensions

Append the following text to your PR comment to specify extensions that you want to remove from the instance when you [Deploy a vanilla Magento Open Source instance](#deploy-vanilla-magento-open-source-instance) or [Deploy an instance based on PR changes](#deploy-instance-based-on-pr-changes).

```text
without extensions {$extensionRepo}
```

Replace `{$extensionRepo}` with one or more extension repositories to remove before compiling your instance. If you specify multiple repositories, use a comma after each repository. For example:

```text
without extensions magento/adobe-stock-integration
```

### Import source code to specific repository

The import command provides the ability to copy a contributor's code or pull request into an internal fork.  The internal team can then proceed with additional fixes or delivery.

**Command:** To import code or a pull request, a member of the Adobe team controlling the pull request enters the following command:

```text
@magento import {code|pr} to {organizationName}/{repositoryName}
```

**Usage Examples:**

-  To import the code only use

```text
@magento import code to magento-team/magento2
@magento import code to https://github.com/magento-team/magento2
```

-  To import the pull request use

```text
@magento import pr to magento-team/magento2
@magento import pull request to magento-team/magento2
@magento import pr to https://github.com/magento-team/magento2
@magento import pull request to https://github.com/magento-team/magento2
```

**Actions:**

-  Code: A branch with a copy of the contributor's source code is created within the target repository.
-  PR: A copy of the pull request is created within the target repository.

**Permissions:**

-  Adobe team

## Report an issue

To maintain an effective bug fix workflow, we ask reporters to follow some simple guidelines.

Before creating an issue, do the following:

-  Check the [Developer Documentation](https://developer.adobe.com/commerce) and [User Guide](https://docs.magento.com/user-guide/getting-started.html) to make sure the behavior you are reporting is really a bug, not a feature.
-  Check the [existing issues](https://github.com/magento/magento2/issues) to make sure you are not duplicating somebody’s work.
-  Ensure that information you are reporting is a technical issue. Refer to the [Community Forums](https://community.magento.com/) or [Magento Stack Exchange](http://magento.stackexchange.com/) for technical questions, feature requests, etc.
-  Verify that the issue you are reporting does not relate to Adobe Commerce. GitHub is intended for Magento Open Source users to report on issues related to Open Source only. You can report Commerce-related issues one of two ways:

   -  Use the Support portal associated with your account
   -  If you are a Partner reporting on behalf of a merchant, use the Partner portal

-  Check if the issue exists on the `2.4-develop` branch with a clean installation. We only accept pull requests for the `2.4-develop` branch. If the issue is not reproducible on the `2.4-develop` branch, it will be closed.

If you are sure that the problem you are experiencing is a bug, file a new issue in GitHub following the recommendations below.

### Issue template

The [Issue Reporting Template](https://github.com/magento/magento2/blob/2.4-develop/.github/ISSUE_TEMPLATE.md) is a default placeholder for every new issue. Follow the sections carefully, as it ensures it will pass `Gate 1` quickly. More information on gates is available in [Magento Issue Gates](https://github.com/magento/magento2/wiki/Magento-Issue-Gates).

<InlineAlert variant="info" slots="text"/>

Note that a higher level of detail in the report increases the chance that someone will be able to reproduce the issue.

### Title

The title is a vital part of the bug report. A well written title should contain a clear, brief explanation of the issue, emphasizing the most important points.

A good example:

"Unable to place order with Virtual product and PayPal."

An unclear example:

"Can't checkout."

### Issue description

#### Preconditions

Stating preconditions is very important. Provide information on:

-  System configuration settings you have changed
-  Detailed information on entities created (Products, Customers, etc)
-  Magento Open Source version
-  Anything else that would help a developer reproduce the bug

Example:

1. Magento Open Source 2.0.0 without sample data is installed.
1. PayPal payment method is set up.
1. Test category is set up.
1. Virtual Product is created and assigned to the Test Category.

#### Steps to reproduce

Good steps to reproduce are vital to a good bug report. The issue is more likely to be fixed if it can be reproduced.

Precisely describe each step required to reproduce the issue. Try to include as much information as possible; even minor details could be crucial.

Example:

1. Navigate to storefront as a guest.
1. Open Test Category.
1. Click "Add to Cart" on the Virtual Product.
1. Open mini shopping cart and click "Proceed to Checkout".

#### Actual and expected result

To ensure that everybody involved in the fix understands the issue, precisely describe the result you expected to get and the result you actually observed after performing the steps.

Expected result:

Order is placed successfully, customer is redirected to the success page.

Actual result:

"Place order" button is not visible, order cannot be placed.

#### Additional information

Additional information is often requested when the bug report is processed. You can save time by providing both Magento Open Source and browser logs, screenshots, repository branch and HEAD commit you checked out to install Magento Open Source and any other artifacts related to the issue.

Once the issue is created, it must pass through a series of [Magento Issue Gates](https://github.com/magento/magento2/wiki/Magento-Issue-Gates).

## Help triage issues  [![](https://www.codetriage.com/magento/magento2/badges/users.svg)](https://www.codetriage.com/magento/magento2)

In addition to contributing code, you can help triage issues. This can include reproducing bug reports or asking for vital information, such as affected versions or instructions to reproduce bugs.  If you want to triage issues, you can begin by subscribing to [Magento on CodeTriage](https://www.codetriage.com/magento/magento2).

## Labels applied by the Community Engineering team

We apply labels to public pull requests and issues to help other participants retrieve additional information about current progress, component assignments, Magento Open Source release lines, and much more. The following information details global labels used in Magento Open Source repositories and across Community Engineering contributions.

### Release Lines

Release line labels indicate the specific release lines affected by the issue or PR. For example, if working on a fix for 2.4.0 you would apply the Release Line: 2.4. This effectively includes all releases in this line.

-  `Release Line: 2.3`
-  `Release Line: 2.4`

### Progress

Progress labels indicate the Pull Request status on each review stage:

-  `Progress: needs update` - The Community Engineering Team needs additional information from the reporter to properly prioritize and process the pull request. <!-- needs update -->
-  `Progress: on hold` - The pull request is on hold due and will be further reviewed to accept or reject.
-  `Progress: accept` - The pull request has been accepted and will be merged into mainline code. <!-- accept -->
-  `Progress: reject` - The pull request has been rejected and will not be merged into mainline code. Possible reasons can include but are not limited to: issue has already been fixed in another code contribution, or there is an issue with the code contribution. <!-- reject -->

### Partners

All partners Pull Requests should be marked with label `partners-contribution`. Additionally, add a partner label for PRs submitted by specific Partners. Use the format: `Partner: <PartnerName>`. The following are Partner examples:

Example labels:

-  `partners-contribution`
-  `Partner: Atwix`
-  `Partner: Comwrap`
-  `Partner: Interactiv4`
-  `Partner: Wagento`

### Components

Component labels indicate the components affected by the Pull Request. To learn more about available components and assigned architects, see [Components Assignment](https://github.com/magento/architecture/wiki/Component-Assignments).

Example labels:

-  `Component: Catalog`
-  `Component: Report`
-  `Component: Checkout`

For edge cases, `Component: Other` and `Component: Multiple` may be used.

### Events

Event labels mark recommended issues and submitted PRs for a specific event. Events may include Contribution Days, Hackathons, Imagine, special events like Smashtoberfest, and others. Contributors and Maintainers can easily locate code when attending those events. Some events may also have a [Community Engineering Slack](https://magentocommeng.slack.com) channel using the same label.

Example labels:

-  `Event: mm18in`
-  `Event: mm17es`
-  `Event: mlau18`

### General

General labels include a variety of tasks and definitions for pull requests and issues.

-  `good first issue` - Indicates a good issue for first-time contributors.
-  `help wanted` - Indicates the creator or author needs help with a decision, advice for resolving, and so on.
-  `triage wanted` - Indicates the issues are under triage. See this information to learn more about the [Triage Wanted program](https://github.com/magento/magento2/wiki/Triage-Wanted).

### Issue resolution status

Labels applied to issues through verification and completion. For details on the process, see [GitHub Issues Processing Workflow](https://github.com/magento/magento2/wiki/GitHub-Issues-Processing-Workflow).

-  `Issue: Format is not valid` - Gate 1 failed. Automatic verification by the Automated Contributor Assistant failed and the issue needs updates. The [format](https://github.com/magento/magento2/tree/2.4/.github/ISSUE_TEMPLATE) of the issue description and minimum required information is not provided: Preconditions, Steps to Reproduce, Actual Result, Expected Result. Previous label `G1 Failed`.
-  `Issue: Format is valid` - Gate 1 passed. Automatic verification by the Automated Contributor Assistant passed for all issue content. Previous label `G1 Passed`.
-  `Issue: Clear Description` - Gate 2 passed. The Community Engineering Team has confirmed that this issue contains the minimum required information to reproduce. Previous label `G2 Passed`.
-  `Issue: Cannot Reproduce` - Gate 3 failed. The issue could not be reproduced or validated. Previous label `Cannot Reproduce`.
-  `Issue: Confirmed` - Gate 3 passed. Manual verification of the issue description and reproduction steps was confirmed. Previous label `G3 Passed`.
-  `Issue: Ready for Work` - Gate 4 passed. The issue is acknowledged and added to the backlog for open development. Previous label `acknowledged`.
-  `Reproduced on 2.3.x` - The Community Engineering Team reproduced the issue on latest 2.3.x release.
-  `Reproduced on 2.4.x` - The Community Engineering Team reproduced the issue on latest 2.4.x release.
-  `Fixed in 2.3.x` - The issue has been fixed in one of the 2.3.x releases.
-  `Fixed in 2.4.x` - The issue has been fixed in one of the 2.4.x releases or in 2.4-develop branch and will be available with the upcoming patch release.
-  `non-issue` - A described behavior in the issue description is valid and shouldn't be changed in the code base.

### DevDocs

All [contributions to DevDocs](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md) receive the following labels:

-  `New topic`- New topic submissions for content that has never existed on DevDocs such as tutorials, references, instructions, and so on
-  `Major update` - Significant original updates to existing content
-  `Technical` - Updates to the code or processes that alter the technical content of the document, such as code snippets, reference documentation, parameter names and values, and other relevant content
-  `Editorial` - Fixes for typos, grammatical inconsistencies, or minor rewrites to correct inaccuracies
