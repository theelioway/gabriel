# Cheat Helm

## Install

## **kubernetes**

```shell
echo (curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)
> v1.19.4
curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.19.4/bin/linux/amd64/kubectl"
# Unzip to bin
chmod +x bin/kubectl
kubectl version
> v1.19.4
```

```
wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh | TAG=v1.3.4 bash
```

**kubectl**

```
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.16.3/bin/linux/amd64/kubectl
mv kubectl ~/bin/
chmod +x ~/bin/kubectl
```

**helm**

- Download helm from <https://github.com/helm/helm/releases/tag/v2.16.1>
- Extract helm and move it to your /usr/local/bin/helm folder.

```
helm version
helm init
```

## Clusters

```
k3d create
k3d delete

k3d start k3s-default
k3d stop k3s-default

# Set the ``KUBECONFIG`` environment variable::

# bash
export KUBECONFIG=$(k3d get-kubeconfig)
# fish
set -x KUBECONFIG (k3d get-kubeconfig)
```

Check::

```
kubectl cluster-info
kubectl get pods -w
kubectl get pods --all-namespaces
```

Configure::

```
kubectl -n kube-system create serviceaccount tiller
kubectl create clusterrolebinding tiller --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
helm init --service-account tiller

# test (wait for deployment)
kubectl -n kube-system  rollout status deploy/tiller-deploy
```

Error: configmaps is forbidden: User "system:serviceaccount:kube-system:default" cannot list resource "configmaps" in API group "" in the namespace "kube-system"?

Run:

```
kubectl -n kube-system create serviceaccount tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
kubectl --namespace kube-system patch deploy tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'
```

Change into our Scripts\_ folder and run the Rancher local storage script e.g::

```
cd ~/dev/module/k3d/
kubectl apply -f rancher-local-path-storage.yaml
# check
kubectl get storageclass
```

## Postgres

```
helm repo add bitnami https://charts.bitnami.com/bitnami
```

Change into our Scripts\_ folder and run the `init-postgres.sh` script e.g::

```
cd ~/dev/module/k3d/
./init-postgres.sh

# to monitor progress
kubectl get pods -w

helm upgrade kb-dev-db bitnami/postgresql
```

## Microsoft SQL Server

```
cd ~/dev/module/k3d/
./init-microsoft-sql-server.sh

# to monitor progress
kubectl get pods -w
```

Tools::

```

curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list
apt update
apt install mssql-tools unixodbc-dev
```

To connect, you first need to initialise your environment::

```
# fish shell e.g. '.env.fish'
set -x MICROSOFT_SQL_SERVER_HOST (kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
set -x MICROSOFT_SQL_SERVER_PASS (kubectl get secret --namespace default kb-microsoft-mssql-linux-secret -o jsonpath="{.data.sapassword}" | base64 --decode)
set -x MICROSOFT_SQL_SERVER_PORT (kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services kb-microsoft-mssql-linux)

# then connect
export SQLCMDPASSWORD=$MICROSOFT_SQL_SERVER_PASS; sqlcmd -S $MICROSOFT_SQL_SERVER_HOST,$MICROSOFT_SQL_SERVER_PORT -U sa

helm delete kb-microsoft
helm del --purge kb-microsoft;
```

## Flowable

Install k3d*, Helm* **and** `Postgres`\_

```
helm repo add flowable https://www.pkimber.net/howto/helm/
```

`Connect to psql`\_ and create the `flowable` table::

```
CREATE DATABASE flowable TEMPLATE=template0 ENCODING='utf-8';
```

Change into our Scripts\_ folder and run the `init-flowable.sh` script e.g::

```
cd ~/dev/module/k3d/
./init-flowable.sh

# to monitor progress
kubectl get pods -w
```

Create the Ingres::

```
cd ~/dev/module/k3d/
kubectl apply -f flowable-ingres.yaml
```

Find the IP address for `flowable-rest`::

```
kubectl get ing
# NAME                  HOSTS   ADDRESS      PORTS   AGE
# flowable-rest         *       172.20.0.2   80      2m6s
```

Browse to::

```
`http GET http://rest-admin:test@172.20.0.2/service/repository/deployments/`
```

## redis

```

set -x KUBECONFIG (k3d get-kubeconfig)
cd ~/dev/module/k3d/
./init-redis.sh
```
