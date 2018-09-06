var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require("path");
var session = require('express-session');
var fileUpload = require('express-fileupload')
var studentID = 1;
var currentStudent;
var multer  = require('multer')
var upload = multer({ dest: 'public/images/upload_images' })
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/swag-shop');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'pecoldbinstance.ckswo7fwkpjx.us-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'root',
  password: 'RDorame945$',
  database: 'pecol'
});

// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'CraftCode1234.',
//   database: 'pecol'
// });
app.use(session({
  secret: 'ssshhhhh'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

     //
      //res.setHeader('Access-Control-Allow-Origin', 'http://pecol.net');

     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');


    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//app.use(require('./routes'));

connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});

var sess;


/**************  ADD NEW ACTIVITY  ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/actividad', function(req, res) {
  sess = req.session;
  console.log(sess.userid);
  res.sendFile(path.join(__dirname + '/actividad.html'));
  //__dirname : It will resolve to your project folder.
});




//get all courses of a student is already subscripted
app.get("/ListCourses/:id", function(req, res) {
var paramid = req.param("id");

  sql = "SELECT DISTINCT course.idCourse, course.nameCourse, course.introCourse, course.longDescription FROM subscript INNER JOIN course ON subscript.idCourse = course.idCourse INNER JOIN student ON subscript.idStudent = student.idStudent WHERE subscript.idStudent = '" + paramid + "'";

  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);




    if (err) {
      return res.serverError(err);
    }

      return res.send(records);

  });

});


app.get("/allStudent", function(req, res) {
var paramid = req.param("id");

  sql = "SELECT * FROM student";

  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);



    if (err) {
      return res.serverError(err);
    }


        return res.send(records);

  });

});

app.get("/AllTeacher", function(req, res) {
var paramid = req.param("id");

  sql = "SELECT * FROM teacher";

  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);



    if (err) {
      return res.serverError(err);
    }


        return res.send(records);

  });

});

app.get("/AllCourses", function(req, res) {
var paramid = req.param("id");

  sql = "SELECT * FROM course";

  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);



    if (err) {
      return res.serverError(err);
    }


        return res.send(records);

  });

});

app.get("/AllModule", function(req, res) {
var paramid = req.param("id");

  sql = "SELECT * FROM module";

  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);



    if (err) {
      return res.serverError(err);
    }


        return res.send(records);

  });

});
app.get("/AllLinks", function(req, res) {
var paramid = req.param("id");

  sql = "SELECT * FROM link";

  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);



    if (err) {
      return res.serverError(err);
    }


        return res.send(records);

  });

});


//get all rules
app.get("/rules", function(req, res) {
var paramid = req.param("id");
  sql = "select * from rule ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);




    if (err) {
      return res.serverError(err);
    }

	return res.send(records);

  });

});

app.get("/advertisements", function(req, res) {
var paramid = req.param("id");
  sql = "select * from advertisement ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);




    if (err) {
      return res.serverError(err);
    }

return res.send(records);

  });

});
//Get all teacher

app.get("/teacher", function(req, res) {
var paramid = req.param("id");
  sql = "select * from teacher ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);




    if (err) {
      return res.serverError(err);
    }
	return res.send(records);

  });

});

//Create teachers

app.post("/createTeacher", upload.single('image'), function (req, res, next) {
    console.log("BODY" , req.file, req.body)
  var paramid = req.body.idTeacher
  var nameTeacher = req.body.nameTeacher
  var emailTeacher = req.body.emailTeacher
  var nombreMateria = req.body.nombreMateria
  var descriptionSubject = req.body.descriptionSubject
  var mimeType = req.body.mimetype

 var file = req.file;
 console.log("File obteaineddd", file)
 var img_name=file.filename;
 var host = "http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/images/upload_images/"
  host += img_name



      console.log("saved file", img_name)

  sql = "INSERT INTO teacher VALUES (" + paramid + ",'" + nameTeacher + "','" + emailTeacher + "','" + nombreMateria + "','" + descriptionSubject + "','" + host +"')";
  console.log("sql", sql)
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});

app.post("/deleteTeacher", upload.single('image'), function (req, res, next) {
  console.log("ID TO DELTE", req.param("idTeacherDelete"))
  var idTeacher = req.param("idTeacherDelete");



  sql =  "DELETE FROM teacher where idTeacher = '" + idTeacher + "'";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered", result);

    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });


});


app.post("/modifyTeacher", upload.single('image'), function (req, res, next) {


  var paramid = req.body.idTeacherModify
  var nameTeacher = req.body.nameTeacherModify
  var emailTeacher = req.body.emailTeacherModify
  var nombreMateria = req.body.nameSubjectModify
  var descriptionSubject = req.body.descriptionSubjectModify
  var mimeType = req.body.mimetype

 var file = req.file;
 console.log("File obteained", file)
 var img_name=file.filename;
 var host = "http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/images/upload_images/"
  host += img_name


      console.log("saved file", img_name)



sql = "UPDATE teacher SET nameTeacher = '" + nameTeacher + "', emailTeacher = '" + emailTeacher + "' , nombreMateria = '" + nombreMateria + "' , descriptionSubject = '" + descriptionSubject +  "' , contentImage = '" + host +  "' WHERE idTeacher = '" + paramid + "' ";
  connection.query(sql, function(err, rows, fields) {
    //connection.end();
    if (!err) {
      //  res.send('User added to database with ID: ' + rows);
      console.log('Curso con id ' + sql + " modificado");
      return true;

    } else {
      console.log('Error while performing Query.');
      return false;
    }

  });

});


//Create Rule

app.post("/createRule", upload.single('image'), function (req, res, next) {

  var paramid = req.body.idRule
  var nameRule = req.body.nameRule
  var descriptionRule = req.body.descriptionRule

  // sql = "INSERT INTO student VALUES ('" + idStudent + "','" + nameStudent + "','" + age + "','" + email + "','" + password + "')";


  sql = "INSERT INTO rule VALUES ('" + paramid + "','" + nameRule + "','" + descriptionRule + "')";
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});


//Create course

app.post("/createCourse", upload.single('image'), function (req, res, next) {

  var paramid = req.body.idCOURSE
  var nameCourse = req.body.nameCourse
  var introCourse = req.body.introCourse


  sql = "INSERT INTO course VALUES ('" + paramid + "','" + nameCourse + "','" + introCourse +"' , null)";
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);




    if (err) {
      return res.serverError(err);
    }



   return res.send(records);

  });


});

app.post("/createSubscription",  function (req, res, next) {

  var paramid = req.param("idCourseCSubscription");
  var studentid = req.param("idStudentCSubscription");



  sql = "INSERT INTO subscript VALUES ('" + studentid + "' ,'" + paramid + "')";
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});


app.post('/deleteSubscription', function(req, res, next) {
  console.log("ID TO DELTE", req.param("idCourseDSubscription"))
  var idStudent = req.param("idStudentDSubscription");
  var idCOURSE = req.param("idCourseDSubscription");

  console.log(idStudent, idCOURSE)

  sql =  "DELETE FROM subscript where idStudent = '" + idStudent + "' AND idCourse =  '" + idCOURSE + "'";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered", result);
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });

});


//Create linnk

app.post("/createLink", upload.single('image'), function (req, res, next) {

  var paramid = req.body.nameEnlace
  var urlEnlace = req.body.urlEnlace



  sql = "INSERT INTO link VALUES ('" + paramid + "','" + urlEnlace + "')";
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});

//Get all Links

app.get("/getLinks", function(req, res) {
var paramid = req.param("id");
  sql = "select * from link ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);




    if (err) {
      return res.serverError(err);
    }

    return res.send(records);

  });

});


//Get all the modules of a course of a certain student

app.get("/courseModules/:id", function(req, res) {
  var paramid = req.param("id");
  sql = "SELECT * from  module where idCourse = '" + paramid + "' ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);

    return res.send(records);
    if (err) {
      return res.serverError(err);
    }
  });

});

//Details about an specific module

app.get("/currentModule/:id", function(req, res) {
  var paramid = req.param("id");
  sql = "SELECT * from  module where idModule = '" + paramid + "'";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

//Create modules

app.post("/createModule", upload.single('image'), function (req, res, next) {
    console.log("BODY" , req.file, req.body)
  var paramid = req.body.idModule
  var nameModule = req.body.nameModule
  var moduleDescription = req.body.moduleDescription
  var idCourse = req.body.idCourseModule

  var mimeType = req.body.mimetype

 var file = req.file;
 console.log("File obteained", file)
 var img_name=file.filename;
 var host = "http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/images/upload_images/"
  host += img_name


      console.log("saved file", img_name)
      // sql = "INSERT INTO teacher VALUES (" + paramid + ",'" + nameTeacher + "','" + emailTeacher + "','" + nombreMateria + "','" + descriptionSubject + "','" + host +"')";

  sql = "INSERT INTO module VALUES ('" + paramid + "','" + nameModule + "','" + moduleDescription + "','" + idCourse + "','" + host +"')";
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});

app.post('/deleteModule', function(req, res, next) {
  console.log("ID TO DELTE", req.param("idDeleteModule"))
  var idStudent = req.param("idDeleteModule");


  console.log(idStudent)

  sql =  "DELETE FROM module where idModule = '" + idStudent + "'";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered", result);
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });

});


app.put('/modifyModule', upload.single('image'), function(req, res, next) {
  console.log("ID TO DELTE", req.param("idDeleteModule"))
  console.log("BODY" , req.file, req.body)
var paramid = req.body.idModule
var nameModule = req.body.nameModule
var moduleDescription = req.body.moduleDescription
var idCourse = req.body.idCourseModule

var mimeType = req.body.mimetype

var file = req.file;
console.log("File obteained", file)
var img_name=file.filename;
var host = "http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/images/upload_images/"
host += img_name

  sql =  "UPDATE module SET nameModule = '" + nameModule + "', moduleDescription = '" + moduleDescription + "' , idCourse = '" + idCourse + "', contentImage = '" + host + "' WHERE idModule = '" + paramid + "' ";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered", result);
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });

});


app.post("/createAccount",  function (req, res, next) {

  var totalcredit = req.param("totalCredit");
  var exigibleCredit = req.param("exigibleCredit");
  var interests = req.param("interests");
  var limitDate = req.param("limitDate");
  var idStudentAccount = req.param("idStudentAccount");




  sql = "INSERT INTO accountStudent (saldoTotal, saldoExigible, intereses, limitDate, idStudent) VALUES ('" + totalcredit + "' ,'" + exigibleCredit + "' ,'" + interests + "' ,'" + limitDate + "' ,'" + idStudentAccount + "')";
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});

app.get("/getPersonnelAccount/:id", function(req, res) {
  var paramid = req.param("id");
  sql = "SELECT * from  accountStudent where idStudent = '" + paramid + "'";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

app.post("/createAdvertisement", upload.single('image'),   function (req, res, next) {

  var title = req.param("title");
  var description = req.param("description");
  var dated = req.param("dated");
  var image = req.param("image");



  var mimeType = req.body.mimetype

 var file = req.file;
 console.log("File obteained", file)
 var img_name=file.filename;
 var host = "http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/images/upload_images/"
  host += img_name





  sql = "INSERT INTO advertisement (title,description,dated, image)  VALUES ('" + title + "' , '" + description + "' , '" + dated + "' , '" + host +  "')";
  console.log("sql",sql)
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});

app.post("/deleteAdvertisement",  function (req, res, next) {

  var title = req.param("titleDelete")





  sql =  "DELETE FROM advertisement where title = '" + title + "' ";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered",result);
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });


});


app.post("/deleteAccount",  function (req, res, next) {

  var paramid = req.param("idStudentAccountDelete");



  sql =  "DELETE FROM accountStudent where idStudent = " + paramid + " ";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered"), result;
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });


});

app.post("/modifyAccount",  function (req, res, next) {

  var totalcredit = req.param("totalCreditModify");
  var exigibleCredit = req.param("exigibleCreditModify");
  var interests = req.param("interestsModify");
  var limitDate = req.param("limitDateModify");
  var idStudentAccount = req.param("idStudentAccountModify");



sql = "UPDATE accountStudent SET saldoTotal = '" + totalcredit + "', saldoExigible = '" + exigibleCredit + "' , intereses = '" + interests + "' , limitDate = '" + limitDate +  "' WHERE idStudent = '" + idStudentAccount + "' ";
  connection.query(sql, function(err, rows, fields) {
    //connection.end();
    if (!err) {
      //  res.send('User added to database with ID: ' + rows);
      console.log('Curso con id ' + idStudentAccount + " modificado");
      return true;

    } else {
      console.log('Error while performing Query.');
      return false;
    }

  });


});


//Get all definitions

app.get("/definitions", function(req, res) {

  var paramid = req.param("id");
  sql = "SELECT * from  DEFINITION";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});


app.get("/allCourses", function(req, res) {
  var paramid = req.param("id");
  sql = "SELECT * from  COURSE";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});


app.post('/loginPecol', function(req, res, next) {
  var flag = true;


  if (req.body.username && req.body.password) {
  console.log("BODYYYY", req.body);
    sql = "select * from student";
    connection.query(sql, function(err, rows) {
      //connection.end();
      if (!err) {
        //  res.send('User added to database with ID: ' + rows);
        for (var i = 0; i < rows.length; i++) {
           console.log('idStudent: ', rows[i].nameStudent, rows[i].password);
           console.log('idStudent: ', rows[i]);
          if (rows[i].nameStudent == req.body.username && rows[i].password == req.body.password) {

            // currentStudent = rows[i].idStudent;

            return res.send({
              idStudent: rows[i].idstudent,
              records: rows[i],
              status: 200
            });
          }

        }

      } else {
        console.log('Error while performing Query.');
        return err;
      }

    });
    // Already logged in.
  } else {
    console.log("Anorhwr one")
    //res.redirect('/login');

  }

});


app.post('/signupStudent', function(req, res, next) {
  var idStudent = req.param("id");
  var nameStudent = req.param("nameStudent");
  var age = req.param("age");
  var email = req.param("email");
  var password = req.param("password");
  console.log(idStudent, nameStudent, age, email, password)
  sql = "INSERT INTO student VALUES ('" + idStudent + "','" + nameStudent + "','" + age + "','" + email + "','" + password + "')";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered", res);
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });

});

app.post('/deleteStudent', function(req, res, next) {
  console.log("ID TO DELTE", req.param("idDelete"))
  var idStudent = req.param("idDelete");

  sql =  "DELETE FROM student where idstudent = '" + idStudent + "' ";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered"), result;
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });

});

app.post('/deleteRule', function(req, res, next) {
  console.log("ID TO DELTE", req.param("idDelete"))
  var idRule = req.param("idDelete");

  sql =  "DELETE FROM rule where idRule = " + idRule + " ";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Student registered"), result;
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;
  studentID++;
  return res.send({
    status: 200

  });

});


app.post('/deleteCourse', function(req, res, next) {
  console.log("ID TO DELTE", req.param("idDelete"))
  var idStudent = req.param("idDelete");

  sql =  "DELETE FROM course where idCourse = '" + idStudent + "' ";
  connection.query(sql, function(err, result) {
    if (err)
      return err;
    res = result;
    console.log("Course deleted"), result;
    //res.send("Created "+JSON.stringify(result));
  });
  // STUDENT.counter ++;

  return res.send({
    status: 200

  });

});

app.put('/modifyCourse', function(req, res, next) {
  var idModify = req.param("idModify")
  var nameCourse = req.param("nameModify")


sql = "UPDATE course SET nameCourse = '" + nameCourse + "' WHERE idCourse = '" + idModify + "' ";
connection.query(sql, function(err, rows, fields) {
  //connection.end();
  if (!err) {
    //  res.send('User added to database with ID: ' + rows);
    console.log('Curso con id ' + idModify + " modificado");
    return true;

  } else {
    console.log('Error while performing Query.');
    return false;
  }

});


});



app.put('/modifyRule', function(req, res, next) {
  var idModify = req.param("idModify")
  var nameCourse = req.param("nameModify")
  var desc = req.param("descriptionModify")

sql = "UPDATE rule SET title = '" + nameCourse + "', description = '" + desc + "' WHERE idRule = '" + idModify + "' ";
connection.query(sql, function(err, rows, fields) {
  //connection.end();
  if (!err) {
    //  res.send('User added to database with ID: ' + rows);
    console.log('Curso con id ' + idModify + " modificado");
    return true;

  } else {
    console.log('Error while performing Query.');
    return false;
  }

});


});

//Module


app.put('/modifyStudent', function(req, res, next) {
  var idModify = req.param("idModify")
  var nameStudent = req.param("nameModify")
  var ageModify = req.param("ageModify")
  var emailModify = req.param("emailModify")
  var passwordModify = req.param("passwordModify")

sql = "UPDATE student SET nameStudent = '" + nameStudent + "', age = " + ageModify + " , email = '" + emailModify + "', password = '" + passwordModify + "' WHERE idStudent = '" + idModify + "' ";
connection.query(sql, function(err, rows, fields) {
  //connection.end();
  if (!err) {
    //  res.send('User added to database with ID: ' + rows);
    console.log('Estudiante con id ' + idModify + " modificado");
    return res.send({
      status: 200

    });

  } else {
    console.log('Error while performing Query.');
    return false;
  }

});


});







app.get("/activities/:id", function(req, res) {

  var paramid = req.param("id");
  sql = "SELECT * from  activityPecol where idModule = '" + paramid + "' ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});


app.get("/getAllGrades", function(req, res) {
  var paramid = req.param("id");
  sql = "SELECT * from  normalGrade ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

app.get("/activitiesOne/:id/:idAct", function(req, res) {
  var paramid = req.param("id");
  var paramact = req.param("idAct")
  sql = "SELECT * from  activityPecol where idModule = '" + paramid + "' AND idActivity = '" + paramact + "' ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});


app.post("/createActivites", upload.single('image'),   function (req, res, next) {

  var title = req.param("idACTIVITY");
  var description = req.param("nameActivity");
  var dated = req.param("typeActivity");
  var image = req.param("idModule");
  var order = req.param("order");


//RDorame945$

  var mimeType = req.body.mimetype

 var file = req.file;
 console.log("File obteained", file)
 var img_name=file.filename;
 var host = "http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/images/upload_images/"
  host += img_name




  sql = "INSERT INTO activityPecol VALUES ('" + title + "' , '" + description + "' , '" + dated + "' , '" + image +  "', '" + host +  "', " + order  +  " )";
  console.log("sql",sql)
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });


});

//gET QUESTION AND ANSWER OF CROSSWORD, FREE QUESTION

app.get("/qa/:id", function(req, res) {
  var paramid = req.param("id");

  sql = "  SELECT * FROM activityPecol INNER JOIN question_answer ON activityPecol.idActivity = question_answer.idActivity where activityPecol.idActivity = '" + paramid + "'";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

app.get("/getVideo/:id", function(req, res) {
  var paramid = req.param("id");

  sql = "  SELECT * FROM video_actividad where idActivity = '" + paramid + "'";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar video: "+records);




    if (err) {
      return res.serverError(err);
    }

      return res.send(records);

  });

});


app.get("/getPresentation/:id", function(req, res) {
  var paramid = req.param("id");

  sql = "  SELECT * FROM presentation_actividad where idActivity = '" + paramid + "'";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar video: "+records);




    if (err) {
      return res.serverError(err);
    }

      return res.send(records);

  });

});

app.post("/createNormalGrade", upload.single('image'),   function (req, res, next) {

  var grade = req.param("grade");
  var nameActivity = req.param("nameActivity");
  var typeActivity = req.param("typeActivity");
  var idStudent = req.param("idStudent");





  sql = "INSERT INTO normalGrade VALUES (" + grade + " , '" + nameActivity + "' , '" + idStudent + "' , '" + typeActivity +  "' )";
  console.log("sql",sql)
  connection.query(sql, function(err, records) {
    // Do something
  console.log("Datos al consultar: " + records);



    if (err) {
      return res.serverError(err);
    }


        return res.send(records);

  });


});




app.get("/getActivity/:id", function(req, res) {
  var id = req.param("id");
  sql = "SELECT *, DATE_FORMAT(startDate, '%Y-%m-%dT%H:%i') AS cStartDate, DATE_FORMAT(endDate, '%Y-%m-%dT%H:%i') AS cEndDate from activity where idActivity = " + id + " ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log(records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});


app.post('/updateActivity/:id', function(req, res) {
  var id = req.param("id");
  console.log(req.body);
  //  console.log("Student ID:", studentID);
  ACTIVITY.nameActivity = req.body.nameAct;
  ACTIVITY.placeActivity = req.body.place;
  ACTIVITY.startDate = req.body.startDate;
  ACTIVITY.endDate = req.body.endDate;
  ACTIVITY.typeActivity = req.body.type;
  ACTIVITY.frecuency = req.body.frecuency;
  //
  ACTIVITY.modificarActividad(id, req.body.idStudent, ACTIVITY.nameActivity, ACTIVITY.placeActivity, ACTIVITY.startDate, ACTIVITY.endDate, ACTIVITY.typeActivity, ACTIVITY.frecuency, req.body.grade);
  res.send("Activity modified");

});


/**************  PRESENTATION RENDER and LOGIN RENDER (LOGIN) ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/presentacion.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/inicio-sesion', function(req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
  //__dirname : It will resolve to your project folder.
});

// app.post('/login', function(req, res, next) {
//   sess = req.session;
//   var flag = true;
//   console.log("BODY", req.body);
//
//   if (req.body.email && req.body.password) {
//
//     sql = "SELECT * from student";
//     connection.query(sql, function(err, rows, fields) {
//       //connection.end();
//       if (!err) {
//         //  res.send('User added to database with ID: ' + rows);
//         for (var i = 0; i < rows.length; i++) {
//           if (rows[i].email == req.body.email && rows[i].password == req.body.password) {
//             console.log('idStudent: ', rows[i].idStudent);
//             currentStudent = rows[i].idStudent;
//             sess.userid = rows[i].idStudent;
//             res.send({
//               idStudent: sess.userid,
//               redirect: '/dia'
//             });
//           }
//
//         }
//
//       } else {
//         console.log('Error while performing Query.');
//       }
//
//     });
//     // Already logged in.
//   } else {
//     res.redirect('/login');
//
//   }
//
// });

app.get('/logout', function(req, res, next) {
  //  res.view("/presentacion");
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

/**************  ADD NEW STUDENT  ******+*/

app.use(express.static(__dirname + '/public'));

app.get('/registro', function(req, res) {
  res.sendFile(path.join(__dirname + '/registro.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/student', function(req, res) {
  console.log(req.body);
  STUDENT.nameStudent = req.body.nameStu;
  STUDENT.semesterStudent = req.body.semester;
  STUDENT.careerStudent = req.body.career;
  STUDENT.passwordStudent = req.body.password;
  STUDENT.emailStudent = req.body.email;

  STUDENT.reigsterAccount(STUDENT.nameStudent, STUDENT.semesterStudent, STUDENT.careerStudent, STUDENT.passwordStudent, STUDENT.emailStudent);
  //  res.send("Usuario registrado");
  res.send({
    redirect: '/inicio-sesion'
  });
  //res.redirect("/inicio-sesion");
});

app.post('/updateRating/:id', function(req, res) {
  var id = req.param("id");
  console.log(req.body);
  // console.log("Student ID:", studentID);
  ACTIVITY.modificarRating(id, req.body.rating);
  res.send("Activity modified");
});

app.post('/student', function(req, res) {
  sess = req.session;
  console.log(sess.userid);
  var id = sess.userid;
  console.log(req.body);
  STUDENT.nameStudent = req.body.nameStu;
  STUDENT.semesterStudent = req.body.newSemester;
  STUDENT.careerStudent = req.body.newCareer;
  STUDENT.passwordStudent = req.body.newPassword;
  STUDENT.emailStudent = req.body.email;

  STUDENT.modificarCuenta(id, STUDENT.nameStudent, STUDENT.emailStudent, STUDENT.passwordStudent, STUDENT.semesterStudent, STUDENT.careerStudent);
  res.send("Usuario con id " + id + " modificado");
});

app.get('/student', function(req, res) {
  //STUDENT.checkAccount(5204);
  res.send('User checked to database with ID: ' + STUDENT.checkAccount(5204)[0].idStudent + " " + STUDENT.checkAccount(5204)[0].nameStu);

});

/************** DELETE STUDENT ******+*/

app.use(express.static(__dirname + '/public'));

app.get('/eliminar-estudiante', function(req, res) {
  res.sendFile(path.join(__dirname + '/eliminar-estudiante.html'));
  //__dirname : It will resolve to your project folder.
});

app.delete('/student/delete/:id', function(req, res) {
  var id = req.param("id");
  sql = "DELETE FROM activity where idStudent = " + id;
  connection.query(sql, function(err, result) {
    if (err)
      throw err;
    //res.send("Created "+JSON.stringify(result));
  });
  //sess = req.session;
  STUDENT.deleteAccount(id);
  //res.send("User deleted");
  res.send({
    redirect: '/actividad'
  });
});

/************** DAY CALENDAR ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/dia', function(req, res) {
  sess = req.session;
  res.sendFile(path.join(__dirname + '/dia.html'));
  console.log(sess.userid);
  //__dirname : It will resolve to your project folder.
});

// app.get('/activities', function(req, res) {
//   //STUDENT.checkAccount(5204);
//
//   res.send('Activities: ' + ACTIVITY.getAllActivities()[0].place);
//   console.log(ACTIVITY.getAllActivities());
//
// });

/************** Charts Section ******+*/

app.use(express.static(__dirname + '/public'));


/************** Render sections when user is logged *******/

app.get('/graficas', function(req, res) {
  sess = req.session; //Current user
  res.sendFile(path.join(__dirname + '/grafica.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/semana', function(req, res) {
  res.sendFile(path.join(__dirname + '/semana.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/mes', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/actualizarRegistro', function(req, res) {
  res.sendFile(path.join(__dirname + '/actualizarRegistro.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/actualizarActividad', function(req, res) {
  res.sendFile(path.join(__dirname + '/actualizarActividad.html'));
  //__dirname : It will resolve to your project folder.
});

/**************  MODELS (Student, Activity) ******+*/
var STUDENT = (function() {
  //STUDENT.counter = (STUDENT.counter || 1);

  //Create unique id

  var res;
  var nameStudent;
  var semesterStudent;
  var careerStudent;
  var passwordStudent;
  var emailStudent;
  var row;

  return {
    checkAccount: function(id) {

      sql = "SELECT * from student where idStudent = " + id + " ";
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          row = rows;
          console.log('The solution is: ', rows);

        } else {
          console.log('Error while performing Query.');
        }

      });
      return row;
    },

    reigsterAccount: function(n, s, c, p, e) {

      sql = "INSERT INTO student VALUES (" + studentID + ",'" + n + "','" + s + "','" + c + "','" + p + "','" + e + "')";
      connection.query(sql, function(err, result) {
        if (err)
          return err;
        res = result;
        console.log("Student registered");
        //res.send("Created "+JSON.stringify(result));
      });
      // STUDENT.counter ++;
      studentID++;
      return res;

    },

    modificarCuenta: function(id, n, e, p, s, c) {
      sql = "UPDATE Student SET nameStu = '" + n + "', email='" + e + "', password = '" + p + "', semester = '" + s + "', career = '" + c + "' WHERE idStudent = " + id;
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          console.log('Estudiante con id ' + id + " modificado");
          return true;

        } else {
          console.log('Error while performing Query.');
          return false;
        }

      });
    },

    deleteAccount: function(id) {

      sql = "delete from student where idStudent = " + id + " ";
      connection.query(sql, function(err, result) {
        if (err)
          throw err;
        //res.send("Created "+JSON.stringify(result));
      });
    }
  };
})();

var ACTIVITY = (function() {
  // ACTIVITY.counter = (ACTIVITY.counter || 1);
  var activityID = 20; //Create unique id
  var nameActivity;
  var placeActivity;
  var startDate;
  var endDate;
  var typeActivity;
  var frecuency;
  var row;

  return {
    checkAccount: function(id) {

      sql = "SELECT * from activity where idActivity = " + id + " ";
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          row = rows;
          console.log('The solution is: ', rows);

        } else {
          console.log('Error while performing Query.');
        }

      });
      return row;
    },

    modificarRating: function(id, g) {
      console.log("Modiifcando actividad");
      sql = "UPDATE activity SET grade = " + g + " WHERE idActivity = " + id + " order by grade LIMIT 1";
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          console.log('Actividad con id ' + id + " modificado");
          return true;

        } else {
          console.log('Error while performing Query.');
          return false;
        }

      });
    },

    modificarActividad: function(id, idS, n, p, s, e, t, f, g) {
      console.log("Modiifcando actividad");
      sql = "UPDATE activity SET idStudent= '" + idS + "', nameAct = '" + n + "', place='" + p + "', startDate = '" + s + "', endDate = '" + e + "', type = '" + t + "', frecuency = '" + f + "', grade = '" + g + "' WHERE idActivity = " + id;
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          console.log('Actividad con id ' + id + " modificado");
          return true;

        } else {
          console.log('Error while performing Query.');
          return false;
        }

      });
    },

    registerActivity: function(id, n, p, s, e, t, f) {

      sql = "INSERT INTO activity VALUES (" + activityID + ", " + id + ", '" + n + "','" + p + "','" + s + "','" + e + "','" + t + "','" + f + "', " + 0 + ")";
      console.log(sql);
      connection.query(sql, function(err, result) {
        if (err)
          throw err;
        //res.send("Created "+JSON.stringify(result));
        console.log("New activity inserted");
      });
      activityID++;
      // ACTIVITY.counter ++;
    },

    deleteActivity: function(id) {

      sql = "delete from activity where idActivity = " + id + " ";
      connection.query(sql, function(err, result) {
        if (err)
          throw err;
        //res.send("Created "+JSON.stringify(result));
      });
    },

    getAllActivities: function() {
      sql = "SELECT * FROM activity";
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          row = rows;
          console.log('The solution is: ', rows);

        } else {
          console.log('Error while performing Query.');
        }

      });
      return row;
    }
  };
})();

/**************  ADD NEW CONTACT INFO ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/contacto', function(req, res) {
  res.sendFile(path.join(__dirname + '/contacto.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/contact', function(req, res) {

  console.log(req.body);
  connection.query("INSERT into mail SET ?", req.body, function(err, result) {
    if (err)
      throw err;
    console.log(result);
    res.send("Created " + JSON.stringify(result));
  });
  //res.send("Received"+req.body)
});

var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

app.listen(3004, function() {
  console.log("Server running on port 3004!");
});
