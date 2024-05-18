<!-- Express js documentation -->

Q1 : What is express? what are its advantages and disadvantages?
Q2 : How Routing works in express. is express a class, what is const app = express();
Q3 : What are the routing methods available in express? what are there syntax? What is the usage of app.all function?.
Q4 : What is the signigficance of app.use() function, provide an example?
Q5 : Explain the significance of these routes pattrens?
Q6 : What are request parameters and what does req.params() do?
Q7 : What is the syntax to pass the multiple callback / middleware to a route.
Q8 : What are the response methods that are available in an route function?
Q8 : What does the res.redirect method does? and also tell about sendFile(), sendStatus()?
Q9 : How to handle the multiple methods for a single route with app.route()? How do we handle the nested routing?
Q10 : What are middleware? what is the significance of app.use and whay is the sequence of the middlewares are important? What are custom middlewares?
Q11 : What are the types of middlewares that are available inside the express js?

Q12 : What do you mean by express api overriding? What are the advantages of api overriding?
Q13 : What is the usages of Object.defineProperty function? what is its syntax?
Q14 : What are template engines in express js?

Q15 : How do we handle the error handling inside expressjs?. why we use the custom error handler? where we define oru custom error handler?
Q16 : How do we handle the custom trust proxy in express?
Q17 : What is the significance of these express middleware, their use and syntax?
    a. express.json()
    b. express.text();
    c. express.urlencoded();
    <!-- Note : These are the three middlewares used inside the express backend dev -->

Q18 : What is the application object? Explain the properties of the app object?
    a. app.locals and req.app.locals.
    b. app.mountPath  <!-- How to handle sub app in express.  -->
    c. app.on(event, callback) -> event = mount,
    d. app.all(route, callback array)  <!-- What are the usages of app.all method -->
    e. app.delete(route, callback)
    f. app.disable(key, value), app.disabled(key), app.enable(key, value), app.enabled(key), app.set, app.get
    g. app.engine(extension, callback -> require statement for engine);
    e. app.param method.
    f. app.use([route1_pattren, route2_pattern], callback);

Q19 : What is the parameters available for request? What are thier syntax and usages?
    a. req.app || req.app.get('');
    b. req.baseUrl , req.hostname, req.ip, req.ips, req.method, req.path,
    c. req.body , req.cookies, 

Q20 : What are the parameters and methods available for the response object? What are their syntax and usages?
    a. res.append(key , value) //to set up the headers value
    b. res.attachement()//set content type to file.
    c. res.cookie()
    d. res.download // It will promt the user to download the file?
    e. res.end, res.status,
    f. Difference between res.json and res.jsonp methods?
    g. res.links, res.location.
    h. res.redirect. -> it supports relative path, .. and back.
    i. res.send vs res.sendFile