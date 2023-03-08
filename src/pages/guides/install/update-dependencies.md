---
title: Update Installation Dependencies | Commerce Contributor
description: Use Composer to manage you project dependencies.
---

# Update installation dependencies

We use [Composer](http://getcomposer.org) to resolve dependencies before you install the Magento software and extensions.

[Composer](https://glossary.magento.com/composer) is a separate application that manages [PHP](https://glossary.magento.com/php) dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:

1. [Install the Composer software](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/dev_install.html).
1. [Create the file system owner](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html) so Composer can write files to the web server docroot as the correct user.
1. [Update dependencies](#update-dependencies) in your local root project directory (for example, `/var/www/magento2/`).

The Magento root directory is a subdirectory of your web server's docroot.

If the following error displays, see [troubleshooting](https://support.magento.com/hc/en-us/articles/360033818091):

```terminal
file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory
```

For you to be able to run the Magento application, make sure you perform all tasks as a user with privileges to write to the web server docroot. One way to do this is to log in as or switch to the [switch to the file system owner](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html).

## Update dependencies

Update installation dependencies as follows:

1. Log in to your Magento server as the [file system owner](https://glossary.magento.com/magento-file-system-owner) or [switch to that user](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html).
1. Change to the Magento installation directory and run `composer install`. Examples:

   CentOS:

   ```bash
   cd /var/www/html/magento2 && composer install
   ```

   Ubuntu:

   ```bash
   cd /var/www/magento2 && composer install
   ```

   This command updates package dependencies and can take a few minutes to complete.

The following error might display:

```terminal
[Composer\Downloader\TransportException]
The "https://repo.magento.com/archives/magento/composer/magento-composer-1.0.2.0.zip" file could not be downloaded (HTTP/1.1 404 Not Found)
```

If so, create [`auth.json`](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/dev_install.html) in the file system owner's `<home>/.composer` directory and run `composer install` again.

## Set file ownership and permissions

You must set read and write permissions for the web server group before you install Adobe Commerce or Magento Open Source. It is necessary so that the command line can write to the file system. See [file ownership and permissions](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html).

<InlineAlert variant="success" slots="text"/>

Hooray! You've completed the contributor install. Need more advanced help? Check out our [Advanced install](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli.html) guide.
