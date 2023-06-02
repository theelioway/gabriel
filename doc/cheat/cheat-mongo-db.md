# Cheat mongoDB

## Installing

- [eliobones/mongo-db/Quickstart](eliobones/mongo-db/doc/quickstart)

Or

Bones uses mongoDB as its database. These notes are taken from the following documentation:

- [mongodb Install](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

```shell
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list


sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y mongodb-org

# If you are unsure which init system your platform uses, run the following command:
ps --no-headers -o comm 1
```

## Purge

```shell
sudo rm /var/lib/apt/lists/*mongodb-org_4.0*
sudo rm /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo rm /var/lib/mongodb
```

## Service Control

```shell
sudo service mongod start
sudo service mongod stop
sudo service mongod restart

sudo systemctl status mongod
sudo systemctl enable mongod
sudo systemctl disable mongod
```

# Usage

```shell
sudo mongo
```

Enter your sudo password then:

```shell
show dbs
```

If this works, you're good to go.

To exit:

```shell
exit
```

Dropping a db:

```shell
use jsonApi
# switched to db jsonApi
db.dropDatabase()
```

Get data direct from mongo:

```shell
db.getCollection('Thing')
```

## Enable access control

After first installation `authorization` is `disabled` (see below), and the server simply accepts any commands from any users in localhost. This means we can create a super user, without needing any credentials.

- _If you need to repeat these steps later, you'll just need to `disable` `authorization` in the `/etc/mongod.conf` file (see below), then restart mongodb, before you can create or recreate a user anonymously._

```
mongo
use admin
readAnyDatabase|readWriteAnyDatabase|userAdminAnyDatabase|dbAdminAnyDatabase
db.createUser({
  user: "god",
  pwd: passwordPrompt(),
  roles: ["readWriteAnyDatabase", "userAdminAnyDatabase", "dbAdminAnyDatabase" ]
})
exit
```

Next we need to enable the `authorization`

Edit `/etc/mongod.conf`, e.g. using **nano**

```
sudo nano /etc/mongod.conf
```

Enable `authorization` by editing `/etc/mongod.conf` like so:

```
security:
  authorization: enabled
```

Save and exit `mongod.conf`:

```
sudo systemctl restart mongod
sudo systemctl status mongod
```

Connect and authenticate with user credentials (in our case `god`) which you have to do with `authorization: enabled` in `/etc/mongod.conf`.

```
mongo -u god --authenticationDatabase admin -p
```

Add **clientDbUser** user to **clientDb** (or as per client)

```
readWrite|readAnyDatabase|readWriteAnyDatabase|userAdminAnyDatabase|dbAdminAnyDatabase
show dbs
use clientDb
show collections
db.createUser({
  user: "clientDbUser",
  pwd:  passwordPrompt(),
  roles: [ { role: "readWrite", db: "clientDb" } ]
})
```

## Cheat commands

```
db.auth(u, p)
db.changeUserPassword("god", passwordPrompt())
db.changeUserPassword("clientDbUser", passwordPrompt())
db.dropUser("clientDbUser")
db.dropAllUsers()
db.getUser()
db.getUsers()
db.grantRolesToUser()
db.revokeRolesFromUser()
db.updateUser()
```

## Mongo issues

Post Install: Doesn't start or can't find it

If you get an error like "I can't see a server":

```
sudo systemctl unmask mongodb
> Unit mongodb.service does not exist, proceeding anyway.
sudo service mongod start
```

## Uninstall

1. Stop MongoDB.

Stop the mongod process by issuing the following command:

```
sudo service mongod stop
```

2. Remove Packages.

Remove any MongoDB packages that you had previously installed.

```
sudo apt-get purge mongodb-org*
```

3. Remove Data Directories.

Remove MongoDB databases and log files.

```
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```
