Test task: SPA-application: Orders & Products
User can see Orders, remove Orders, see order details
User can see Products


Installation steps:
1. Clone repository https://github.com/volus1986/dc-test-task
2. Install docker (& docker compose if it necessary)


<br>

**For run as prod:**
1. docker-compose -f docker-compose.prod.yml build
2. docker-compose -f docker-compose.prod.yml up -d
3. open site url: http://localhost:3000 (It may be changed after deploy on server)

<br>

**For development install locally:**
1. Install Node.js & NPM (lts, lartest) for yours OS
2. Install dependencies (run below commands from repository root)
       npm --prefix frontend install
       npm --prefix backend install
   or run command 'npm install' from 'frontend' & 'backend' folders to install necessary dependencies.
3. docker compose build

**For run development locally:**
1. docker compose up
2. open site url: http://localhost:3000 (Also you can see this link in console)