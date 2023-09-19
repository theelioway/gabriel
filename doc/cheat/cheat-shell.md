# shell commands

## apt

```
sudo apt update
sudo apt upgrade -y
sudo apt --fix-broken install -y

apt --installed list | grep -v automatic
apt --installed list | grep -G "python.*"
grep  -G "python.*" install /var/log/dpkg.log
```

```shell
sudo dpkg -i ./name.deb
sudo apt install -f
# OR
sudo apt install ./name.deb

sudo apt-get update --fix-missing

sudo apt purge <package> -y

sudo apt autoremove -y
sudo apt clean
```

```
To make recovery in case of failure easier, an additional sshd will
be started on port '1022'. If anything goes wrong with the running
ssh you can still connect to the additional one.
If you run a firewall, you may need to temporarily open this port. As
this is potentially dangerous it's not done automatically. You can
open the port with e.g.:
'iptables -I INPUT -p tcp --dport 1022 -j ACCEPT'
```

## Something about keys

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 76F1A20FF987672F
```

```In the Dashboard where the flags and skills/comp appear we would like a location column and a procedure column so we can see which tabs have been assigned,

```

## ps / kill

```

Run ps aux | grep gphoto, which might have output like:

peter 25802 2.1 0.1 302504 8736 ? Ssl 13:10 0:00 /usr/lib/gvfs/gvfs-gphoto2-volume-monitor peter 25814 2.2 0.1 441508 11176 ? Sl 13:10 0:00 /usr/lib/gvfs/gvfsd-gphoto2 --spawner :1.3 /org/gtk/gvfs/exec_spaw/21 peter 25835 0.0 0.0 22676 1096 pts/0 S+ 13:10 0:00 grep --color=auto gphoto

First colums is PID (process id), kill them:

kill -9 25802 kill -9 25814

```

## ip

```shell
hostname -I
ifconfig
curl https://ipinfo.io/ip
```

## list

```shell
ls -a
# Directories ordered by size
du -hs * | sort -hr
# See permissions
ls -lh
#
# Diectpries
ls -d */
ls -l | grep '^d'
find . -maxdepth 1 -type d
echo */
tree -d -L 1
```

## find

```shell
# delete empties
find . -type d -empty -delete

find .  -name  -type f
```

## PC details

```shell
sudo dmidecode -t system
```

### Recently installed

```shell
grep -w install /var/log/dpkg.log
```

### Keys

```shell
sudo apt-key adv --refresh-keys --keyserver keyserver.ubuntu.com
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 76F1A20FF987672F
```

## services

```shell
sudo -i systemctl disable servicename
sudo -i systemctl enable servicename

sudo -i systemctl list-units --type=service --state=running

sudo systemctl start service_name
sudo systemctl restart service_name
sudo systemctl enable service_name
sudo systemctl disable service_name


sudo service --status-all
sudo -i service servicename stop
sudo -i service servicename start
sudo -i service servicename restart

sudo initctl list
```

## history

```shell
nano  ~/.inputrc
```

**Paste**::

```
"\e[A": history-search-backward
"\e[B": history-search-forward
"\e[C": forward-char
"\e[D": backward-char
```

## users

```shell
sudo adduser cm
sudo usermod -aG sudo cm

# login as new user to change password
passwd

# To remove/delete a user, first you can use:
sudo userdel username

# Then you may want to delete the home directory for the deleted user account :
sudo rm -r /home/username
# (Please use with caution the above command!)

# To modify the username of a user:
usermod -l new_username old_username

# To change the password for a user:
sudo passwd username
```

## rsync

<https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories>

```shell
echo "node_modules
venv*
venv" > ~/.cvsignore
# `-a` = `-r` + more
# Backup
# copies contents of dir1 into dir2, i.e. dir1/a dir1/b => dir2/a dir2/b
rsync -a dir1/ dir2
# copies dir1 into dir2, i.e. dir1/a dir1/b => dir2/dir1/a dir2/dir1/b
rsync -a dir1 dir2/
# `--cvs-exclude                 ignore `.git` and stuff and `~/.cvsignore`
# `-v` verbose
# `-n` `--dry-run`
# `-P` `--progress` and `--partial`
# `-R` `--relative`
# `-m` `--prune-empty-dirs`
# `--delete`  remove files no longer in source
# `--exclude=pattern_to_exclude`
# `--include=pattern_to_include`
# `--ignore-existing`        skip updating files that exist on receiver
# `--remove-source-files`    sender removes synchronized files (non-dir)
rsync -aP dir1/ username@remote_host:destination_directory --cvs-exclude --delete
# Veracrypt or other where files are modified due to encryption
# -u, --update                skip files that are newer on the receiver
# -t, --times                 preserve modification times
```

## sftp

```shell
sftp user@host
cd path                            Change remote directory to 'path'
lcd path                           Change local directory to 'path'
get [-afpR] remote [local]         Download file
put [-afpR] local [remote]         Upload file
bye                                Quit sftp

# More Commands
chgrp [-h] grp path                Change group of file 'path' to 'grp'
chmod [-h] mode path               Change permissions of file 'path' to 'mode'
chown [-h] own path                Change owner of file 'path' to 'own'
df [-hi] [path]                    Display statistics for current directory or filesystem containing 'path'
exit                               Quit sftp
help                               Display this help text
lls [ls-options [path]]            Display local directory listing
lmkdir path                        Create local directory
ln [-s] oldpath newpath            Link remote file (-s for symlink)
lpwd                               Print local working directory
ls [-1afhlnrSt] [path]             Display remote directory listing
lumask umask                       Set local umask to 'umask'
mkdir path                         Create remote directory
progress                           Toggle display of progress meter
pwd                                Display remote working directory
quit                               Quit sftp
reget [-fpR] remote [local]        Resume download file
rename oldpath newpath             Rename remote file
reput [-fpR] local [remote]        Resume upload file
rm path                            Delete remote file
rmdir path                         Remove remote directory
symlink oldpath newpath            Symlink remote file
version                            Show SFTP version
!command                           Execute 'command' in local shell
!                                  Escape to local shell
?                                  Synonym for help
```

## zip

```shell
zip -r -0 -u invoices.zip invoices/
# encrypt
zip -r -e safe.zip unsafed/
```

## format

```shell
mkntfs -Q -v -F -L /dev/sdb1
```
