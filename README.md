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

Read file using fs(filesystem):

1. Require "fs" after requiring express
2. In the project folder add a file (for example: data.txt and add some text in is. Here I added 10 name of 10 flowers)
3. In the [app.get("/",]- part add fs part to read the data.
4. So, add - [ { fs.readFile("./data.txt", "utf-8", (err, data) => {res.send(data); });] by replacing previous res.send() paer.
5. Now to handle error add this part before res.send- [ if (err) { res.send("There is an error to accessing the data file!")} ]
6. Save and go to browser and see if you can see the file content there. If yes then you are right.
7. Change the file name in code, to wrong name of file, the save and see in browser after refreshing, you should see the error message.
8. Done this part.

Write file using fs(filesystem):

1. Add [app.get("/write",]- part ad fs part to read the data
2. Add- [ app.get("/write", (req, res) => {
   fs.writeFile("./data.txt", "Dhalia", (err) => {
   if (err) {
   res.send("Error writting in file");
   }
   res.send("Data written successifully!");
   });
   });]

3. So, to run that go to browser and type "localhost:8000/write"
4. The above part will write Dhalia in data.txt and remove all the previous contents of this file.
5. To preserve the previous contents in data.txt use appendFile.
6. Copy paste the write part code from app.get(/write) and replace write to append. Replace writeFile with appendFile.
7. Add "\nDhalia" in place of "Dhalia" to make each line in a new line
8. Run with "localhost:8000/write" and "localhost:8000/append" and see result.
9. If you haven't manually crerated data.txt file manually, then write or appendFile creates it own.
10. To know more about fs , in browser go to "https://nodejs.org/api/fs.html" .
11. Done this part.
