# react-demos

From [React Course - Beginners Tutorial for React Javascript Library [2022]](https://www.youtube.com/watch?v=bMknfKXIFA8)

_Credit: [FreeCodeCamp.org](http://freecodecamp.org) and [Learn React via Scrimba](https://scrimba.com/learn/learnreact)_

**Note:** react1-4 use local babel transpilers  
everything else is built using local `npm` server (with `create-react-app NAME`)  
(in fact, my favorite "new project" command is `npx create-react-app NAME && cd "$_" && npm start`)

# Publically Available Demos

>## Capstone Projects
- [Solo Project 1: Static Business Card](https://kode29-react-bizcard.surge.sh/)
- [Solo Project 2: Travel Blog](https://kode29-react-traveljournal.surge.sh/)

>## In-Course Projects
- [AirBnb Clone](https://kode29-react-airbnb.surge.sh/)
- [Meme Generator](https://kode29-react-meme.surge.sh/)
- [Notes App](https://kode29-react-notes.surge.sh/)

>## Practice Modules
- [Fun Facts about React](https://kode29-react-project1.surge.sh/)
- [addItem React Practice](https://kode29-react-additem.surge.sh/)
- [favCard React Practice](https://kode29-react-favcard.surge.sh/)
- [Bubble Add - React Practice](https://kode29-react-bubbleadd.surge.sh/)
- [Boxes Challenge - React Practice](https://kode29-react-boxes.surge.sh/)
- [Joke Challenge - React Practice](https://kode29-react-jokes.surge.sh/)
- [Forms Challenge - React Practice](https://kode29-react-forms.surge.sh/)
- [Forms Practice - React Practice](https://kode29-react-forms-practice1.surge.sh/)
- [API Call Practice 1](https://kode29-react-api1.surge.sh)
- [Window API useEffect() practice](https://kode29-react-window.surge.sh)

## TODO
Subdomain: [FOLDER]
Set up script to automatically query Cloudflare for DNS records of subdomain [FOLDER]
If no DNS record for subdomain, create one
Query the Server to see if the subdomain has been created
If not, create a subdomain configuration file
Reload apache
rsync -av . kyle@d.q5i.co:/var/www/vhosts/kylemperkins.com/[FOLDER]/
