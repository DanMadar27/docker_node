# docker_node

Example of how to setup Docker container or Kubernetes cluster with a Node JS app with Posgres DB.

## Getting Started

### Docker Compose
Run ```npm install``` and build the images using ```docker compose up -d --build```.

### Kubernetes

Make sure to start minikube if running on localhost using ```minikube start```. You need to run Docker Desktop first.

Run ```minikube mount .:/var/lib/minikube/certs/hack``` and then run ```minikube start --extra-config=apiserver.encryption-provider-config=/var/lib/minikube/certs/hack/encryption.yml``` to use encryption at REST for secrets. You can also save this file in the minikube container to make this works, and only run ```minikube start```.

Run ```kubectl apply -f ./secret.yml``` to create the secret.
Run ```kubectl delete -f ./secret.yml``` to delete the secret.
You can also view secrets in vscode using the Kubernetes extension (in configuration section).

Run ```kubectl apply -f ./volumes.yml``` to create the volumes.
In order to delete volumes, enter "Docker Desktop" -> volumes -> minikube -> cli -> cd mnt/data and delete the data using rm command.

Run ```kubectl apply -f ./deployment.yml``` and ```kubectl delete -f ./deployment.yml``` to apply or delete deployment.
To recreate a deployment just use delete and then apply the deployment again.

If getting error ImagePullError then need to build images on minikube container. Open minikube in terminal and build the images (using the mount).

Run```minikube service myapp``` to run the service.

You can use Kubernetes extension in vscode to see the running pods and volumes in storage in minikube.

See ```/counters``` path to see information from db.

## Kubernetes Commands

Use ```minikube addons configure registry-creds``` to add credentials to minikube for pulling images from container registries.

Use ```kubectl get pods``` to see pods.
Use ```kubectl.exe get svc``` to see services to access the nodes.
Use ```kubectl logs <pod>``` to see logs about a pod.
Use ```kubectl logs <pod-name> -c <init-container-name>``` to see logs about init container in pod.
Use ```kubectl.exe get deployments``` to see deployments.

Use ```kubectl get pv``` to show information about persistant volumes.
Use ```kubectl get pv <pv-volume>``` to show information about specific persistant volume.
Use ```kubectl get pvc``` to show information about persistant volume claims.
Use ```kubectl get pvc <pvc-volume>``` to show information about specific persistant volume claim.
