# docker_node


Example of how to setup Docker container with a node app.

## Getting Started

Run ```npm install``` and build the images using ```docker compose up -d --build```.

Make sure to start minikube if running on localhost using ```minikube start```.

Run ```kubectl apply -f ./volumes.yml``` to create the volumes.
In order to delete volumes, enter "Docker Desktop" -> volumes -> minikube -> cli -> cd mnt/data and delete the data using rm command.

Run ```kubectl apply -f ./deployment.yml``` and ```kubectl delete -f ./deployment.yml``` to apply or delete deployment.
To recreate a deployment just use delete and then apply the deployment again.
Run```minikube service myapp``` to run the service.

You can use Kubernetes extension in vscode to see the running pods and volumes in storage in minikube.

See ```/counters``` path to see information from db.

### Kubernetes Commands

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