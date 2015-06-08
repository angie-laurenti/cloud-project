Cloud-Project
=============

#En Local

###Pour installer le projet :
```
git clone git@github.com:maxguereva/cloud-project.git && cd cloud-project && npm install
```

###Pour lancer le serveur :
```
node bin/server.js
```

###Pour lancer les tests :
```
gulp test
```
#Sur Google Cloud Plateform

###Startup Script


```
sudo apt-get update && apt-get upgrade
sudo apt-get install -y curl git
sudo curl -sL https://deb.nodesource.com/setup | bash -
sudo apt-get install -y nodejs
cd /tmp
git clone https://github.com/maxguereva/cloud-project.git
cd cloud-project
npm install
node ./bin/server.js
```

###URL

```
http://104.199.134.111/hello/Ysance
```

