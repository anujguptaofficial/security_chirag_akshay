const express = require('express');
const app = express();

// X-Powered-By - 
// It tells us which server we are using, if not taken care, it call tell hackers which server we are using, 
// suppose there are some security velnerability in that particular server & hackers are expert into that, 
// so it will be easier for them to hack(where to see? -> under the network tab of inspect, click on the request & under headers, 
// we can see X-Powered-By key).

// Reference Policy - 
// Reference Policy: When we share our linkedin, youtube or any link, to any other platform(youtube to linkdein), 
// the reference policy tells us from where this link is referred from, like my account page or from my cart of ecommerce site etc. 
// where to see? -> under the network tab of inspect, click on the request & under headers, we can see Referer. 
// When we share from where that link came, it included lots of information which can be vulnerable.

// X-Content-Type-Option - 
// This is the content type that is set from the server while sending any documents to the client side. 
// Suppose I am sending the jpg image, & some middle man instead replaced it with some html or script, in that case, 
// in that case browsers use to smart work, it upgrades that html & try to execute, & that's how our system may get attacked.

app.use((req, res, next) => {
    // When we wanna hide the reference of redirected site
    res.setHeader('Referrer-Policy', 'origin')
    // When we wanna hide which server we are using
    res.removeHeader('X-Powered-By');
    // When we wanna tell browser to don't sniff(don't do smart work)
    res.setHeader('X-Content-Type-Option', 'no-sniff')
    next()
})