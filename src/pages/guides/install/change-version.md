---
title: Change to a Released Version | Commerce Contributor
description: Learn how to switch to a released version of Magento Open Source after installing from a development branch.
---

# Change to a released version

This topic discusses how a contributing developer can change versions of Magento Open Source after cloning the `develop` branch. This might be necessary to perform some tasks that require a specific version other than `develop`.

The `develop` branch is the default branch, which means you get it by default when you clone the Magento Open Source GitHub repository. For some tasks, such as data migration from version 1.x to 2.x, you must switch to a [release tag](https://github.com/magento/magento2/tags).

You have the following options:

*  *(Easier)*. If you have not done any customizations, you should uninstall Magento Open Source and reinstall it with the released version. Uninstalling not only drops the database tables, it also clears the `var` directory, enabling you to start over with no issues.

   For more information, see [Change versions by uninstalling the software](#change-versions-by-uninstalling-the-software)

*  If you have done customizations and do not want to lose them, back up the system, switch to the released branch, and install in a new database instance.

   For more information, see [Change versions by installing the software in a new database instance](#change-versions-by-installing-the-software-in-a-new-database-instance)

   You can migrate your customizations (both in the file system and in the database) from the backups you made or directly using database and file system tools.

## Change versions by uninstalling the software

To change versions after cloning:

1. Log in to your web server as, or switch to, [the file system owner](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html).
1. Use the following command to uninstall the Magento Open Source software:

   ```bash
   php <your Magento clone dir>/bin/magento setup:uninstall
   ```

1. Either remove your old Magento clone directory or [update the software](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/dev_update-magento.html).
1. If you have not already done so, clone the Magento 2 GitHub repository as follows:

   ```bash
   git clone git@github.com:magento/magento2.git
   ```

1. Change to [release tag](https://github.com/magento/magento2/tags) as follows:

   ```bash
   git checkout tags/<tag name>  [-b <branch name>]
   ```

   For example, to check out the 2.2.0 release tag in a new branch named `2.2.0`, enter

   ```bash
   git checkout tags/2.2.0 -b 2.2.0
   ```

1. Install the Magento Open Source software using the [command line](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-install.html).

## Change versions by installing the software in a new database instance

To change versions after cloning:

1. Log in to your Magento server as, or switch to, [the file system owner](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html).
1. Create a [new database instance](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/mysql.html#instgde-prereq-mysql-config) for your installation.
1. [Back up](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-backup.html#instgde-cli-uninst-back) the Magento file system, database, and media files:

   ```bash
   php <magento_root>/bin/magento setup:backup --code --media --db
   ```

1. Change to [release tag](https://github.com/magento/magento2/tags) as follows:

   ```bash
   git checkout tags/<tag name>  [-b <branch name>]
   ```

   For example, to check out the 2.2.0 release tag in a new branch named `2.2.0`, enter

   ```bash
   git checkout tags/2.2.0 -b 2.2.0
   ```

1. Manually clear Magento `var` directories:

   ```bash
   rm -rf <magento_root>/var/cache/* <magento_root>/var/page_cache/* <magento_root>/generated/code/*
   ```

1. Install the Magento software in your new database instance.

   You must install using the [command line](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-install.html).
