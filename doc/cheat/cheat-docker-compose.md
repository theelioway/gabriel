# cheat docker-compose

- <https://docs.docker.com/compose/>
- <https://docs.docker.com/compose/gettingstarted/>
- [Definitive Guide to Docker compose](https://gabrieltanner.org/blog/docker-compose)

Using Compose is basically a three-step process:

1. Define your app's environment with a Dockerfile so it can be reproduced anywhere.
2. Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.
3. Run docker-compose up and Compose starts and runs your entire app.

```shell
cd eliobones/appname/bones
docker-compose up
docker-compose build
docker-compose down --volumes
# Showing typical node setup
docker-compose psnod
docker-compose run web env
docker-compose stop
docker-compose down --volumes
```

## Commands

```
build    Build or rebuild services
help     Get help on a command
kill     Kill containers
logs     View output from containers
port     Print the public port for a port binding
ps       List containers
pull     Pulls service images
rm       Remove stopped containers
run      Run a one-off command
scale    Set number of containers for a service
start    Start services
stop     Stop services
restart  Restart services
up       Create and start containers
down     Stops and removes containers
```

## More docker

```shell
docker version --format "v{{.Client.Version}}"
> Client:
> Version:           19.03.13
> API version:       1.40
NAMES
docker version --format "v{{.Client.Version}}"
> v19.03.13


docker-compose logs

docker network ls
docker network create elionet

docker container kill mongo-db_mongo-express_1
docker rm

docker run -d
  --network elionet \
  --name eliodb-mongo \
  -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
  -e MONGO_INITDB_ROOT_PASSWORD=letmein \
  mongo

docker ps -a
docker stop 61b2dd65753e
docker rm 61b2dd65753e
```

```
for c in 22e0fcffbda4 406499b30932
  docker stop  c
  docker rm  c
end
```
