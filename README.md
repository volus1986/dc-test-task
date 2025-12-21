**Test task: SPA-application: Orders & Products** 

<img width="2555" height="547" alt="Screenshot from 2025-12-19 12-42-05" src="https://github.com/user-attachments/assets/d1f40bb0-05c3-4995-b9c0-b983bddd3844" />
<img width="2555" height="790" alt="Screenshot from 2025-12-19 12-42-18" src="https://github.com/user-attachments/assets/e5f46dcc-1178-4a3f-b096-b9e783e04368" />
<img width="2555" height="1070" alt="Screenshot from 2025-12-19 12-42-51" src="https://github.com/user-attachments/assets/5624dad8-49a4-4652-bb31-86be438eff7e" />
<img width="2561" height="1316" alt="Screenshot from 2025-12-19 12-43-33" src="https://github.com/user-attachments/assets/e2c43622-fc49-474b-ae4d-f20af0df6c06" />


<br><br>


**Dev. stack:**
1. React, Typescript
2. Redux, Redux Toolkit, RTK Query, Websocket
3. CSS, Tailwind
4. Docker (ready for deploy as 2 separate containers)

**User can:**
1. see orders & order details
2. remove orders
3. see products & filter them
4. see number of connected clients
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

<br>

**Local run:**
1. docker compose up
2. open site url: http://localhost:3000 (Also you can see this link in console)

<br>

**For development also need to install local dependencies (to highlight you code in IDE)**

Install dependencies (run below commands from repository root)

   npm --prefix frontend install

   npm --prefix backend install
   
 
or run command 'npm install' from 'frontend' & 'backend' folders to install necessary dependencies.
