# GIT Cheat Sheet

## fetch

```
# to refetch and refresh `git branch -a` list from origin
git fetch --all --prune
```

## submodule

``` `

# Add from Remote

git submodule add git@gitlab.com:$elioGroup/$elioName.git $elioName

```

# Add existing subfolder with own `.git`

git submodule add --name "$elioName" "git@gitlab.com:$elioGroup/$elioName.git" $elioName

# Still has its own .git directory?

git submodule absorbgitdirs $elioName

# Remove

git submodule deinit elioApp git rm $elioName --cached --force

## upstream

```

git remote add upstream <https://github.com/cktang88/mongoose-api-generator.git>

```

# Now you can fetch and pull from the upstream should there be any changes. (You can also push or merge to it if you have access rights.)

```

git pull upstream master

```

# Finally, push back to your own GitLab repository:

```

git push origin master

```

## Reset

```

git log --reflog git reset --hard

```

# or

```

git reset --hard origin/master

```

## Setup

### SHA

Download keys from your store and put in `~/.ssh/` or if new keys are required

```

ssh-keygen -t ed25519 -C "cm" cat ~/.ssh/id_ed25519.pub

```

then

```

git config --global user.email "eliosearch@gmail.com" git config --global user.name "Tim Bushell" git config --global push.default matching

git config --global user.email "tcbushell@gmail.com" git config --global user.name "tcbushell" git config --global push.default matching

git config user.email "tim@kbsoftware.com" git config user.name "Tim Bushell" git config push.default matching

```

#### Handling SHA for Multuple Git Accounts

Edit or create `~/.ssh/config`

```

Host gitlab.ACCT1
HostName gitlab.com
User git
IdentityFile ~/.ssh/key1

Host gitlab.ACCT2
HostName gitlab.com
User git
IdentityFile ~/.ssh/key2

Host github.ACCT3
HostName github.com
User git
IdentityFile ~/.ssh/key3

```

then make sure you set the right remote URL to each of your repo:

```

git remote set-url origin git@gitlab.ACCT1:myACCT1/myACCT1repo.git

```

## Timesheet for

```

git log --pretty="%ce - %h - %s" --since="2021-08-01" --before="2021-11-01" --no-merges --author='Junio C Hamano'

```


##

```
