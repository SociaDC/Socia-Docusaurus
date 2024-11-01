---
sidebar_position: 1
author: "Philipp Cserich x Thomas Boigner"
Date : 02.10.2024
---

# Software Testing and its variations
Software Testing Guide

## Introduction
---

This Testing guide is written for Socia/Phobos developers only, all usages or publications outside of project reach are not allowed and therefore this document restrains in terms restricted access.


## Test types

- Unittests
- Architecturetests
- End to End tests
- Integrationtests


---

There are two types of testing strategies called

- Example based testing
- Property based testing

### Unittests
As it says in its name, unittests represent the smallest testing unit of code. Their main prupose is to ensure functionality on a more fine grained scale and without the context of your whole Application.
They can come in many different sizes. Method tests / Class tests can all be considered Unittests, but normally you take the smallest unit possible (Method test).

For us the role **Unit # Methodtest** applies.


#### Example


### End to end tests
[TODO]

### Integration tests
[TODO]

### Mocking


### Example based testing
You will already be really familiar with this type of testing, because this is the intuitive way to test functionality.

Define an input -> test the functionality with that predefined input -> is the output the same as my expected output?

Example based testing requires hardcoded checks on both ends and is the most easiest way to ensure functionality.
The problem is that many testcases will be ignored by predefining your in and output.
Maybe you dont even have some possible problematic edge cases in mind. This can lead to major issues in production because every fail that is not recognized in code is one error too much.

### Property based testing and its random nature
Property Based testing aka random testing, is not specified in size. Property Based testing means that
Its counterpart is **example based testing** which tests cases for a predefined input of variables.

In java there are many testing frameworks available to implement such randomness. One of them beeing **jqwik**.


## Test Workflow

For Unittests

1. Example based Testing
2. Property based Testing

## Code Coverage
Code Coverage is the metric to define how well your code is targeted by your tests.
It is displayed in percentage points for example bad testing would result in 20% code coverage -> 20% of your actual code has been covered by your tests.

The industries differ in CC standart very much. For example plane software has to hit 97% CC before beeing able to get into production cycles.
This is a more extreme example, because normally **80%** is the golden Standart for non critical software.
(Critical software is Software that acts in critical Systems. And Problems or errors in such fields can cause harm or danger to human individuals)