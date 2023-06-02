# Cheat kubectl

<https://docs.bitnami.com/kubernetes/get-started-kubernetes/>

```shell
kubectl get nodes
> NAME       STATUS   ROLES    AGE     VERSION
> minikube   Ready    master   8m44s   v1.19.4

kubectl cluster-info
> Kubernetes master is running at https://192.168.49.2:8443
> KubeDNS is running at https://192.168.49.2:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
>
> To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

kubectl -n kube-system logs -l component=express
```

## Monitoring

```shell
kubectl get deployment
# With typical output
helm list
> NAME           NAMESPACE    REVISION    UPDATED                                    STATUS      CHART             APP VERSION
> eliobones      default      1           2020-11-15 13:32:46.656883053 +0200 EET    deployed    node-13.1.2       10.23.0
> eliomongodb    default      1           2020-11-15 13:26:34.722042116 +0200 EET    deployed    mongodb-10.0.1    4.4.1

# With typical output
kubectl get svc
> NAME              TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
> eliobones-node    LoadBalancer   10.110.48.172   10.110.48.172   80:30465/TCP     39m
> eliomongodb       ClusterIP      10.101.77.111   <none>          27017/TCP        68m
> hello-eliobones   LoadBalancer   10.111.33.51    10.111.33.51    8080:32096/TCP   13m
> kubernetes        ClusterIP      10.96.0.1       <none>          443/TCP          71m
kubectl get svc | grep eliobones-node

# With typical output
kubectl get pods
> NAME                           READY   STATUS    RESTARTS   AGE
> eliomongodb-778bfb8dc5-x8h5s   1/1     Running   0          15m
```

## Interacting

Obtain the public IP address of the load balancer service:

```shell
kubectl get svc -w eliobones-node --namespace default
# As envvar
set BONES (kubectl get svc --namespace default eliobones-node --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")
export BONES=$(kubectl get svc --namespace default eliobones-node --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")
echo "elioBones URL: http://$BONES/"
> "elioBones URL: 10.110.48.172"
```

Now you can interact with the API.

```shell
curl -X GET http://$BONES/schema/Thing/
# And with MongoDb
kubectl run --namespace default mongodb-client --rm --tty -i --restart='Never' --image docker.io/bitnami/mongodb:4.2.3-debian-10-r31 --command -- mongo mydb --host mongodb --authenticationDatabase mydb -u myapp -p myapp --eval "db.Thing.find()"
```

```shell
# To connect to your database from outside the cluster
kubectl port-forward --namespace default svc/mongodb 27017:27017 &
```
