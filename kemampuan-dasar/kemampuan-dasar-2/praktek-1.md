
**Step 1: Alice creates a new project and hosts it on GitHub.**

```zsh
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs  mkdir rhymes && cd rhymes

 ```

 ```zsh
nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  git init
Reinitialized existing Git repository in /home/nabiel/Programming Stuffs/rhymes/.git/
 ```


```zsh
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  touch README.txt
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  git add README.txt
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ✚  git commit -m 'First Commit!'
[master (root-commit) 3da02be] First Commit!
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt
```

```zsh
nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  echo 'This repo contains collection of nursery rhymes' >> README.txt 
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ±  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

```zsh
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ±  git diff
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ±  git add README.txt 
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ✚  git commit -m 'Added Project Overview to README.txt'
[master 3ecd93b] Added Project Overview to README.txt
 1 file changed, 1 insertion(+)
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  
```

```zsh
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt 
wget https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
##File not found, coba membuat sendiri :))
```

```zsh
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  git add all-around-the-mulberry-bush.txt 
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ✚  git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	hokey-pokey.txt
	jack-and-jill.txt
	old-mother-hubbard.txt
	twinkle-twinkle.txt

 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ✚  git commit -m 'added all-around-the-mulberry-bush.txt'
[master f065307] added all-around-the-mulberry-bush.txt
 1 file changed, 1 insertion(+)
 create mode 100644 all-around-the-mulberry-bush.txt
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  git add jack-and-jill.txt 
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master ✚  git commit -m 'jack-and-jill.txt'                     
[master 700f485] jack-and-jill.txt
 1 file changed, 1 insertion(+)
 create mode 100644 jack-and-jill.txt
 nabiel@nabiel-Swift-SF314-41  ~/Programming Stuffs/rhymes   master  
```

```zsh
?master ~/Programming Stuffs/rhymes> git add .
+master ~/Programming Stuffs/rhymes> git commit -m 'add all rhymes'
[master 33e1b7a] add all rhymes
 3 files changed, 3 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 twinkle-twinkle.txt
```

```zsh
master ~/Programming Stuffs/rhymes> git log
commit 33e1b7ab3ee359a4f7d8277ac435c42276d6a515 (HEAD -> master)
Author: Inabiel13 <nizzullah@gmail.com>
Date:   Wed Feb 3 10:58:57 2021 +0700

    add all rhymes

commit 700f48514a4e93a20ad5d5d1b68c86f4016f39e2
Author: Inabiel13 <nizzullah@gmail.com>
Date:   Tue Feb 2 21:45:40 2021 +0700

    jack-and-jill.txt

commit f065307aea70367edcb29ce3a56edda77f9621ef
Author: Inabiel13 <nizzullah@gmail.com>
Date:   Tue Feb 2 21:44:33 2021 +0700

    added all-around-the-mulberry-bush.txt

commit 3ecd93bf95eea9a061e618bb0a47c9b1b2535c69
Author: Inabiel13 <nizzullah@gmail.com>
Date:   Tue Feb 2 21:32:37 2021 +0700

    Added Project Overview to README.txt
```

```zsh
master ~/Programming Stuffs/rhymes> git remote add origin https://github.com/Inabiel/rhymes.git
master ~/Programming Stuffs/rhymes> git push -u origin master
Username for 'https://github.com': Inabiel
Password for 'https://Inabiel@github.com': 
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (13/13), 1.17 KiB | 1.17 MiB/s, done.
Total 13 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/Inabiel/rhymes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
master ~/Programming Stuffs/rhymes> 

```

**Step 2, Bob copies Alice's project, then submits some simple changes**

```zsh
~/Programming Stuffs/cloned>git clone https://github.com/Inabiel/rhymes.git
Cloning into 'rhymes'...
remote: Enumerating objects: 23, done.
remote: Total 23 (delta 0), reused 0 (delta 0), pack-reused 23
Unpacking objects: 100% (23/23), 2.81 KiB | 359.00 KiB/s, done.
~/Programming Stuffs/cloned> cd rhymes
```

```zsh
master ~/Programming Stuffs/cloned/rhymes> git checkout -b hickory-dickory
Switched to a new branch 'hickory-dickory'
hickory-dickory ~/Programming Stuffs/cloned/rhymes> wget https://www.acquia.com/sites/default/files/blog/hickory-dickory-dock.txt  
```

```zsh
-?hickory-dickory ~/Programming Stuffs/cloned/rhymes> git add hickory-dickory-dock.txt
+hickory-dickory ~/Programming Stuffs/cloned/rhymes> git commit -m 'Added hickory-dickory-dock.txt'
[hickory-dickory 50660d0] Added hickory-dickory-dock.txt
 1 file changed, 1 insertion(+), 5 deletions(-)
 hickory-dickory ~/Programming Stuffs/rhymes> git push origin hickory-dickory
```

**Step 3: Alice reviews and accepts Bob's simple changes**

```zsh
hickory-dickory ~/Programming Stuffs/rhymes> git remote rename origin alice
master ~/Programming Stuffs/rhymes> git remote add bob https://github.com/Frzst13/rhymes
hickory-dickory ~/Programming Stuffs/rhymes> git remote
alice
bob
alice	git@github.com:Inabiel/rhymes.git (fetch)
alice	git@github.com:Inabiel/rhymes.git (push)
bob	https://github.com/Frzst13/rhymes (fetch)
bob	https://github.com/Frzst13/rhymes (push)
```

```zsh
hickory-dickory ~/Programming Stuffs/rhymes> git fetch bob
hickory-dickory ~/Programming Stuffs/rhymes> git branch -a

* hickory-dickory
  master
  remotes/alice/master
  remotes/bob/hickory-dickory
  remotes/bob/master
(END)
```

```zsh
hickory-dickory ~/Programming Stuffs/rhymes> git checkout -b hickory-dickory bob/hickory-dickory 
fatal: A branch named 'hickory-dickory' already exists.
hickory-dickory ~/Programming Stuffs/rhymes> git log -1 -p
hickory-dickory ~/Programming Stuffs/rhymes> git diff master hickory-dickory 
hickory-dickory ~/Programming Stuffs/rhymes> git checkout master 
Switched to branch 'master'
Your branch is up to date with 'alice/master'.
master ~/Programming Stuffs/rhymes> git merge hickory-dickory 
Already up to date.
master ~/Programming Stuffs/rhymes> 
```

**Step 4: Bob makes lots of changes**

```zsh
master ~/Programming Stuffs/rhymes2/rhymes> git remote rename origin bob
master ~/Programming Stuffs/rhymes2/rhymes> git remote add alice https://github.com/Inabiel/rhymes.git
master ~/Programming Stuffs/rhymes2/rhymes> git remote
alice
bob
master ~/Programming Stuffs/rhymes2/rhymes> git remote -v
alice	https://github.com/Inabiel/rhymes.git (fetch)
alice	https://github.com/Inabiel/rhymes.git (push)
bob	https://github.com/Frzst13/rhymes.git (fetch)
bob	https://github.com/Frzst13/rhymes.git (push)
master ~/Programming Stuffs/rhymes2/rhymes> 
```

```zsh
master ~/Programming Stuffs/rhymes2/rhymes> git remote update
Fetching bob
Fetching alice
From https://github.com/Inabiel/rhymes
 * [new branch]      hickory-dickory -> alice/hickory-dickory
 * [new branch]      master          -> alice/master
master ~/Programming Stuffs/rhymes2/rhymes> git checkout master
Already on 'master'
Your branch is up to date with 'bob/master'.
master ~/Programming Stuffs/rhymes2/rhymes> git merge alice/master
Already up to date.
master ~/Programming Stuffs/rhymes2/rhymes> 
```

```zsh
master ~/Programming Stuffs/rhymes2/rhymes> git checkout -b bobs-changes
Switched to a new branch 'bobs-changes'
```

'''zsh
bobs-changes ~/Programming Stuffs/rhymes2/rhymes> echo 'rhymes' > jack-be-nimble.txt
?bobs-changes ~/Programming Stuffs/rhymes2/rhymes> git add jack-be-nimble.txt 
+bobs-changes ~/Programming Stuffs/rhymes2/rhymes> git commit -m 'added jack-be-nimble.txt'    
[bobs-changes 0eb3e04] added jack-be-nimble.txt
 1 file changed, 1 insertion(+)
 create mode 100644 jack-be-nimble.txt
bobs-changes ~/Programming Stuffs/rhymes2/rhymes> 
```
```zsh
bobs-changes ~/Programming Stuffs/rhymes2/rhymes> git rebase -i 700f485 
Successfully rebased and updated refs/heads/bobs-changes.
bobs-changes ~/Programming Stuffs/rhymes2/rhymes> 
```

**Masih ada beberapa error, susah menggunakan 2 akun github dalam satu pc. dalam implementasi harusnya dengan satu teman**