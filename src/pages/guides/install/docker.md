---
title: Use Docker | Commerce Contributor
description: Recommendations on how to use Magento in Docker containers.
---

# Use Docker

As well as using the native installation path to set up a system with all the requirements to run Adobe Commerce or Magento Open Source, you can also use Docker, either with a custom project or using an existing solution. There are several advantages in using Docker instead of a native set up:

- It is generally easier to set up a Docker-based development environment than a native one.

- Reproducing the same environment in another machine is just a matter of copying a `Dockerfile` and/or `docker-compose.yml` files to it and building new containers from them.

- It allows to replicate the same set up you have in production inside a container. 

- Also, you can have different containers with different configurations for extensive testing.

Two are the scenarios in which a Docker-based environment is most useful:

- For demos, Commerce Cloud compatibility testing and basic development we recommend [Magento Cloud Docker](https://github.com/magento/magento-cloud-docker). You can have more information in [Adobe Commerce Devdocs](https://devdocs.magento.com/cloud/docker/docker-development.html).

- For development, aside Magento Cloud Docker, there are several community projects aimed to provide a Docker environment suitable for coding, like [Docker Magento]( https://github.com/markshust/docker-magento) and [Magento2Docker](https://github.com/yvoronoy/magento2docker). Please refer to each project's documentation for more details.

