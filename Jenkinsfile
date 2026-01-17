pipeline {
    agent any

    environment {
        // FIXED: Correct spelling
        DOCKERHUB_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE_NAME = "rnkbansal/devops-todo-app"
    }

    stages {
        stage('Checkout Code'){
            steps{
               git branch: 'main', url: 'https://github.com/RNKBansal23/TodoListDockerApp.git'
            }
        }

        stage('Run Linter'){
            steps{
                script{
                    // This step requires Jenkins to be able to talk to Docker!
                    docker.image('node:18-alpine').inside {
                        sh 'npm install'
                        sh 'npm run lint'
                    }
                }
            }
        }

        stage('Build Docker Image'){
            steps{
                script{
                    docker.build(DOCKER_IMAGE_NAME, '.')
                }
            }
        }

        stage('Push to Docker Hub'){
            steps{
                script {
                    // FIXED: Added closing quote after .com, and fixed variable name
                    docker.withRegistry('https://registry.hub.docker.com', DOCKERHUB_CREDENTIALS_ID) {
                        docker.image(DOCKER_IMAGE_NAME).push('latest')
                    }
                }
            }
        }
    }
}