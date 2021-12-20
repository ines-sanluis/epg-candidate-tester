# Candidate-Tester
This Repo aims to complete the [Norigin Media candidate task](https://github.com/NoriginMedia/candidate-tester) to apply for the position of Frontend developer.

In order to complete the task, a single screen web was developed using VueJS and the **Mock-Api** package supplied. At the moment, it has two responsive screens:
* A EPG Screen, available under `/epg`
* A Program Details Screen, available under `/program-details`

Please note: it would make sense for the program details screen to be opened every time the user clicks on a program from the EPG Screen. However, due to time restrictions this interaction was not implemented. At the moment it always shows information of the same program (`dummy_program_id`).
## System Requirements

* Docker
* Nodejs

### Node

https://nodejs.org/en/

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Docker

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

## Launch
### Docker
The application will be available on port 8080
```
docker-compose up -d
```

## Development

**FE**: port 8080
```
cd fe
npm install
npm run serve -- --port 8080
```

**BE**: port 1337
```
cd be
npm install
npm run start
```

In Visual Studio Code, these commands are configured as task `fe` and task `be`. It is possible to run both of them by writing `Tasks: Run Build Task` on the Command Palette.