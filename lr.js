const mySql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
   const encoder = bodyParser.urlencoded({ extended: false });

// const port = 3009;

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KunalJethva@123',
    database: 'dentalclinic'
});

connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected!');
    }
});

var flag = false;

app.get("/", (req, res) => {
    res.render('../views/main/main', { flag: true})
});

app.get("/adminLogin", function (req, res) {
    res.render('../views/adminLogin/index');
});

var email;
app.post("/login", encoder, function (req, res) {
    email = req.body.email;
    var password = req.body.password;
    connection.query("select * from dentalclinic.loginregister where email = ? and password = ?", [email, password], function (err, result, flag, field) {
        if (result.length > 0) {
            res.render('../views/main/main',{flag: false });
            app.get("/bookAppointment", function (req, res) {
                var proEmail = email;
                var query = "select email from `loginregister` where email = ?";
                connection.query(query,[proEmail],function(err,result){
                    res.render('book', {data: result})
                });
            })
        } else if (err == null) {
            res.render('error', { alert: 'Please Enter Valid Data', flag: true });
        } else {
            console.log(err);
        }
    });
});



app.post("/register", encoder, function (req, res) {
    var name = req.body.regName;
    email = req.body.regEmail;
    var password = req.body.regPassword;
    connection.query("Insert into dentalclinic.loginregister (name,email,password) VALUES ('" + name + "','" + email + "','" + password + "')", function (err, result, flag, field) {
        if (err) {
            res.render('error', { alert: "Email exists, Please Provide Other Mail Id" })
        } else if (result.affectedRows == 1) {
            res.render('../views/main/main', { flag: false });
            app.get("/bookAppointment", function (req, res) {
                var proEmail = email;
                var query = "select email from `loginregister` where email = ?";
                connection.query(query,[proEmail],function(err,result){
                    res.render('book', {data: result})
                });
            })
        } else if (err) {
            console.log(err);
        }
    });
});


app.post("/bookNow", encoder, function (req, res) {
    var bookName1 = req.body.bookName;
    var bookEmail1 = email;
    var mobileNum = req.body.mobNumber;
    var doctorName = req.body.doctorName;
    var service = req.body.service;
    var date = req.body.date;
    var time = req.body.time;
    connection.query("Insert into dentalclinic.bookappointment (name,email,mobNumber,doctorName,service,date,time) VALUES ('" + bookName1 + "','" + bookEmail1 + "','" + mobileNum + "','" + doctorName + "', '" + service + "', '" + date + "', '" + time + "')",
        (error, result, fields) => {
            if (result.affectedRows == 1) {
                res.redirect("/assets/bookAppointment/thank.html");
            }
        });
});

app.post("/adminDental", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var query1 = "select * from dentalclinic.admindata where username = ? and password = ?";
    connection.query(query1, [username, password], (err, data, fields) => {
        if (err) throw err
        if (data.length > 0) {
            connection.query("select * from dentalclinic.bookappointment", function (err, rows) {
                if (err) throw err;
                res.render('../views/adminLogin/admin', { data: rows })
            });
        } else {
            res.render('../views/adminLogin/index', { alertMsg: 'Please Enter Valid Data' });
        }
    });
});

app.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    var deleteQuery = "delete from `bookappointment` where `id`=?";
    var query = mySql.format(deleteQuery, id);
    connection.query(query, function (err) {
        if (err) throw err;
        connection.query("select * from bookappointment", function (err, result) {
            res.render('../views/adminLogin/admin', { data: result });
        })
    });
});

app.get("/profile/:email", function (req, res) {
    var proEmail = email;
    var query = "select email from `loginregister` where email = ?";
    connection.query(query, [proEmail], function (err, result) {
        if (err) throw err;
        var query = "select * from bookappointment where email = ?";
        connection.query(query, [proEmail], function (err, result) {
            res.render("profile", { data: result });
        })
    })
})

app.listen(3008);