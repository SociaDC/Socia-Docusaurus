---
sidebar_position: 2
---


# Gitops principle
Gitops Guide

## Introduction
Author : Philipp Cserich

Date : 08.07.2024

---

This Gitops guide is written for Socia/Phobos developers only, all usages or publications outside of project reach are not allowed and therefore this document restrains in terms restricted access.

### What is Gitops

> Building Applications or Complete Structures all around Git!

**"Config as Code done Right!"**

Everything revolves around git Repos.
This normally means that you have to include one seperate Repository that is responsible for holding configuration files for **ArgoCD** or **FluxCD**.

But what exactly means building everything around a git repository?
In the good old times you would configure servers manually, that changed when kubernetes was introduced. Server configurations could be written beforehand and could get reused.
This opened up a whole new spectrum of reusability.

Sadly even in a kubernetes environment you are configuring the Deployments and "Servers" / Pods once and these files do not get stored externally.
GitOps changes that. It requires all configuration files and service definitions to be saved in a "git" centered repository, which is then used as a reference for kubernetes.
So even if an earthquake destroys our datacenter, we could reproduce all servers states, by recabling our git repo to another cluster.

This revolves in the k8smaster needing to know and watch the state of all configuration files.
ArgoCD and FluxCD do exactly that, they enable more accessable roleback strategies as well as instant updates whenever a new software version or config change hit.

### How to use it
[TODO]