# Git Commands

## Update Config file
   
    $ git config --global user.name == "Pradip-Karmakar-Dev"

    $ git config --global user.name
      Pradip-Karmakar-Dev

    $ git config --global user.email ==     "pradip.karmakar@aimdek.com"

    $ git config --global user.email
      pradip.karmakar@aimdek.com

## Git init

    $ git init GitCommands
      Initialized empty Git repository in D:/GitCommands/.git/

## Git status

    $ git status
      On branch master

      No commits yet

      Untracked files:
        (use "git add <file>..." to include in what will be committed)
          newfile.html

      nothing added to commit but untracked files present (use "git add" to track)

  
## Git add

    $ git add .
  
## Git commit

    $ git commit -m "added newfile.html"
      [master (root-commit) 24e5e77] added newfile.html
      1 file changed, 0 insertions(+), 0 deletions(-)
      create mode 100644 newfile.html

    $ git status
      On branch master
      nothing to commit, working tree clean

## Git log

    $ git log
      commit 24e5e7701e65362499369fbb892de0418a79d532 (HEAD -> master)
      Author: Pradip-Karmakar-Dev <pradip.karmakar@aimdek.com>
      Date:   Tue Jan 18 18:42:45 2022 +0530

          added newfile.html

## Changes made in files

    $ git status
      On branch master
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              modified:   newfile.html

      no changes added to commit (use "git add" and/or "git commit -a")

## View Changes with difference
    
    Before Staging

    $ git diff newfile.html
      diff --git a/newfile.html b/newfile.html
      index e69de29..b138f08 100644
      --- a/newfile.html
      +++ b/newfile.html
      @@ -0,0 +1,15 @@
      +<!DOCTYPE html>
      +<html lang="en">
      +
      +<head>
      +    <meta charset="UTF-8">

    After Staging

    $ git diff --staged
      diff --git a/newfile.html b/newfile.html
      index e69de29..b138f08 100644
      --- a/newfile.html
      +++ b/newfile.html
      @@ -0,0 +1,15 @@
      +<!DOCTYPE html>
      +<html lang="en">
      +
      +<head>
      +    <meta charset="UTF-8">


## Moving & Renaming files

    $ git status
      On branch master
      Changes not staged for commit:
        (use "git add/rm <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              deleted:    custom.css
              deleted:    custom.js

      Untracked files:
        (use "git add <file>..." to include in what will be committed)
              css/
              js/

      no changes added to commit (use "git add" and/or "git commit -a")

    $ git add .

    $ git status
      On branch master
      Changes to be committed:
        (use "git restore --staged <file>..." to unstage)
              renamed:    custom.css -> css/custom.css
              renamed:    custom.js -> js/custom.js

## Undoing working directory changes

    $ git status
      On branch master
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              modified:   newFile2.html

      no changes added to commit (use "git add" and/or "git commit -a")

    $ git checkout -- newFile2.html

    $ git status
      On branch master
      nothing to commit, working tree clean

## Unstaging files

    $ git status
      On branch master
      Changes to be committed:
        (use "git restore --staged <file>..." to unstage)
              modified:   newFile2.html

    $ git restore --staged newFile2.html

    $ git status
      On branch master
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              modified:   newFile2.html

      no changes added to commit (use "git add" and/or "git commit -a")
    
## Amending commits

    $ git log
      commit cdc14dae4491bc2cd70626ed6cd167fbe6f46644 (HEAD -> master)
      Author: Pradip-Karmakar-Dev <pradip.karmakar@aimdek.com>
      Date:   Wed Jan 19 15:12:21 2022 +0530

          Changes made to newFile.html

    $ git commit --amend -m "Updated newFile2.html"
      [master 14cb8e7] Updated newFile2.html
      Date: Wed Jan 19 15:12:21 2022 +0530
      1 file changed, 15 insertions(+)

    $ git log
      commit 14cb8e7e0a6a0d4d97384f1efa42dc9941f3b9b5 (HEAD -> master)
      Author: Pradip-Karmakar-Dev <pradip.karmakar@aimdek.com>
      Date:   Wed Jan 19 15:12:21 2022 +0530

          Updated newFile2.html

## Git reset

    ------------------------------------
                  --soft
    ------------------------------------
    $ git log --oneline
      14cb8e7 (HEAD -> master) Updated newFile2.html
      60b10f7 added newFile.html & newFile2.html
      24e5e77 added newfile.html
    
    $ git reset --soft 60b10f7

    $ git log --oneline
      60b10f7 (HEAD -> master) added newFile.html & newFile2.html
      24e5e77 added newfile.html

    $ git status
      On branch master
      Changes to be committed:
        (use "git restore --staged <file>..." to unstage)
              modified:   newFile2.html

    
    ------------------------------------
                  --mixed
    ------------------------------------

    $ git reset --mixed 60b10f7
      Unstaged changes after reset:
      M       newFile2.html

    $ git log --oneline
      60b10f7 (HEAD -> master) added newFile.html & newFile2.html
      24e5e77 added newfile.html

    $ git status
      On branch master
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              modified:   newFile2.html

      no changes added to commit (use "git add" and/or "git commit -a")


    ------------------------------------
                  --hard
    ------------------------------------
    $ git reset --hard 60b10f7
      HEAD is now at 60b10f7 added newFile.html & newFile2.html

    $ git log --oneline
      60b10f7 (HEAD -> master) added newFile.html & newFile2.html
      24e5e77 added newfile.html

    $ git status
      On branch master
      nothing to commit, working tree clean

## Remove Untracted Files

    $ git status
      On branch master        

      Untracked files:
        (use "git add <file>..." to include in what will be committed)
              hello.txt
              newhello.txt

    $ git clean -n
      Would remove hello.txt
      Would remove newhello.txt

    $ git clean -f
      Removing hello.txt
      Removing newhello.txt

## Creating & View Branch

    $ git branch login

    $ git log --oneline -3
      9058903 (HEAD -> master, login) added gitignore & move several files
      ee350cc added custom.css & custom.js
      60b10f7 added newFile.html & newFile2.html

    $ git branch
      login
    * master

## Switching Branch

    $ git checkout login
      Switched to branch 'login'

## Comparing Branch

    $ git diff master..login
      diff --git a/css/login.css b/css/login.css
      new file mode 100644
      index 0000000..e69de29
      diff --git a/js/login.js b/js/login.js
      new file mode 100644
      index 0000000..e69de29
      diff --git a/login.html b/login.html
      new file mode 100644
      index 0000000..1ea9444
      --- /dev/null
      +++ b/login.html

## Renaming Branch

    $ git branch -m login authentication

    $ git branch
      authentication
    * master

## Merge Branch

    $ git merge authentication 
      Updating 9058903..32c8d1e
      Fast-forward
      css/login.css |  0
      js/login.js   |  0
      login.html    | 15 +++++++++++++++
      3 files changed, 15 insertions(+)
      create mode 100644 css/login.css
      create mode 100644 js/login.js
      create mode 100644 login.html

    $ git log --oneline
      32c8d1e (HEAD -> master, authentication) Added content to login.html
      d7d11cd Added html, css, js files for login page
      9058903 added gitignore & move several files
      ee350cc added custom.css & custom.js
      60b10f7 added newFile.html & newFile2.html
      24e5e77 added newfile.html


## Merge with conflict

    $ git merge authentication 
      Auto-merging newfile.html
      CONFLICT (content): Merge conflict in newfile.html
      Automatic merge failed; fix conflicts and then commit the result.

      ----------------------------------------
      <<<<<<< HEAD
          date : {todaysDate}
      =======
          date: 1/3/22
      >>>>>>> authentication
      ----------------------------------------

      - By manually removing conflict we can solve this.

    Pradip.Karmakar@DESKTOP-OQLQSSO MINGW64 /d/GitCommands (master|MERGING)
    $ git add .
    $ git commit
    $ git log --oneline
      608c5bd (HEAD -> master) Merge branch 'authentication'
      c8a1eb2 added date variable in newFile.html
      e83ae3b (authentication) added hardcoded date in newFile.html

## Save Changes to Stash

    $ git stash save "update content on login_helper.html"
      Saved working directory and index state On authentication: update content on login_helper.html

## List the stashed changes

    $ git stash list
    stash@{0}: On authentication: update content on login_helper.html

    ---- show perticular stash from the list ----
    $ git stash show stash@{0}
      login_helper.html | 15 +++++++++++++++
      1 file changed, 15 insertions(+)

## Pop/Apply stash to branch

    $ git stash pop
      On branch authentication
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              modified:   login_helper.html

      no changes added to commit (use "git add" and/or "git commit -a")
      Dropped refs/stash@{0} (3d084c74e0bccb79af9f6ecc60673e20a4b883ad)


    $ git stash apply
      On branch authentication
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
              modified:   login_helper.html

      no changes added to commit (use "git add" and/or "git commit -a")


## Drop the stash

    $ git stash drop stash@{0}
      Dropped stash@{0} (8f14af597569734448370fe823b59e69050da29c)

## Adding remote repository

    $ git remote add origin https://github.com/Pradip-Karmakar-Dev/GitCommands.git

    $ git remote
      origin

    $ git remote -v
      origin  https://github.com/Pradip-Karmakar-Dev/GitCommands.git (fetch)
      origin  https://github.com/Pradip-Karmakar-Dev/GitCommands.git (push)

## Remove remote repository

    $ git remote rm origin

    $ git remote

## Creating remote branch

    $ git push -u origin master


## Cloning remote repository

    $ git clone https://github.com/Pradip-Karmakar-Dev/GitCommands.git NewUserGitCommands
      Cloning into 'NewUserGitCommands'...
      remote: Enumerating objects: 32, done.
      remote: Counting objects: 100% (32/32), done.
      remote: Compressing objects: 100% (14/14), done.
      remote: Total 32 (delta 13), reused 32 (delta 13), pack-reused 0
      Receiving objects: 100% (32/32), done.
      Resolving deltas: 100% (13/13), done.


## Fetch Changes from remote

    $ git fetch
      remote: Enumerating objects: 10, done.
      remote: Counting objects: 100% (9/9), done.
      remote: Compressing objects: 100% (4/4), done.
      remote: Total 6 (delta 3), reused 5 (delta 2), pack-reused 0
      Unpacking objects: 100% (6/6), 788 bytes | 15.00 KiB/s, done.
      From https://github.com/Pradip-Karmakar-Dev/GitCommands
        608c5bd..c1e25ee  master         -> origin/master
      * [new branch]      authentication -> origin/authentication

## Merge the changes from origin/master

    $ git merge origin/master
      Updating 608c5bd..c1e25ee
      Fast-forward
      newFile2.html | 15 +++++++++++++++
      1 file changed, 15 insertions(+)

## Checkout remote branch

    $ git branch authentication origin/authentication 
      Branch 'authentication' set up to track remote branch 'authentication' from 'origin'.

    $ git branch
      authentication
    * master

## Delete remote branch 

    $ git push origin --delete authentication 
      To https://github.com/Pradip-Karmakar-Dev/GitCommands.git
      - [deleted]         authentication

## Adding local branch to remote

    $ git push origin authentication:authentication
      Enumerating objects: 5, done.
      Counting objects: 100% (5/5), done.
      Delta compression using up to 4 threads
      Compressing objects: 100% (3/3), done.
      Writing objects: 100% (3/3), 490 bytes | 245.00 KiB/s, done.
      Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
      remote: Resolving deltas: 100% (1/1), completed with 1 local object.
      remote: 
      remote: Create a pull request for 'authentication' on GitHub by visiting:
      remote:      https://github.com/Pradip-Karmakar-Dev/GitCommands/pull/new/authentication
      remote:
      To https://github.com/Pradip-Karmakar-Dev/GitCommands.git
      * [new branch]      authentication -> authentication