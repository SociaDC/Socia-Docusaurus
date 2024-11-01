---
sidebar_position: 2
---

# Git & Conventions

## Introduction
Author : Philipp Cserich

Date : 08.07.2024

---

This Git guide is written for Socia/Phobos developers only, all usages or publications outside of project reach are not allowed and therefore this document restrains in terms restricted access.

(Not everything has to be taken seriously and most examples are narrowed down or made more unrealistic so that it is easier to understand)

### Once upon a Git.
Git as it is today is a distributed version control system, created for code collaboration processes.
Todays developers are using tools such as GitHub, GitLab or even BitBucket, but what if i tell you that those iterations of version management platforms are not implementing the core principles of git? What if i tell you that the "Inventor" of git, the allmighty Linus Torvald was so fed up by the idea of a centraliced code collab service that he tried to develop his own system?

This chapter is all about Gits origins and how modern code collab has developed over time.
If you are just interested in code examples and git implementation strategies please skip this chapter.

Before Git there was nothing but Emptiness .....
Early VCS (Version control systems) started in the 1970s *(35 before git)*
where its first iteration called SCCS (Source Code Control System) was on the rise.
Its very basic version tracking system, was only designed to work on linux and had very limited features. The core principle of storing your projects history has been born.
VCS next iteration (RCS) - Revision Control System added branches and merging but still was only designed to upload individual files and was very limited in its usage.
CVS an extended VCS version included concurrent development and collaboration but suffered from severe performance issues. And the last of its kind SVN is able to get rid of the previous iteration mistakes. Its performance was better and was way more reliable. However its centralized structure was doomed to failure for any large scaled environments.

In the early days of the Linux Kernel, its community was using a VCS tool called BitKeeper. BitKeeper was a proprietary piece of software that suited the needs of the kernels development team. But it was not all bees and flowers. After a licensing dispute, the company behind BitKeeper decided to remove its free version out of their software palette. Therefore the Team behind Linux, desperatly needed a new Distributed Code Management tool.
Linus Torvald the infamous Linux founder, was sure that he would be able to create his own vcs service and while creating, he focused on a few different points.
- Speed
The new system should be able to handle large data repositories with numerious commits efficiently
- Distributed Architecture
The Projects architecture shouldnt be dependent on one central server but rather be copied onto every developers machine. 
- Data Integrity
Ensuring Repositories data integrity and security
- Support for non Linear Development
Complex branching and merging should be included


These Objectives formed the idea of **"Git"** which has been published since 2005.
You will later see how linus torvald intended the system to be used.


#### Structure of Git (Big boy - Remote , Origin ...)
(Example where i create a git repo by hand without git init...)

Before we start digging into specific commandlets and execution examples, we have to understand how git operates.
The Git system is always initalized by using the command

```bash
$ git init
```

This command is mostly responsible to prepare to operation environment of git.
It includes the creation of a .git repository, as well as the subdirectories **refs/tags, refs/heads and objects**.

It needs a file HEAD in which you need to specify your current branch:

>ref: refs/heads/master

After this your git structure is initialized.
(When using the git bash, it s visually highlighted by showing the current branch as main)

These component types (tags / heads / objects) all serve different purposes.
While tags are literal pointers that are used to highlight one specific commit as "v1.0", branch-heads act not that different.

When understanding how changes actually reach their destination you have to know that there are 3 stages in which commits can be.
- The origin (your pcs working directory)
- The  staging area (reached through **git add .**)
- The repository (reached through **git commit .** )
- The remote (external service #> leaves your PC with **git push**)

![Git Flow](./img/GitFlow.png)

Originally linus torvald intended the system to work without any centralized Server that is responsible to store all of the developers data.
In his mind, developers would send their requests, commits and branches from one pc to another, so that any developer is able to access their state of the application without using such server.

#### What is a Commit
Commits are Nodes that save changed information.
They always except for one time have to be based on another commit.

![Commit](./img/Commit.png)

A node also contains, a rsa id which is used to identify the signed commit.
This RSA id includes the information of date, author, changed content as well as its predecessor which leads to a unique key identifier.
As each file would be repetetive to save, git just saves the changes of each individual file, therefore each commit is necessary to rebuild the whole application.

#### What is a Branch
The concept of a branch is always visually displayed by a stream of commits.
In theory that would be correct, but its technical realization looks a bit different.
Commits are never meant to save their predestined branch, as one commit can be present in multiple branches. 
To be more accurate, branches are nothing else than so called "heads"

These Heads act as pointers on dedicated commits. 
If you create a new Branch from master, there is just one Pointer being added to the system directing to the last commit accessed.
After commiting again, the new commit is getting pointed at by our new branch, while the previous one maintains beeing the head of master and so on.
Because of that "diverging Branches" are just branches that focus on different commits, that somewhere had the same past (commit history).


![Commit Structure](./img/CommitBranching.png)

Each Branch header also has a unique SHA-1 hashed identifier.



#### What are Branches and how to create / Delete Them

In a real scenario you are able to create branches in two ways.
By using the cli in which you have to create the branch by hand.
>git checkout -b "feature-name"

or by creating it directly in the github web ui.
*Go to Branches > new Branch and choose your origin.*


![Branch](./img/Branch.png)

![new Branch](./img/newBranch.png)

#### Merge strategies - When to use each (+ Interactive rebase / Squash)

We have already discussed what branches are and how they work.
But we have not solved the question, what benefits they should provide for the development team.

As one of Gits main features branches are made to make code collaboration more easy.
Branches come in play to reduce the cost of working together by letting you base your changes temporarily on a different state of the application.
But what should i do when i am done developing a feature in my branch?

In this section git becomes a bit tricky, there are several branch merging strategies that are all valuable in their own way.

- **Merge Commit**:
    
    - **Command**: `git merge <branch>`
    - **Description**: Combines the specified branch's history into the current branch, creating a new commit to record the merge. This method preserves the history of both branches.
- **Fast-forward Merge**:
    
    - **Command**: `git merge --ff-only <branch>`
    - **Description**: Moves the current branch tip forward to the target branch tip if there are no divergent changes. This does not create a merge commit. If a fast-forward merge is not possible, the merge fails.
- **Squash Merge**:
    
    - **Command**: `git merge --squash <branch>`
    - **Description**: Combines all the changes from the specified branch into a single commit on the current branch, which must then be manually committed. This method results in a cleaner, more linear history.
- **No Fast-forward Merge**:
    
    - **Command**: `git merge --no-ff <branch>`
    - **Description**: Creates a merge commit even if a fast-forward merge is possible. This method is useful for preserving the complete history of feature branches.
- **Rebase**:
    
    - **Command**: `git rebase <branch>`
    - **Description**: Moves the current branch's commits to the tip of the specified branch, effectively reapplying the changes from the current branch on top of the other branch. This creates a linear history but can be more complex to resolve conflicts.
- **Interactive Rebase**:
    
    - **Command**: `git rebase -i <commit>` or `git rebase -i <branch>`
    - **Description**: Opens an editor to allow for more granular control over how commits are applied. You can reorder, squash, edit, or drop commits. This method is useful for cleaning up commit history before merging.

With the use of `PRs` or `Pull Requests`, you are able to create such merge statements in a Github environment.

### Project usage
In our projects our team should mainly use the squash and fast forward technique.
Therefore no "ugly" merge commits are getting created and your version history stays clean.
This vsh structure lets us work a bit different though.
As you create one singular "feature commit", your version history looses the somaller changes in between.
This not only lets us think about the size of commits bat rather when to create Prs.

`Our Guideline:`
- Try to regularly update the dev branch and keep features as small as possible.
- Try to keep commits as small as possible
- Only create Pull Requests when your inner workflow is no longer relevant for the applications development.
- Carefully Read through pull requests of others so that you can help them making that decision.

Pull Requests generally just pass if your build works. **Check that before you create them.**
`(If that should happen you can simply commit again onto that branch. Your PR will update automatically)`

To keep yourself committed to these rules make sure to have a local pull strategy of fast-forward.
This prevents the git system to cause merge commits when pulling in remote changes into your branch.
```bash
git config --global pull.rebase true
```

#### How to use git in Github

The Git system has around 152 commands in total (1.7.11.3)
Normally you will face around 30 of them which are known under the name "Porcelain" commands.
Any other command runs under the term "Plumbing command" and will only be used when digging deep into the systems core features.
For the sake of simplicity we will mostly focus on those basic "Porcelain" Commands.

- **`git init`**:
    
    - Initializes a new Git repository in the current directory.

- **`git clone <repository-url>`**:
    
    - Creates a copy of an existing repository from the given URL to your local machine.

- **`git status`**:
    
    - Shows the current status of the working directory and the staging area, including changes that are staged for commit, changes that are not staged, and untracked files.

- **`git add <file>`**:
    
    - Adds a file to the staging area, making it ready to be committed. Use `.` to add all changes.

- **`git commit -m "<message>"`**:
    
    - Records changes to the repository with a descriptive message.

- **`git log`**:
    
    - Displays a list of all the commits in the repository's history.

- **`git diff`**:
    
    - Shows the differences between the working directory and the staging area, or between commits.

- **`git branch`**:
    
    - Lists all branches in the repository. When used with a branch name, it creates a new branch.

- **`git checkout <branch>`**:
    
    - Switches to the specified branch and updates the working directory to match it.

- **`git merge <branch>`**:
    
    - Combines the specified branch's history into the current branch.

- **`git pull`**:
    
    - Fetches changes from a remote repository and merges them into the current branch.

- **`git push`**:
    
    - Uploads local commits to a remote repository.

- **`git remote -v`**:
    
    - Shows the URLs of the remote repositories for your project.

- **`git remote add <remoteName> <remoteURL>`**:
    
    - Adds a new Remote Repository destination into your git context.

- **`git fetch`**:
    
    - Downloads objects and refs from a remote repository, but does not integrate them into your current branch.

- **`git reset --hard <commit>`**:
	
    - Resets the current branch to the specified commit, discarding all changes in the working directory and staging area.
    
    >**DON'T USE WITHOUT PERMISSION!!**

#### Socia Naming Conventions

Now we are heading into the territory of project specific conventions.
These are meant to be specified once and EVERYONE in the team should to work around them.

1. Commit Naming
Please always provide a descriptive name of the fullfilled task as well as a description.

```bash
git commit -m ""
```

Doesn't miss you.
You are not that guy. Use this instead

```bash
git commit
```

2. Branch Naming

There are four types of branch names.
The two protected and immutable ones are `dev` and `main`.
They are singularly staging areas for the Application, defining its state.
While dev is a general development area with mostly finished features, `main` includes only production ready code peaces. **Keep that in mind while working!**

For development purposes you will only face two types of branches.
- feature branches

Feature branches are always based of of `dev` or in extremely rare cases on another feature branch.
Their content should include only kontent from a predefined github issue.
As their content is linked to the issue definition we found that indexing such branches is way easier when including the Issue Ticket number into the branch name.

***Ticketnumber is always three Digits***

***BEST PRACTICE:***
Use this template to create the ticket:

image::assets/images/TechnicalFeature.png[BugReport,title#"BugReport",width#"500"]

![Technical Feature](./img/TechnicalFeature.png)

`feature#<Ticket-number>/<feature-name>`

For Example :

`feature#023/socia-ticketing-system`

- bug/hotfix branches

Bug and Hotfixes are no actual features but rather code fixtures or completions of previous features mistakes.
Their difference beeing that Hotfixes are direct reactions on top of the `main` branch and Bugfixes are made from the `dev` branch.
***BEST PRACTICE:***
Use this template to create the ticket:



![Bug Report](./img/TechnicalFeature.png)


`bugfix#<Bugfix-ticketnumber>/<bugfix-name>`

For Example :

`bugfix#023/socia-ticketing-system`



3. Issue Naming

Creating a new Issue should be relatively straight forward.

image::assets/images/newIssue.png[Issue naming,title#"Issue naming",width#"700"]

![new Issue](./img/newIssue.png)

Afterwards Choose your template of choice and start describing your desired Product state.
The Issues names should ALWAYS represent the feature they are representing.
***(Funny names do be allowed though)***


### Accessing the Correct Registry

In our case the normal Registry of github is not the way to go. Because of more advanced features of git servers, especially CICD related, we decided to move to a privately hosted instance of Gitea.
You do not need to remove your remote connection that currently exists to Github.
Rather than deleting the old one we will create a second entry in our "remote" entries.

You might know the syntax from adding remote access such as :

```sh
$ git init
$ git remote add origin [registrylink]
```

In this example the keyword origin is not actually a magic keyword but rather the default naming of a remote repository reference.
All we have to do is add our new repository (preferrably with a name like "gitea")

```sh 
$ git remote add gitea [repository reference]
```


## Author / Contact Person

If you have any questions, you can contact me.

Philipp.cserich@gmail.com || +436706059019

### Links & Ressources

- 01 [History of Git - GeeksforGeeks](https://www.geeksforgeeks.org/history-of-git/)
- 02 [Git - A Short History of Git (git-scm.com)](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git)
- 03 [Git - Official Documentation](https://git-scm.com/doc)
- 04 [Deep Dive - Git Implementation](https://github.com/git/git)