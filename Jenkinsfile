/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
        stage('Startup') {
            steps {
                script {
                    sh 'npm install'
                }
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