# mysql

## Install

```
sudo apt install -y mysql-server mysql-workbench libmysqlclient-dev
```

sudo mysql_secure_installation

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'insert_password';
```

```
mysql_secure_installation
sudo nano '/etc/mysql/my.cnf'
```

mysql -uroot -p<ROOTPASS> -e "CREATE USER '<USER>'@'localhost' IDENTIFIED BY '<USERPASS>';"
mysql -uroot -p<ROOTPASS> -e "GRANT ALL PRIVILEGES ON <DB>.\* TO '<USER>'@'localhost' WITH GRANT OPTION;"
mysql -uroot -p<ROOTPASS> -e "FLUSH PRIVILEGES;"

mysql -uroot -p<ROOTPASS> -e "DROP USER '<USER>'@'localhost';"

```
[mysqld]

collation-server = utf8_bin
character-set-server = utf8
lower_case_table_names = 1
```

sudo apt purge mysql-server mysql-client mysql-common mysql-server-core-\* mysql-client-core-\* -y
sudo apt autoremove -y
sudo apt autoclean -y
sudo apt remove dbconfig-mysql
sudo apt dist-upgrade
sudo rm -rf /etc/mysql /var/lib/mysql

```
# sudo /etc/init.d/mysql stop
# sudo mkdir /var/run/mysqld; sudo chown mysql /var/run/mysqld
# sudo mysqld_safe --skip-grant-tables&

sudo mysql -uroot
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'insert_password';
flush privileges;
exit



mysql -uroot -p -e "CREATE USER 'dbUser'@'%';";
mysql -uroot -p -e "ALTER USER 'dbUser'@'%' IDENTIFIED WITH mysql_native_password BY 'insert_password';";
mysql -uroot -p -e "GRANT ALL PRIVILEGES ON dbUser.* TO 'dbUser'@'%';";
flush privileges;

sudo /etc/init.d/mysql restart
```

Other stuff you probably won't need

```
# sudo mysqladmin shutdown
```
