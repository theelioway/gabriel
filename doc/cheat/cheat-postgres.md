# Cheat Postgres

- `sudo service postgresql reload`
- `pg_dump -h 172.18.0.2 -p 30432 -U postgres flowable > ~/Downloads/flowable-mini.sql`
- `psql -h 172.18.0.2 -p 30432 -U postgres flowable < ~/Downloads/flowable-mini.sql`
- `psql -h 172.20.0.2 -p 30432 -U postgres flowable < script.sql -v pid='pidX'`
- `psql -h 172.20.0.2 -p 30432 -U`

## Cheat Password

```
set -x PGPASSWORD "postgres"
```

## Init

```shell
# Lists roles
\du
# Lists all the databases
\l
# List tables in connected database
\dt
# List schemas
\dn
# List columns on table
\d
# List functions
\df
# Quit
\q
# List views
\dv
# Pretty-format query results
\x
```

## Database

```sql
DROP DATABASE IF EXISTS dbname;
CREATE DATABASE dbname TEMPLATE=template0 ENCODING='utf-8';
-- Create a database
CREATE DATABASE mypgdatabase OWNER demorole1;
```

## User

```shell
# Connect to the database
psql
# Connect to localhost as mypguser
psql -U mypguser -d mypgdatabase
# Create a user
CREATE USER mypguser WITH PASSWORD 'mypguserpass';
```

## Role

```sql
-- Create role
CREATE ROLE demorole1 WITH LOGIN PASSWORD 'password1' CREATEDB;
-- Alter role
ALTER ROLE demorole1 CREATEROLE CREATEDB REPLICATION SUPERUSER;
-- Drop role
DROP ROLE demorole1;
```

## Smarter with .env

```
set -x PGPASSWORD $DATABASE_PASS
psql --host $DATABASE_HOST --port $DATABASE_PORT -U $DATABASE_USER
```
