---
title: Contributor Install | Commerce Contributor
description: Install Magento Open Source using the git-based meethod if you plan on contributing to the source code. 
---

# Contributor install

If you are a code or documentation contributor, this install guide is for you! Use Composer to install Magento, then switch over to a released version and update any installation dependencies.

<InlineAlert variant="success" slots="text"/>

Are you a non-contributor? Check out our [Quick start install](https://devdocs.magento.com/guides/v2.4/install-gde/composer.html) guide. Do you have more advanced install problems to solve? Check out our [Advanced install](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli.html) guide.

## Intended audience

The audience for this topic is anyone who contributes to the Magento Open Source codebase.
You should be highly technical, understand Composer and Git commands, and be able to upgrade the Magento system software and extensions using those commands. If that isn't you, go back and [choose another starting point](https://devdocs.magento.com/guides/v2.4/install-gde/bk-install-guide.html).

<InlineAlert variant="warning" slots="text"/>

If you clone the Magento 2 GitHub repository, you _cannot_ use the Magento software in a production environment.
You cannot have a live store that accepts orders and so on.

## Prerequisites

Before you continue, make sure you've done all of the following:

-  Set up a server that meets our [system requirements](https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html)
-  Created the [file system owner](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html)

We use [Composer](https://getcomposer.org/) to manage Magento components and their dependencies. Using Composer to get the Magento software metapackage provides the following advantages:

-  Reuse third-party libraries without bundling them with source code
-  Reduce extension conflicts and compatibility issues by using a component-based architecture with robust dependency management
-  Adhere to [PHP-Framework Interoperability Group (FIG)](https://www.php-fig.org/) standards
-  Repackage Magento Open Source with other components
-  Use the Magento software in a production environment

<InlineAlert variant="info" slots="text"/>

You can also [download](https://magento.com/tech-resources/download) an archive file for a specific version of Magento in either ZIP or TAR format. Installing Magento from an archive lacks the advantages of using Composer. Contributing developers should use the [git-based](clone-repository.md) installation method.
