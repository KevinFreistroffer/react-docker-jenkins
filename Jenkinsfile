/* Requires the Docker Pipeline plugin */
pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
  
        stage('Startup') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                bat 'node --version'
            }
        }
        stage('Test') {
            steps {
                script {
                    bat 'npm run test'
                }
            }
        }
    }
}
