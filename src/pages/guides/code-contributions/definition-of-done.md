---
title: Definition of Done | Commerce Contributor
description: Ensure that your contributions meet the criteria of the Commerce definition of done.
---

# Definition of done

The "Definition of Done" (DoD) is a collective term for a set of acceptance criteria that is applied to any changes in the product code base.
The requirements that result from our DoD are applied by default to all Magento-owned repositories.

Internally, the Adobe development teams follow the DoD to ensure that all work meets consistent release criteria.
We encourage our community contributors to also follow the definition of done.

At a high level, the criteria defined in our "definition of done" revolve around the principle of writing clean code that is reviewed and includes automated tests and solid documentation along with the code.

## Definition of Done

The basic checklist used to evaluate if the DoD has been met is:

-  All changes must be approved by reviewer.
-  All changes must be covered by automated tests if possible.
-  All functional changes should be documented.
-  All backward incompatible changes should be approved and covered by static tests if possible. Static tests should be delivered to the [magento-coding-standard][5] repository.
-  TCO impact should be defined for all changes.

The following sections provide additional details about each of these criteria:

## Review

A task, when complete by the author, should be reviewed by a maintainer through a formal code review.

The reviewer should check whether the task meets the original acceptance criteria, verify that there are no code defects and that all points of this DoD are met.

## Tests

To meet the DoD, all changes to Adobe Commerce projects should be covered by automated tests.

Details on different types of automated tests can be found in [Automated tests](automated-tests.md).

## Documentation

All changes, additions, and extensions to the product should be documented by the author.
The documentation should provide an overview of the change, and information about standard use cases, audience, and procedural instructions for implementing the feature.

Documentation for the submitted code should be submitted as a pull request to the official DevDocs [repository](https://github.com/magento/devdocs).

When submitting either code or documentation, a brief summary of the work should be included in the commit message.

Additionally, the code itself should follow our [DocBlock standard](https://devdocs.magento.com/guides/v2.4/coding-standards/docblock-standard-general.html) and contain high-quality comments and descriptions for all classes and methods.

For documenting backward-incompatible changes, see the [Backward compatibility policy](backward-compatibility-policy.md).

## Backward Compatibility

All backward incompatible changes should be approved and covered by static tests.

The details on backward compatibility criteria included in the DoD can be found in [DoD - Backward Compatibility](definition-of-done-backward-compatibility.md)

## TCO Analysis

All functional changes should analyzed for the impact on merchant total cost of ownership (TCO) and the results of the analysis should be added to the issue or pull request description to meet the DoD.

The details on TCO analysis required to meet the DoD can be found in [Total cost of ownership analysis](total-cost-of-ownership-analysis.md).

The work cannot be considered as complete unless all the criteria are verified.
