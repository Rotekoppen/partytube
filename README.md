# PartyTube
Simple light Youtube video requesting system, for playing them on a big screen

## Setup

Install nodejs and npm

arch ```pacman -S nodejs npm```

ubuntu ```apt-get install nodejs npm```

Download the repo

```git clone https://github.com/Rotekoppen/partytube/```

Download the required modules

```npm clean-install```

Run

```node index.js```

profit

## Usage

After starting the server, open the website ```serverIp:3000/admin/view/``` on your big screen.

Then on the other devices visit ```serverIp:3000/```

To take control over the video playback visit ```serverIp:3000/admin/panel/```

You can also spesify a spesific ip at the end of your link by adding a ```?``` followed by the Ip

```serverIp:3000/?IpToConnectTo```
