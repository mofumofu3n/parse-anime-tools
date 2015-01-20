## Anime-tools

### Usage


1. install parse command

```
curl -s https://www.parse.com/downloads/cloud_code/installer.sh | sudo /bin/bash
```

1. setting config/global.json file

```
{
    "applications": {
        "<APPLICATION NAME>": {
            "applicationId": "<APPLICATION ID>", 
            "masterKey": "<MASTER KEY>"
        }, 
        "_default": {
            "link": "<same APPLICATION NAME>"
        }
    }, 
    "global": {
        "parseVersion": "1.3.3"
    }
}
```

1. deploy parse

```
$ parse deploy
```

1. check log

```
$ parse log
```

1. auto deploy in develop mode

```
$ parse develop
```
