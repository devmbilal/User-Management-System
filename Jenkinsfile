#!/user/bin/env groovy

library identifier: 'User-Management-System@main', retriever: modernSCM(
  [
    $class: 'GitSCMSource',
    remote: 'https://github.com/devmbilal/User-Management-System',
    credentialsId: 'Bilal-github',
    ]   )

def gv

pipeline {
    agent any
    tools { 
        maven 'maven-3.9' 
    }

    stages {


        stage('init') {
            steps {
                script {
                echo 'Initializing Node-JS Application'
                }
            }
        }
      stage('installing dependencies') {
            steps {
                script {
                sh 'npm install'
                }
            }
        }
        stage('Build Applicaation') {
            steps {
                script {
                 
                    echo 'building the applcation...'
               
                }
            }
        }
        stage('Build and Push Image') {
            steps {
                script {
                   echo 'Building and Pushing the Docker Image of my Node-JS Application'
                }
            }
        }
        stage('Deploy') {
           
            steps {
                script {
                 echo 'Deploying my Node-JS Application'
                   
                }
            }
        }
       }
}
