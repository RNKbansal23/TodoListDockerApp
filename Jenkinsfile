pipeline{
    agent any


    environment{
        DOCCKERHUB_CREDIENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE_NAME = "rnkbansal/devops-todo-app"
    }

   stage('Checkout Code') {
    steps {
        git branch: 'main', url: 'https://github.com/RNKBansal23/TodoListDockerApp.git'
    }
}

        stage('Run Linter'){
            steps{
                script{
                    docker.image('node:18-alpine').inside{
                        sh 'npm install'
                        sh 'npm run lint'
                    }
                }
            }
        }

        stage('Build Docker Image'){
            steps{
                script{
                    def dockerImage = docker.build(DOCKER_IMAGE_NAME, '.')
                }
            }
        }
        stage('Push to Dockr Hub'){
            steps{
                script {
                    docker.withRegistry('https://registry.hub.docker.com, DOCKER_CREDENTIALS_ID'){
                        docker.image(DOCKER_IMAGE_NAME).push('latest')
                    }
                }
            }
        }

    }
}