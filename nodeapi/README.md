cmd to run app = npm run devStart  
______________________________________________________________________________________

Create server using express and set port 8080 
install express = npm i express

______________________________________________________________________________________  

Separte Routes

Create folder "routes"  
In this folder create ".js" files for each route you want  
```module.exports``` to export specific funtions in a file  


```console.log("the request\n", [req] , "The end..........")``` - to print request  
```console.log("the res\n", [res] , "The end..........")``` - to print response  

Use express's ```express.Router()```  
export the router