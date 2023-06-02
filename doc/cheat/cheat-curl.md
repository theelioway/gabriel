# Cheat curl

- <https://regexr.com/33dtg>

## Basics

```
curl -X POST http://localhost:5000/auth/Thing/signup -d name=god -d username=god -d password=letmein

set LOGIN (curl -X POST http://localhost:5000/auth/login -d  strategy=local -d username=ant@ft.com -d password=letmein)

set TOK (string match -r '(?<=tokenId\"\:\").*(?=\"\})' $AUTH_RES)

set TOKEN (string match -r '(?<=accessToken\"\:\").[^\\"]*(?=\")' $LOGIN)

set AUTHTOKEN "Authorization: Bearer $TOKEN"

curl -X GET -H "Authorization: $TOKEN" http://localhost:5000/Thing/$TOKEN

curl -X GET -H "Authorization: $TOKEN" http://localhost:5000/Thing/5f215e86027b267a40dcb34c -O ~/Documents/output.json

curl -X DELETE -H "Authorization: $TOKEN" http://localhost:5000/Thing/5f215e86027b267a40dcb34c

curl -X POST -H "Authorization: $TOKEN" http://localhost:5000/Thing -d name="elioThing"

curl -X PATCH -H "Authorization: $TOKEN" http://localhost:5000/Thing/5f215e86027b267a40dcb34c -d name="elioThing"

curl -X PATCH -H "Authorization: Token $TOKEN" http://localhost:8000/back/api/0.1/trainings/1/ -d '{ "evidence": [1,2], totalHours: 3 }'

 curl -X PATCH  -H "Content-Type: application/json" http://localhost:5000/Thing/5f4ae2eb52699e1b2a5b11d6/ -d '{ "name": "God" }'

curl -X PATCH  -H "Content-Type: application/json" http://localhost:5000/Thing/5f4ae2eb52699e1b2a5b11d6/ -d '{ "permits": {"get": "ANON", "create": "ANON", "update": "ANON"   } }'
```

## Convert

- <https://curl.trillworks.com/#node-request>

```
curl -s --user api:$MG_KEY https://api.mailgun.net/v3/$MG_DOMAIN/messages -F from='mailgun@elioway.com' -F to=$MG_AUTH_RECIPIENT -F subject='Hello' -F text='Testing'
```
