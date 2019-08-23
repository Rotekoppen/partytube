# PartyTube
Simple tiny cross-platform Youtube video requesting system, with graphical user interfaces, for playing them on a big screen

Lincenced under the WTFPL licence http://www.wtfpl.net/

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

# Warning

This program is not suited for large scale use, as everyone can access the admin control panel.

This program doesn't tackle 2 big screens yet. Planned for the future is slave screens
