# Intake form starter kit

A three-microservice bundle for all Pete's intake form needs. Contains

- nginx proxy so that you can listen safely on port 80 for inbound connections (let Cloudflare terminate SSL for you so you don't have to do the certificate stuff)
- mysql server with a persistent volume to house your data
- instance of the webpack-express-docker template for your headless API

## Getting started

Clone the repo and do 

```bash
bash ./rebuild
```

Once it's up, you can configure MySQL workbench to connect your mysql server, which is listening on port 53306

```
host: localhost
username: root
password: root
port: 53306
```

Once you're in, use workbench to import `./mysql-starter.sql` which will set up your schema and a barebones entries table.

You can test that the service is running by doing 

```bash
curl -X POST http://localhost/api/entry -H "Content-Type: application/json" --data '{"first_name": "TC", "last_name":"McCarthy", "email":"tc.mccarthy1@gmail.com"}'
```

You should get a successful response and you should be able to see the data in the table.

That's it! Start developing

## File descriptions

**build-image** | This script will bake a fresh docker image with all of your code and push it to docker hub using the current timestamp as a tag. Modify this file to reflect the username/repo_name of your image's repo and it will do the rest

**rebuild** | Helpful for rebuilding your docker container locally to rule out issues with missing packages or scrambled mounts due to branch changes.


