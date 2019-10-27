module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-222-254-102.us-east-2.compute.amazonaws.com',
      key: 'C:\playground\nodejs\aws\Administrator-key-pair-ohio.pem',
      ref: 'origin/master',
      repo: 'git@github.com:gugudujn/tutorial-pt-2.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}