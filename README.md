To run (raw simple http web-server) code (index_raw.js)):

1. Install node.js in your deivce. Type "node --version" and if you can see the version then node.js is installed in your device.
2. Copy and paste the code in a file named as 'index_raw.js" or download the floder.
3. Go to terminal and from terminal go to your "index_raw.js" file ditectory.
4. Then type "node index_raw.js" to run the code.
5. If you can see "Server in rinning" in your terminal then code is successfully executed in your devise.
6. Go to web browser and type "localhost:8000" there you should see message inside written in res.end("---").
7. To view dynamic routing execution tyoe "localhost:8000/mars" or "localhost:8000/flowers" and you should see the message for corresponding condition.

To create a new web-server using Express.js:

1. Install 'npm'
2. Go to project terminal and type "npm init"
3. Then in terminal give a name yo your package (optional)
4. Then keep pressing Enter, yes
5. Then in terminal type "npm i express" to install express.js
6. Express is now installed in your device.
7. Add code in any js file (i.g. app.js, index.js. Here we used index.js)
8. In code, first require express, then create app with express. You can see full code in index.js.
9. Listen port, add Get methodes with request and response, see in index.js.
10. Run code by typing "node index.js" in terminal. Go to browser and type "localhost:[port no]" as for this project- "localhost:8000".
11. You should see response message in browser.
12. Install Nosdemon to : automate server restarting process. So that you don't need to restart server each time after changing in code.
13. To install Nosdemon, go to terminal and type "npm install nodemon" and press enter. Done nodemon installing.
14. After installing nodemon, go to "package.json" file and find "script"
15. In the "script", there is a 'test" line, add "," at the end of the line and press "Enter" to go to new line
16. Then type ' "start": "nodemon index.js" ' and save, here use your main file instead of "index.js"
17. No go to terminal and type "npm start", now your restart process for this project is automated.
