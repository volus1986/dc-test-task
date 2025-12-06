Installation steps:

1. Clone repository
2. Install docker (& docker compose if it necessary)

<br>

**For run locally:**
1. docker compose build
2. docker compose up
3. open: http://localhost:3000 (Also you can see this link in console)

<br>

**For development:**
1. Install Node.js & NPM (lts, lartest) for yours OS
2. Install dependencies (run below commands from repository root)
       npm --prefix frontend install
       npm --prefix backend install
   or run command 'npm install' from 'frontend' & 'backend' folders to install necessary dependencies.

<br>

**For run prod:**
1. Clone repository
2. docker-compose -f docker-compose.prod.yml build
3. docker-compose -f docker-compose.prod.yml up -d
4. open site url