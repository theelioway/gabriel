# Cheat minikube

```shell
# Pause Kubernetes without impacting deployed applications:
minikube pause

# Halt the cluster:
minikube stop

# Increase the default memory limit (requires a restart):
minikube config set memory 16384

# Browse the catalog of easily installed Kubernetes services:
minikube addons list

# Create a second cluster running an older Kubernetes release:
minikube start -p aged --kubernetes-version=v1.16.1

# Delete all of the minikube clusters:
minikube delete --all
```

## Web console

```shell
minikube dashboard
```

## minikube tunnel

For development with **minikube**, you'll need to run `minikube tunnel` in a separate terminal. This service must be running to access a deployment's External Id.

```shell
minikube tunnel
# Cleanup
minikube tunnel --cleanup
```

To create the tunnel:

```shell
kubectl create deployment hello-eliomongodb --image=k8s.gcr.io/echoserver:1.4 --port=27017
kubectl expose deployment hello-eliomongodb --type=LoadBalancer
```
