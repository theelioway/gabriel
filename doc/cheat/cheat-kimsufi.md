# Cheat Kimsufi/OVH

## User accounts

Assumes you installed Ubuntu on an OVH/Kimsufi server: You'll have an email with "root" account details. It's probably `ubuntu`. Don't use `ubuntu` on a daily basis. Instead we create a "sudoer" admin account - a normal user with admin (aka "root") permissions you'll need - but any command line actions requiring permissions are prefixed: `sudo`. This is similar to how **Windows** prompts you to approve certain actions - elevating your account temporarily. In **Linux** you get the convenience of not having another popup window with a button you have to click - you do it in advance.

So... first step: create a user. You could create lots called "backup" or "web" but I just make one account and use the file system to organise purpose.

- When you see "tim" change to the user name for your local machine.
- When you see "elioway" change to your chosen user name for your server.
- When you see `1.2.3.4` change to the IP of your server.
- You can also use the "hostname". OVH/Kimsufi hostnames look like this: `ns987654.ip-1-2-3.eu`

```shell
ssh ubuntu@1.2.3.4
or
ssh ubuntu@ns987654.ip-1-2-3.eu
```

TIP: `CTRL+SHIFT+V` will paste a previously copied password. _NB: It doesn't look like it pastes anything._

- `Too many authentication failures`

```shell
ssh -o IdentitiesOnly=yes ubuntu@1.2.3.4
```

Immediately change the `ubuntu` password to something very very strong. Save in your password manager.

```shell
passwd
```

Add a new user. You don't need to fill out those contact details, but you can. Choose a password that is strong, but also memorable. You'll need to type (or paste) the password every session. 6 random words is best.

Add the user to the "sudo" group (of users with admin permissions). Exit the `ubuntu` ssh session.

```shell
sudo adduser elioway
sudo usermod -aG sudo elioway
exit
```

Access the account, using the password you set.

```shell
ssh elioway@1.2.3.4
# or
ssh -o IdentitiesOnly=yes elioway@1.2.3.4
```

To avoid having to use the password to enter an ssh session, and can use an "ssh key" instead. You can copy all your public keys from your local machine `~/.ssh` so you can just use `ssh elioway@1.2.3.4` each time without needing the password.

```shell
ssh-copy-id elioway@1.2.3.4
ssh-copy-id -i /home/tim/.ssh/ns987654.pub elioway@1.2.3.4
# will prompt for your password
```

### Optional/Advanced .ssh config

Rather than copy all your keys using `ssh-copy-id`, you can manually copy just one public key which you create specifically for accessing this server. This has advantages because you can simulataneously add that key to a Git host (for example)... then both your local machine AND your remote server are using the same credentials.

This also explains more generally how to configure your access keys for general use:

#### Step 1 Create a dedicated key

In the command below, I'm creating an ssh key using `ed25519` encryption. The key will go into a file called `ns987654` - which is the host_server_name of the OVH/Kimsufi server (as a personal convention - you can use anything). And I add the comment: which is `user@host_server_name` a requirement of OVH.

TIP: `/home/tim/` is your user directory. Equiv of "My Documents" in **Windows**. `~/` is a shortcut name for that path. I will use both intermittently in my docs. Sometimes it helps to use `/home/elioway/` because `~/` assumes you are logged in as `elioway` and not some other user, like the "root" user. NB: `~/` equals `/home/ubuntu/` when logged in as `ubuntu`!

```shell
ssh-keygen -t ed25519 -f "/home/tim/.ssh/ns987654" -C "elioway@ns987654.ip-1.2.3.eu"
```

Take a record of the fingerprint (and even the randomart if you want).

#### Step 2 Reference the key in config

Open or create a file called `/home/tim/.ssh/config`. You'll want this file anyway to manually set up how your ssh keys are routed. You won't always want to use the same SSH key for everything!

The formatting here is two spaces for the indent. It references the "host" machine / service you are getting access to. It references the specific user. It references the private part of the key (not `ns987654.pub`). Simply leave a space and add this to the bottom if you already have other "Hosts" referenced.

```config
Host ns987654.ip-1.2.3.eu
  HostName ns987654.ip-1.2.3.eu
  User elioway
  IdentityFile ~/.ssh/ns987654
  IdentitiesOnly=yes
```

#### Step 3 Add public part of the key to the host machines `authorized_keys`

Inside your local `/home/tim/.ssh` directory, copy the public key from the `/home/tim/ns987654.pub` file to the `authorized_keys`. Each key goes on one line. Access the server again using your password. **nano** is a popular, easy to use, shell based text editor which is preinstalled on ubuntu systems.

```shell
cat ~/.ssh/ns987654.pub
# or
cat /home/tim/.ssh/ns987654.pub
# this will show the key on the screen (`cat` prints a file to screen)

# select and right click to copy the screen print of the public key
ssh -o IdentitiesOnly=yes elioway@1.2.3.4
cd .ssh
# if there is no .ssh directory
mkdir .ssh
cd .ssh
nano authorized_keys
```

- Use `CTRL+SHIFT+V` to paste your public key.
- Use `CTRL+SHIFT+O` to "write-Out" the file.
- Press `ENTER` to accept the name "authorized_keys"
- Use `CTRL+SHIFT+X` to exit **nano**
- Type `exit` to exit the ssh session.
- Try `ssh elioway@1.2.3.4` again. You should go back into the server without having to enter your password.

Next we're going to install everything we'll need on the machine.

## Command "history" feature

We're going to add a feature that allows you to quickly retrieve previous command history. It means you can type the first few characters of a command, then use the `UP` and `DOWN` keys to "scroll" through commands that start the same way. You won't have to retype commands in full that you already typed previously. Often it's easier to find an old command with different parameters and just edit that command.

This is for your user only, so it doesn't need sudo.

You can do this on your local computer as well.

```shell
ssh elioway@1.2.3.4
nano  ~/.inputrc
```

- Use `CTRL+SHIFT+V` to paste the following into the file.

```config
"\e[A": history-search-backward
"\e[B": history-search-forward
"\e[C": forward-char
"\e[D": backward-char
```

- Use `CTRL+SHIFT+O` to "write-Out" the file.
- Press `ENTER` to accept the name ".inputrc"
- Use `CTRL+SHIFT+X` to exit **nano**

Reboot the machine to activate this history feature.

```shell
sudo reboot
# wait ...
ssh elioway@1.2.3.4
# type
nano
# press UP arrow ... and you'll see the `nano  ~/.inputrc` command used to enable this feature.
# press UP arrow again ... and you'll see the `nano authorized_keys` command used for the ssh stuff.
# press DOWN arrow ... and you'll see the `nano  ~/.inputrc` command used to enable this feature.
# press left arrow to select the command you want.
```

## NodeJs NPM

### Install NodeJs

The first time in every session that you use the `sudo` pre-command, you will be prompted for your password. This is unavoidable but secure.

TIP: Use `CTRL+SHIFT+V` to paste password.

```shell
ssh elioway@1.2.3.4
# Start getting organised.
mkdir Downloads
cd Downloads
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install -y nodejs
```

Add some required node packages globally. On your local machine, you shouldn't ever install global NPM packages with sudo - but on a server you must.

```shell
sudo npm install npm-check-updates pm2@latest -g

```

### ncu Usage

```shell
# inside a node app
ncu -u
# avoiding major version
ncu -u --target minor
# upgrading globals
ncu -u -g
ncu -u -g --target minor
# this won't upgrade - but it will give you the upgrade command.
```

## nginx

### Install nginx

```shell
ssh elioway@1.2.3.4
sudo apt update
sudo apt install nginx
# firewall it!
sudo  allow 'Nginx HTTP'
sudo ufw allow 'Nginx HTTPS'
sudo ufw status
```

### nginx Usage

- Stop web server: `sudo systemctl stop nginx`
- Start web server when stopped: `sudo systemctl start nginx`
- Stop then start service: `sudo systemctl restart nginx`
- Reload without dropping connections: `sudo systemctl reload nginx`
- Disable automatic start: `sudo systemctl disable nginx`
- Enable automatic start: `sudo systemctl enable nginx`
- Check syntax errors in any of your Nginx files: `sudo nginx -t`

### Hosting with nginx

#### Step 1. Create a file called `terrible-example.conf` for your **terrible-example** app

_Please do not enter a port number already used on your system. To be safe, use a number between 49152 and 65535._

```config
server {
  listen 80;
  server_name terrible.example.com;
  location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header Host $http_host;
      proxy_pass http://127.0.0.1:50001;
  }
}
```

#### Step 2. We'll use **pm2** to run our apps

In the example below, we assume a static website in the `build` directory of your **terrible-example** repo.

```shell
# In the repo on your local machine:
cd /home/tim/Dev/terrible-example
# see below for explaination of rsync
rsync -rP build terrible-example.conf elioway@1.2.3.4:~/Dev/terrible-example
# Now go to your remote server.
ssh elioway@1.2.3.4
cd ~/Dev/terrible-example
pm2 serve build --namespace example --name terrible --port 50001
```

Or add a npm script command to the `package.json` file in your terrible app.

```json
  "scripts": {
    "pm2": "pm2 serve build --namespace example --name terrible --port 50001",
    "prettier": "prettier --list-different --write \"**/*.{js,json,css,scss,md,html,yaml,yml}\" ",
    "rsync": "rsync -rP build terrible-example.conf elioway@1.2.3.4:~/Dev/terrible-example"
  }
```

_Notice I also added an `rsync` entry so I can run `npm run rsync` in my local `~/Dev/terrible-example` directory to push the files to the server that we need. Adding the ref to `elioway@1.2.3.4` in the `package.json` file is not secure for PUBLIC repos. Only do this for your PRIVATE repos._

And run `npm run pm2` in the `~/Dev/terrible-example` directory on your server.

```shell
ssh elioway@1.2.3.4
cd ~/Dev/terrible-example
npm run pm2
```

#### Step 3. Test it's running on the server localhost

Test it by using `curl http://127.0.0.1:50001` or `curl http://localhost:50001` (almost the same thing - unless you've accidentally-almost-impossibly resolved `127.0.0.1` another way).

#### Step 4. Copy `terrible-example.conf` to `sites-available`

```shell
ssh elioway@1.2.3.4
cd ~/Dev/terrible-example
sudo cp terrible-example.conf /etc/nginx/sites-available/
# check for errors
sudo nginx -t
```

#### Step 5. Link conf to sites-enabled

`ln` is **Linux**'s version of a **Window**'s "shortcut". We will be linking `/etc/nginx/`sites-available/terrible-example.conf`in`/etc/nginx/sites-enabled`.

```shell
ssh elioway@1.2.3.4
sudo ln -s /etc/nginx/sites-available/terrible-example.conf /etc/nginx/sites-enabled/
```

#### Step 6. Restart nginx

```shell
ssh elioway@1.2.3.4
sudo systemctl restart nginx`
```

#### Step 7. Test your website

From your own PC/phone: e.g. <http://terrible.example.com>

## Certbot + Lets Encrypt

### Install Certbot

```shell
sudo apt install certbot python3-certbot-nginx
```

### Lets Encrypt Usage

```shell
sudo certbot --nginx -d terrible.example.com

- Congratulations! Your certificate and chain have been saved at:
  /etc/letsencrypt/liveterrible.example.com/fullchain.pem
  Your key file has been saved at:
  /etc/letsencrypt/live/terrible.example.com/privkey.pem
  Your cert will expire on BLAH-12-06\. To obtain a new or tweaked
  version of this certificate in the future, simply run certbot again
  with the "certonly" option. To non-interactively renew *all* of
  your certificates, run "certbot renew"
```

Test your website from your own PC/phone e.g. <https://terrible.example.com>

## Common server tasks

Daily, weekly, (or incompetently) monthly tasks:

### Updates

```shell
apt update
apt full-upgrade -y
ncu -u -g
```

Occasional tasks:

### Moving to a newer version of Ubuntu

Occasionally you can move up to the latest version of Ubuntu. Stick to "LTS" versions so that you know it will continue to be supported for a long time.

```shell
ssh elioway@1.2.3.4
sudo apt update
sudo apt upgrade -y
sudo do-release-upgrade
```

Follow the instructions.

### rsync for back up

If u want to use your server as a **DropBox** alternative, to backup your personal files, `rsync` is a good out of the box solution. There is software you can use, but I suggest using `rsync` because it's often used in devops as well - and you should get comfortable using it. rsync works with ssh behind the scenes - so all the work you did with ssh keys mean you are already authorised.

```shell
rsync -a target-directory elioway@1.2.3.4:destination-directory
```

So if you have a directory on your server like this:

```shell
ssh elioway@1.2.3.4
# you'll be in your `/home/elioway/` or `~/`
mkdir -p Backup
# your folder path is `~/Backup`
```

You would reference it like this:

```shell
rsync -a /home/tim/Documents elioway@1.2.3.4:/home/elioway/Backup/
# because you have "elioway@" this means you can shortcut to
rsync -a ~/Documents elioway@1.2.3.4:~/Backup/
```

#### rsync merge vs "put inside"

There's always this big question. In the above example the `Documents` directory will go _inside_ the remote `Backup` directory, e.g. to `/home/elioway/Backup/Documents`. But let's say you prepare a `Backup` directory on your local machine. And you periodically want to sync its contents to the server. You won't want `/home/elioway/Backup/Backup` you'd want `/home/elioway/Backup`. Right?

```shell
# sync and put the local `Documents` directory inside the remote `Backup` directory
rsync -a ~/Documents elioway@1.2.3.4:~/Backup/
# results in 1.2.3.4:~/Backup/Documents/DocumentsFile.txt

# sync and merge the local `Documents` directory with the remote `Backup` directory
rsync -a ~/Documents/ elioway@1.2.3.4:~/Backup/
# results in 1.2.3.4:~/Backup/DocumentsFile.txt
# a little `/` slash makes all the difference here
```

#### rsync options

There are hundreds of options for `rsync`. Common ones are:

- `-r` recursive... but use `-a` instead because...
- `-a` maintain file attributes. Combines bunch of options - `-rlptgoD` - which includes recursive + file permissions, visibility, links, ownership, timestamp, etc.
- `-v` verbose
- `-n` or `--dry-run` (combine with `-P` so you can see what it would do!)
- `-P` or `--progress` with `--partial`
- `-R` or `--relative`
- `-m` `--prune-empty-dirs`
- `-u` or `--update` to skip files that are newer on the destination
- `--delete` remove files no longer in source
- `--ignore-existing` skip updating files that exist on destination
- `--exclude=pattern_to_exclude`
- `--include=pattern_to_include`
- `--cvs-exclude` auto exclude `.git`, `node_modules` and the like.

Single dash versions of options can be combined, e.g. `-anmvP`

TIP: `--cvs-exclude` will also ignore any directory or file paths specified in a `~/.cvsignore` file you have on your local machine. So you can make a `~/.cvsignore`

#### rsync scenarios

Below are some common combinations for different purposes.

TIP: `--dry-run` is your friend while you are learning.

```shell
# Keep the contents of one folder perfectly in sync with the remote.
rsync -amP ~/Documents/ elioway@1.2.3.4:~/Backup/Documents/ --delete

# Save bandwidth. Don't bother to sync Music files which are already there.
rsync -amP ~/Music/ elioway@1.2.3.4:~/Backup/Music/ --delete --ignore-existing

# Even if you delete Music locally, it's preserved in the backup.
rsync -amPu ~/Music/ elioway@1.2.3.4:~/Backup/Music/ --ignore-existing
# Find out what is preserved in the backup but you don't have locally.
rsync -amPu  elioway@1.2.3.4:~/Backup/Music/ ~/Music/ --ignore-existing --dry-run

# Target one file when you have updated it with a better quality compression.
rsync -amPu  ~/Music/pop/abba/waterloo/01-Waterloo-320.mp4 user@1.2.3.4:~/Backup/Music/ --relative

# Sync a directory that may have folders like `node_modules` which don't need syncing and can be HUGE!
rsync -amPu ~/Dev/ elioway@1.2.3.4:~/Backup/Dev/ --cvs-exclude

# Sync your local `.config` directory where all your Linux settings for apps, etc is kept.
rsync -amPu ~/.config/ elioway@1.2.3.4:~/.config/ --delete --cvs-exclude

# If you ever rebuild your PC you can put your preferences back.
rsync -amPu  elioway@1.2.3.4:~/Backup/.config/ ~/.config/ --delete --cvs-exclude

# Really make sure those big movies transferred with no data loss.
rsync -amP ~/Videos/ elioway@1.2.3.4:~/Backup/Videos/ --checksum
```
