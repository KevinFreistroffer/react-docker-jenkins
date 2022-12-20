/* Requires the Docker Pipeline plugin */
pipeline {
    // agent { docker { image 'node:16.17.1-alpine' } }
    tools {
        nodejs 'default-nodejs'
    }
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