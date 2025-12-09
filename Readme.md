this is a project just for learning and testing
here you have can add your daily tasks and update it in real-time and you can tick the complete the tick mark so that you cna update your to do list and make a proper time-table accordingly


Our Project: The "TodoList Docker App"
Our goal was to learn DevOps from the ground up by building, deploying, and automating a real, stateful web application.
The Technology Stack We Used:
Application: Node.js with the Express framework.
Containerization: Docker.
Orchestration (Local): Kubernetes via Minikube.
Orchestration (Cloud Practice): Amazon EKS.
Database: PostgreSQL, running as a separate container.
CI/CD: GitHub Actions.
Code Quality: ESLint.
Key Features and Milestones We Achieved:
Core App: We built the basic web server and in-memory todo list.
Containerization: We wrote a Dockerfile to package the application.
Local Deployment: We wrote Kubernetes YAML files (deployment.yaml, service.yaml) and successfully deployed the app to Minikube.
CI/CD Pipeline: We created a multi-stage GitHub Actions pipeline that automatically builds and pushes our Docker image.
Styling: We added a public/styles.css file and learned how to serve static assets.
Persistence: We made the app "stateful" by adding a PostgreSQL database, learning about:
Multi-container networking using Services (postgres-service).
Managing passwords with Kubernetes Secrets (postgres-secret.yaml).
Externalizing configuration with ConfigMaps (configmap.yaml).
Saving data permanently with Persistent Volume Claims (postgres-pvc.yaml).
New Features: We added the "Complete Task" functionality, which involved updating the database schema and application code.
Professional Workflow: We practiced using Git branches and Pull Requests (feature/task-completion) to manage changes safely.
Production Readiness: We added Health Probes (livenessProbe, readinessProbe) to make the application more resilient.
Code Quality: We added a "Lint" job to our pipeline, learning how to "shift left" and catch code errors early.
Cloud Deployment Practice: We went through the entire process of deploying to a real AWS EKS cluster, learning about eksctl, IAM permissions, billing alerts, and debugging cloud-specific storage issues (StorageClass).
