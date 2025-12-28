# 📝 TodoList Docker App – DevOps Learning Project

## 📌 Project Overview

The **TodoList Docker App** is a learning-focused, end-to-end DevOps project.  
It is a **real-time, stateful web application** where users can:

- Add daily tasks  
- Mark tasks as completed using a tick/check feature  
- Maintain and update a structured to-do list  
- Build better time management through task tracking  

The main goal of this project was **not just to build an app**, but to **learn DevOps from the ground up** by containerizing, orchestrating, automating, and deploying a production-style application.

---

## 🎯 Project Objectives

- Learn **DevOps fundamentals** through hands-on implementation  
- Build a **stateful application** using containers  
- Understand **CI/CD pipelines**  
- Practice **Kubernetes (local + cloud)**  
- Gain real-world experience with **AWS EKS**  
- Follow **professional development workflows**

---

## 🛠️ Technology Stack

### Application
- Node.js
- Express.js

### Containerization
- Docker

### Orchestration
- Kubernetes
  - Local: Minikube
  - Cloud Practice: Amazon EKS

### Database
- PostgreSQL (running as a separate container)

### CI/CD
- GitHub Actions

### Code Quality
- ESLint

---

## 🚀 Key Features & Milestones

### ✅ Core Application
- Built a Node.js + Express web server
- Implemented a basic to-do list
- Enabled real-time task updates

---

### 🐳 Containerization
- Created a Dockerfile to package the application
- Built and ran the app as a Docker container

---

### ☸️ Local Kubernetes Deployment
- Deployed the app using Minikube
- Created Kubernetes manifests:
  - `deployment.yaml`
  - `service.yaml`
- Successfully exposed the application locally

---

### 🔄 CI/CD Pipeline
- Implemented a multi-stage GitHub Actions pipeline
- Automated:
  - Code linting
  - Docker image build
  - Docker image push to registry

---

### 🎨 Styling & Static Assets
- Added a `public/styles.css` file
- Learned how to serve static assets using Express

---

### 🗄️ Database & Persistence (Stateful App)
Converted the app from in-memory to persistent storage using PostgreSQL.

Learned and implemented:
- Multi-container communication using Kubernetes Services
- Secure credentials using Kubernetes Secrets
- Externalized configuration using ConfigMaps
- Persistent data storage using Persistent Volume Claims (PVCs)

Key Kubernetes files:
- `postgres-service.yaml`
- `postgres-secret.yaml`
- `configmap.yaml`
- `postgres-pvc.yaml`

---

### ✅ New Feature: Complete Task
- Added "Mark Task as Complete" functionality
- Updated:
  - Database schema
  - Backend application logic

---

### 👨‍💻 Professional Development Workflow
- Used Git branches for feature development
- Created Pull Requests (example: `feature/task-completion`)
- Practiced safe and structured code merging

---

### 🩺 Production Readiness
- Added Kubernetes health probes:
  - `livenessProbe`
  - `readinessProbe`
- Improved application resilience and reliability

---

### 🔍 Code Quality & Shift-Left Practices
- Integrated ESLint into the CI pipeline
- Added a Lint job to catch errors early

---

### ☁️ Cloud Deployment (AWS EKS)
- Deployed the application to a real Amazon EKS cluster
- Learned and practiced:
  - eksctl
  - IAM roles and permissions
  - Cloud storage and StorageClass debugging
  - AWS billing alerts and cost awareness

---

## 📚 What This Project Taught Us

- End-to-end DevOps lifecycle
- Containerized application deployment
- Kubernetes orchestration and debugging
- CI/CD automation
- Secure configuration management
- Cloud-native deployment challenges
- Production-grade best practices

---

## 🏁 Conclusion

This project represents a complete DevOps learning journey, transforming a simple to-do application into a production-style, cloud-deployed, automated system. It demonstrates practical experience with modern DevOps tools and workflows used in real-world engineering teams.
