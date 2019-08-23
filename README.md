# PartyTube
Simple light Youtube video requesting system, with graphical user interfaces, for playing them on a big screen

## Setup

1.  Install nodejs and npm

    arch ```pacman -S nodejs npm```

    ubuntu ```apt-get install nodejs npm```

2.  Download the repo

    ```git clone https://github.com/Rotekoppen/partytube/```

3.  Download the required modules

    ```cd partytube```
    
    ```npm clean-install```

4.  Run

    ```node index.js```

5.  profit

## Usage

After starting the server, open the website ```serverIp:3000/admin/view/``` on your big screen.

Then on the other devices visit ```serverIp:3000/```

To take control over the video playback visit ```serverIp:3000/admin/panel/```

You can also spesify a spesific ip at the end of your link by adding a ```?``` followed by the Ip

```serverIp:3000/?IpToConnectTo```
