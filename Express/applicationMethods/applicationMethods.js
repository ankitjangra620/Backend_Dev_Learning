const express = require('express');
const router = express.Router({
    // It can also use some options to customise the behaviour
    caseSensitive: true,
    mergeParams: true,
})

// they are local in nature
// app.param method to use the parameters
router.param('id', (req, res, next) => {
    // console.log("M1 proc",app.locals.title);
    req.title = "Fuck off"
    next();
})

// Express json middleware
// used to modify and parse the request json based on the Content-type
router.use(express.json({
    // These are the options available for the json body parse express middleware
    limit: "500kb", //limit the size of the json
    reviver: (key, value) => {
        // Log to demonstrate reviver is being called
        // console.log(`Reviving key: ${key}, value: ${value}`);
        // Modify specific keys or values if needed
        if (key === 'targetKey') {
            return `Modified: ${value}`;
        }
        return { "name": "Ankit Jangra" };
    }, // used for custom json.parse functionality
    type: "*/*",// to provide the content type
    verify: () => {
        return true; // to verify the json or not
    }

}))

// Settig the local variables for the local app and request

router.get('/localVariable/:id-:name', (req, res, next) => {
    req.app.locals.title = "Ankit"
    next();
}, (req, res) => {
    console.log("Params", {
        "id": req.params?.id == 10,
        "params": req.params,
        "baseurl": req.baseUrl,
        "hostname": req.hostname,
        "ip": req.ip,
        "ips": req.ips,
        "method": req.method,
        "path": req.path,
        "protocol": req.protocol,
        "current route": req.route,
        "subdomains": req.subdomains,
    });


    // Set the headers using res.append
    res.append("formId", "Ankit Jangra");

    if (req.params?.id == 10) {
        res.download('./middleware.js', "middlewareFile");
    } else if (req.params.id == 12) {
        res.redirect("https://quality1.supplymint.com/")
    }
    else {

        // the implementation of res.format method.
        res.format({
            html: () => {
                return "HTML Response";
            },
            text: () => {
                return "Text Response"
            }
        })

        res.links({
            "next": "https://quality1.supplymint.com/"
        })

        // these both will be same due to overriding
        res.json({
            "reqLocal": req.app.locals.title,
            // "appLocal" : req.mainApp.locals.title
            "appLocalTitleUsingAppParam": req.title || "Not Defined",
        })
    }
})


router.post('/', (req, res) => {
    res.json(req.body)
})

module.exports = router