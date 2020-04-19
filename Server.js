var http = require ("http");

http.createServer (function (req, res) {

res.writeHead(200,{"Content-type":"text/html"});

var url= req.url;

switch(url){

case"/": { 
 res.write(Home);
 break;
}

case"/settings": {
 res.write(Settings);
 break;

}

}

res.end();


}).listen(3000, function(){
    console.log("El Servidor está funcionando en el puerto 3000");

});

var Home = '<!DOCTYPE html>'+
'<html lang="en">'+
'<head>'+
'    <meta charset="UTF-8">'+
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'    <title>Home</title>'+
'</head>'+
'<body>'+
'    <img src= "https://i.pinimg.com/736x/b3/9b/a7/b39ba761a152e4e6fec9c275515d147f.jpg">'+
'    <h1>Maria Belén Betura</h1>'+
''+
'    <div>'+
'    <img src="https://s3.amazonaws.com/blogs.comedycentral.com-production/wp-content/uploads/sites/58/2016/04/sp-FAQ-butter-girlfriend-blog.jpg">'+
'    <h2>Cositas</h2>'+
'  </div>'+
'    '+
'  <div>'+
'    <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/05/Butters-in-South-Park-3.jpg">'+
'    <h2>Más Cositas</h2>'+
'  </div>'+
''+
'  <div>'+
'    <img src="https://i.ytimg.com/vi/ImYci3uWXbg/maxresdefault.jpg">'+
'    <h2>Muchas más cositas</h2>'+
'  </div>'+
''+
'</body>'+
'</html>';

var Settings = '<!DOCTYPE html>'+
'<html lang="en">'+
'<head>'+
'    <meta charset="UTF-8">'+
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'    <title>Settings</title>'+
'</head>'+
'<body>'+
''+
'<h1>Nombre de Usuario</h1>'+
'<h2>María Belén Betura</h2>'+
'<h3>04/06/1991</h3>'+
''+
''+
'</body>'+
'</html>';
	

	

