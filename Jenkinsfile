/* Requires the Docker Pipeline plugin */
pipeline {
    agent any
    stages {
  
        stage('Startup') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }
    }
}
