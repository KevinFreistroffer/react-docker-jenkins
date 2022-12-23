/* Requires the Docker Pipeline plugin */
pipeline {
    agent any
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
