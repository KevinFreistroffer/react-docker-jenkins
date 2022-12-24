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
        stage('Deliver') {
            steps {
                bat './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat './jenkins/scripts/kill.sh'
            }
        }
    }
}
