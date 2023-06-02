# Cheat helm

```shell
# Showing typical node setup
helm list
> NAME       NAMESPACE    REVISION    UPDATED                                    STATUS      CHART             APP VERSION
> eliomongodb    default      1           2020-11-14 23:21:28.992419565 +0200 EET    deployed    mongodb-10.0.1    4.4.1
> eliobones       default      1           2020-11-15 11:34:33.356394551 +0200 EET    deployed    node-13.1.2       10.23.0
> elioapp1       default      1           2020-11-15 11:34:33.356394551 +0200 EET    deployed    node-13.1.2       10.23.0

helm uninstall node
```

## `helm install`

```shell
helm install eliomongodb bitnami/mongodb \
  --set mongodbRootPassword=rootmein \
  --set mongodbUsername=eliouser \
  --set mongodbPassword=letmein \
  --set mongodbDatabase=eliodb \
  --set replicaSet.enabled=true
helm uninstall eliomongodb

cd eliobones/mongoose-bones
kubectl create configmap mongoose-bones-config --from-file=.

`eliomongodb.yaml`

---
apiVersion: mongodb.com/v1
kind: MongoDB
metadata:
  name: eliomongodb
spec:
  version: 4.2.2-ent
  opsManager:
    configMapRef:
      name: mongoose-bones-config
  credentials:
    username: eliouser
    password: letmein
    database: eliodb
    port: 27017
  type: Standalone
  persistent: true
  exposedExternally: true
...
kubectl apply -f elio-mongodb.yaml


# Note your ClusterIP
kubectl get svc | grep eliomongodb
# > eliomongodb   ClusterIP   x.x.x.x   <none>        27017/TCP   40s
# Use your ClusterIP for `host`
kubectl create secret generic eliomongodbsecret \
  --from-literal=host=x.x.x.x \
  --from-literal=username=eliouser \
  --from-literal=password=letmein \
  --from-literal=database=eliodb \
  --from-literal=port=27017
kubectl delete secret eliomongodbsecret
```
