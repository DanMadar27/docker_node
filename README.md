# docker_node


Example of how to setup Docker container with a node app.

## Getting Started

Run ```npm install``` and build the images using ```docker compose up -d --build```.

Make sure to start minikube if running on localhost using ```minikube start```.

run ```kubectl apply -f ./deployment.yml``` and ```kubectl delete -f ./deployment.yml``` to apply or delete deployment.
### Kubernetes Commands

Use ```kubectl get pods``` to see pods.
Use ```kubectl.exe get svc``` to see services to access the nodes.
Use ```kubectl logs <pod>``` to see logs about a pod.
