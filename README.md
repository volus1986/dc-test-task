**Test task: SPA-application: Orders & Products** 

User can:<br>
1. see Orders & order details
<br>
2. remove Orders
<br>
3. see Products
<br>
4. see number of connected clients
<br>
5. see current date & time

<br>

**Local installation steps:**
1. Install docker (& docker compose if it necessary)
2. Install Node.js & NPM (lts, lartest) for yours OS
3. install git

4. open terminal (in necessary folder)
5. clone repository: git clone https://github.com/volus1986/dc-test-task
6. open repository folder: cd dc-test-task

7. build image: docker compose build --no-cache


**Local run:**
1. docker compose up
2. open site url: http://localhost:3000 (Also you can see this link in console)


**For development also need to install local dependencies (to highlight you code in IDE)**

Install dependencies (run below commands from repository root)

   npm --prefix frontend install

   npm --prefix backend install
   
 
or run command 'npm install' from 'frontend' & 'backend' folders to install necessary dependencies.