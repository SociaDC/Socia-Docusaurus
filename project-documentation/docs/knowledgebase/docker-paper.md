---
sidebar_position: 3
description: Docker Guide
author: Philipp Cserich
---

# Docker usage & Best Practices


## Introduction

---

This Docker guide is written for Socia/Phobos developers only, all usages or publications outside of project reach are not allowed and therefore this document restrains in terms restricted access.


## What is Docker
If you are already familiar with Virtual Machines you will understand the concept of docker out of the box.

Docker is basicly a lightweight VM, in normal language that means that docker provides a way to encapsulate your software into a so called container.
Containers are Simulating the OS Layer of your PC without creating a virtual kernel. (Still uses existing ressources)
This is especially usefull when thinking about reproducability.
The saying "It works on my PC" will never be an excuse from now on, because once containerized a Software will always be able to maintain state unable of its undelying system.

*(Ignore the fact that cost expensive containers will obviously not run on a shitty PC)*

## How to use Docker / Useful commands and Installation

Docker as a system is linux native. That requires Windows PCs to use the WSL.
Our most powerful tools will be **$ docker run** and **$ docker build**

Installing it can be done by using the official enterprise Software **Docker Desktop** or for any Open source lowers, **Podman Desktop** could be worth a try.

## Dockerfile & Images

A Dockerfile is Dockers soul. It creates one place where all necessary build information is stored.
These infos will get used to build your application in every way you could possibly imagine.
Want an NGINX got it! Or just a node Server? No Problem!

This singular information dump is used by the docker daemon to create a technical blueprint that represents all requirements.
The so called image. Therefore every Application that needs to run in a containerized environment needs an image.
There are many ways to obtain such images. One would be to create your own with a custom dockerfile as explained before.
But you can also choose one of the many prebuilt docker images from dockerhub.
Dockerhub represents a marketplace for docker images, in all forms and colors.
If you want to check it out the link will be provided below.

https://hub.docker.com/

The exact workflow for every containerization can be displayed as follows.

Dockerfile -> Docker image -> Docker Container

### Dockerfile Structure

```yaml
FROM image:tag

RUN sh command xy

ENTRYPOINT ["",""] #entrypoint for built image / Not Changable

COPY . . #From To

#Makes the specified ports accessable to the containers outside (Localhost)
EXPOSE 80/tcp
EXPOSE 80/udp
```

#### Single Stage Build
Normally you will just include all necessary steps to install the env. as needed in one stage.
This is the easier route of creating images, because of its straight nature.
The build normally also includes all unnecessary build / installation step files such as node module folders or java dependency packages.

#### Multi Stage Build

Appart from building a docker env completely in one single session you can create something called a multi stage build dockerfile.
This version of a dockerfile uses the copy feature to create necessary ressources over one session and execute them on the other.
Instead of maintaining unnecessary ressources, this approach lets you aboard all unnecessary file mud that gets created when installing or creating your executable software.

One example could be to build a maven application (Socia) with such approach.

```yaml
FROM openjdk:22 as builder
LABEL maintainer#"Philipp Cserich, Thomas Boigner"
ARG JAR_FILE#target/*.jar
COPY ${JAR_FILE} application.jar
RUN java -Djarmode#layertools -jar application.jar extract

FROM openjdk:22
LABEL maintainer#"Philipp Cserich, Thomas Boigner"
COPY --from#builder dependencies/ ./
RUN true
# COPY --from#builder internal-dependencies/ ./
COPY --from#builder snapshot-dependencies/ ./
RUN true
COPY --from#builder spring-boot-loader/ ./
RUN true
COPY --from#builder application/ ./
ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]
```

## Docker compose file
Docker compose is used to create a more broad service structure and simple way to start multiple services that need to cooperate with eachother.



### Docker network
Containers normally all have their own localhost running internally, therfore service structures can no longer work by calling the localhost.
The solutions are docker networks. They group the containers logically, so that they can reach each other per DNS entry over their service name.
For example the service **APP1** needs to call the service **APP2** over the port 8080. to do that it has to use

```sh
ping APP2:8080
```

## Volumes
Volumes are persistent modules which have to maintain outside of the containers runtime.
This includes files for startup configurations or other db / persistent files.

They are specified by using :

```yaml
service:
  volumes: # Persistent data
      - volume-name:/var/lib/mysql
volumes:
  volume-name: #Can also be empty
    driver: local #Optional spec
```

## Interactive Container Work

```sh
docker exec -it ...
```

(TODO)

## Pushing Images

### Custom Registry

## Links & Ressources

- 01 [Dockerhub](https://hub.docker.com/)
- 02 [Docker Documentation](https://docs.docker.com/)
