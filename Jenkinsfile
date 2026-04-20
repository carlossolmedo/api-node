pipeline {
    agent any
    environment {
        CI = 'true'
        COMPOSE_PROJECT_NAME = "${env.JOB_NAME}-${env.BUILD_ID}"
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker-compose down -v'
                sh 'docker-compose up -d --build'
            }
        }
        stage('Test') {
            steps {
                echo "test ${env.NODE_ENV}"
            }
        }
        stage('Deploy for production') {
            when {
                branch 'master'  
            }
            steps {
                echo 'From master'
                input message: 'Finished using the web site?'
                sh 'docker container stop api_node'
                sh 'docker container rm api_node'
            }
        }
        stage('Deliver for development') {
            when {
                branch 'develop' 
            }
            steps {
                echo 'Build from develop'
            }
        }
    }

    post {
        // always {
        //     //archiveArtifacts artifacts: 'build/testfatboar.txt', fingerprint: true
        //     //deleteDir()
        //     echo 'after build'
        //     sh 'docker-compose down'
        //     deleteDir()
        //     //junit 'build/reports/**/*.xml'
        // }
        success {
            echo 'I succeeeded!'
            deleteDir()
        }
        // unstable {
        //     echo 'I am unstable :/'
        // }
        failure {
            echo 'I failed :('
            echo 'after build'
            sh 'docker-compose down'
            deleteDir()
            //mail to: 'carlos.olmedodev@gmail.com',
            //    subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
            //    body: "Something is wrong with ${env.BUILD_URL}"
        }
        changed {
            echo 'Things were different before...'
            //sh 'docker-compose down'
            deleteDir()
        }
    }
}