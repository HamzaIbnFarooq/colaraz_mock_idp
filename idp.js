const express = require('express');
var url = require('url');
const app = express();
const http = require('http');
const port = 3000;


app.get('/', function(req, res) {
 res.send('<h1>Congratulations! The Server Is Working</h1>');
});

app.get('/COLARAZ_APP_LINKS_API', function (req, res) {
    console.log('Requesting User ENDPOINTS')
    console.log(req.originalUrl)
    const urls = {
        "development": "Home/RecommendationsReceived.aspx",
        "management": "Home/PersonalDetails.aspx",
        "settings": "Home/EmpProfilePrivacyOptions.aspx",
        "viewNotifications": "cvsocial/live_notifications/all",
        "ecosystem": "q=wDIdalNZpyrApLORjJnbDtfR4zm65OTsPByUHlZGU50qbTi%2fZvGBFUiJ7oCOGp0TjPRa3EugMZLUtIZVESFCO%2fmtCMbu46fu9kK%2bPuNyfgpJcwYqI%2bvotkdp7Tp5GDCyirtjFDIGuWL9OnOth4vKyL7VJpdc76EnrFyf5PEsVxrNAW4C0ESMB%2fxHL5zO4oGsc%2fPTpUjrM%2bUJH9m8cPPTdznTy%2fUxHvlWhKH713KmnGeeYj0pHk%2fktoRLanU%2bduDhB4Un7IMKRdyp2Ty7%2boP4Fxls3pFegBjQswR%2bS2VNpB6jqRDCjepvWw55GVpqLsqEd3bKF8usGYUsVf0wqx2qIwcWejhW%2bx31MnUde2S6teiB1FQgruaFeucq9KnPPOJG6cloAzOXhJGwJZyWsKDsvHmfWkDKOPfdzgO0IWkC12alrsV7RuaJIwmcKt%2fp0p0nc7Y6Ae%2f69WdhUzOcGQVFtZOdIY6Hl6k1Z1RwrotqOx5DQsYsWRObkhvOZIBjVfTYVb52wYlCQuF4UW4qi1dSkjheKbf4S%2b9kxMMrT2wMxK2fjTylqwbJA9nS5SeqRUVRZrb%2fVCmdEbH6FRUr5InQaVrBgVqPJvem6jDAeytM3%2bC2QghzTWToUwYaX%2b%2fSihQLUBItx%2blWO%2bPrlJtA8CTxnf7tKe%2bX%2fjMIeq9xaplBaage9utNVrbS4y%2bZh3WpGqzgZdVltd3%2f%2buERqzLPn4c4iOwek3Td7dBk1nhwlXa6C8%2fUFgwU2PBOSgBFLsKawgGORUzGiGQ7tP9VmbpGVbx8R79L62wmQ7LaPwNQWEcj0L%2fJW1dJXPl9QE2CWeMcgcEI6RruAVhH0AeYWGtw9hrOYQ%3d%3d",
        "recruiting": "Resources/AvailablePositions.aspx",
        "mentoring": "Mentoring/Dashboard.aspx",
        "recommendations": "Home/RecommendationsReceived.aspx",
        "performance": "",
        "scholarship": "Scholarship/AvailableScholarships.aspx"
    }
    res.json(urls);
})


app.get('/UserInformationApi', function(req, res){
    console.log('Requesting User data')
    console.log(req.originalUrl)
    const employee = {
        'email': 'testuser522@emailnube.com',
        'firstName': 'first1',
        'lastName': 'last1',
        "companyInfo": {
            "name": "UET",
            "url": "a"
        },
        "role": "LMS Admin",
        "elggId": 8011,
        "jobTitle": "Admin43",
        "profilePicture": "http://data.colaraz.net/Fortunate Group of Companies/EmployeePhotos/crop_gyzmo-ceo22082019100401.jpg",
        "profileStrength": {
            "title": "Beginner",
            "color": "#eb7d3c",
            "width": "80%"
        },
    }
    res.json(employee);
})

app.get('/connect/authorize', function (req, res) {
    console.log('Requesting authorization code')
    console.log(req.originalUrl)
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var params = {
        'code': 'CODE',
        'scope': query.scope,
        'state': query.state,
        'session_state': query.session_state
    }
    redirect_url = url.format({
        pathname: query.redirect_uri,
        query: params,
    })

    res.redirect(redirect_url)
})

app.get('/logout', function(req,res){
    console.log('LOGOUT');
    console.log(req.baseUrl)
    res.statusCode=200;
    res.send();
})

app.post('/connect/token', function (req, res) {
    console.log('Requesting authorization token')
    console.log(req.originalUrl)
    res.json({
        "access_token": "TOKEN_3000",
        "id_token": "ID_TOKEN"
    })
})

app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`));

