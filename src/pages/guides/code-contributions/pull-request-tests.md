---
title: Pull Request Tests | Commerce Contributor
description: Use automated testing infrastructure to validate your contributions.
---

# Pull request tests

Automated testing infrastructure runs all required automated tests against code in pull requests. You can trigger automated tests by adding a comment to a pull request. Tests are represented both as pull request statuses and checks.

The following sections describe the different kinds of tests that are currently available.

## Semantic version checker

Semantic Version Checker is a test that compares the changed code against the mainline and detects levels of code changes. It shows a list of changes grouped by the class (level) of changes (MAJOR, MINOR, PATCH) with an explanation of the change (Class was removed, [public] Method implementation changed, [private] Property has been removed etc.) The allowed level is PATCH.
See [Backward Compatibility Development](backward-compatibility-policy.md) for more information.

## Functional tests

Functional Tests are PHPUnit-based tests that check functional behavior from the perspective of a user. They click buttons and links in a browser, fill and submit forms, verify what is displayed in the browser window like real users.

## Sample data tests

Sample Data Tests are functional tests that run on Magento Open Source with Sample Data included.

## Unit tests

Unit tests are PHPUnit-based (for PHP) and Jasmine-based (for JS) tests that check the behavior of single methods of Magento Open Source classes. The purpose is to validate that each unit of Magento Open Source performs as designed.

## Integration tests

Integration Tests are PHPUnit-based tests that check the behavior of a group of Magento Open Source components. They include three types of tests:

-  Standard Integration tests that check behavior on an installed instance.
-  Setup Integration tests that check behavior during the installation process.
-  Integration Integrity tests that check the consistency of an installed instance (for example, configuration files and database schemes).

## WebAPI tests

WebAPI Tests are functional tests that check the behavior of Web API endpoints. They send requests to endpoints of an installed instance and then check the response received and the state of the instance. Currently they include three kinds of tests:

-  SOAP Web API tests
-  REST Web API tests
-  GraphQL WEB API tests

## Static tests

Static Tests are a set of different checks that analyze every single file of the code base separately. Most of them analyze the whole code base, whereas some run only against the change set.

## Database compare

Database Compare is a test that compares the database schema and data between a freshly installed instance (from the pull request code) and another instance that was upgraded to the PR code from the latest minor release version.

## Component health index

Component Health Index is a test that analyses code quality and calculates a weighted health index (100 is great, lower is worse) for each Component (module). The index is calculated based on three groups of indicators:

-  [General code quality indicators (GCQI)](http://pdepend.org/documentation/software-metrics/index.html)
-  Magento-specific code quality indicators (MSCQ)
-  Legacy API usage indicators (LAI)

Additional information on Automated Testing can be found on the [project wiki](https://github.com/magento/magento2/wiki/Magento-Automated-Testing).

## Running tests for a pull request

Automated tests can be triggered manually with an appropriate comment:

-  `@magento run all tests`—run or re-run all required tests against the pull request changes
-  `@magento run <test-build(s)>`—run or re-run specific test build(s)

For example: `@magento run Unit Tests` or `@magento run Unit Tests,Integration Tests`

`<test-build(s)>` is a comma-separated list of build names. Build names can be copied from the Checks section.

## Test results

The build progress and test results are indicated by check runs under the pull request conversation.

Click on the "Details" link to see the results summary and links to corresponding Allure reports.

## Related pull requests

When a contribution requires changes to more than one repository merged simultaneously, such pull requests should be linked using the "Related Pull Requests" description section.

The related pull requests should be specified in the pull request description in the following format:

```text
### Related Pull Requests
https://github.com/<organization>/<repository>/pull/<pull request number>
<links to other realted PRs>
<!-- related pull request placeholder -->
```

When the tests are launched against a pull request that contains links to related pull request in the description, the related pull requests branches will be used as a code base for the tests instead of mainline.
Check runs will be updated for each of the related pull requests.

Related pull requests are delivered to Magento Open Source repositories simultaneously.
