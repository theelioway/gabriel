# Cheat Ubuntu Deploy NodeJs App

- [MongoDb](./cheat-mongo-db.md)

## NodeJs

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

## certbot

- <https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04>

Install Certbot and it's Nginx plugin with apt:

```
sudo apt install certbot python3-certbot-nginx
```

```
sudo certbot --nginx -d elioway.com -d www.elioway.com
```

```
sudo systemctl status certbot.timer
```

```
sudo certbot renew --dry-run
```

## Firewall

```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'
sudo ufw status
```

## NGINX Server block

```
sudo mkdir -p /var/www/funtyper-api/html
```

Ownership:

```
sudo chown -R $USER:$USER /var/www/funtyper-api/html
```

Permissions:

```
sudo chmod -R 755 /var/www/funtyper-api
```

Next, create a sample index.html page using nano or your favorite editor:

```
sudo echo '<html><head></head><body>funtyper-api success</body></html>' > /var/www/funtyper-api/html/index.html
```

Directives:

```
sudo nano /etc/nginx/sites-available/funtyper-api
```

Paste in the following configuration block

```
server {
    listen 80;
    listen [::]:80;

    root /var/www/funtyper-api/html;
    index index.html index.htm index.nginx-debian.html;

    server_name elioway.com www.elioway.com;

    location / {
            try_files $uri $uri/ =404;
    }
}
```

Verify:

```
sudo nginx -t
```

Enable:

```
sudo ln -s /etc/nginx/sites-available/funtyper-api /etc/nginx/sites-enabled/
```

Two server blocks are now enabled and configured to respond to requests based on their listen and server_name directives (you can read more about how Nginx processes these directives here):

funtyper-api: Will respond to requests for funtyper-api and www.funtyper-api. default: Will respond to any requests on port 80 that do not match the other two blocks.

To avoid a possible hash bucket memory problem that can arise from adding additional server names, it is necessary to adjust a single value in the `/etc/nginx/nginx.conf` file. Open the file:

```
sudo nano /etc/nginx/nginx.conf
```

Find the server_names_hash_bucket_size directive and remove the # symbol to uncomment the line. If you are using nano, you can quickly search for words in the file by pressing CTRL and w. /etc/nginx/nginx.conf

... http { ... server_names_hash_bucket_size 64; ... } ...

Save and close the file when you are finished.

Next, test to make sure that there are no syntax errors in any of your Nginx files:

```
sudo nginx -t
```

If there aren't any problems, restart Nginx to enable your changes:

```
sudo systemctl restart nginx
```
