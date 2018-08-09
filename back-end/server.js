var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require("path");
var session = require('express-session');
var studentID = 1;
var currentStudent;

//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/swag-shop');
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', port: 3306, user: 'root', password: 'CraftCode1234.', database: 'pecol'});
app.use(session({secret: 'ssshhhhh'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(require('./routes'));

connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});

var sess;

/**************  GET ALL ACTIVITIES ******+*/
app.get("/getGraph", function(req, res) {
  sess = req.session;
  console.log(sess.userid);
  console.log("Req: ", req.query);
  var id = sess.userid; //or use req.param('id')
  var date = req.query.dateC;
  var type = req.query.typeC;
  console.log("ID: ", id);
  console.log(req.query.dateC);
  console.log(req.query.typeC);
  if(type == "D") sql = "select idStudent, nameAct, sum(TIME_TO_SEC(TIMEDIFF(endDate, startDate))/3600) as timeSpent from activity where idStudent = " + id + " AND YEAR(startDate) = "+parseInt(date[0])+" AND MONTH(startDate) = "+parseInt(date[1])+" and DAYOFMONTH(startDate) = "+parseInt(date[2])+" group by nameAct";
  else if(type=="S"){
    sql="select idStudent, nameAct, sum(TIME_TO_SEC(TIMEDIFF(endDate, startDate))/3600) as timeSpent from activity where idStudent = " + id + " AND WEEKOFYEAR(startDate) = "+parseInt(date)+" group by nameAct";
  }
    else sql = "select idStudent, nameAct, SUM((TIME_TO_SEC(endDate) - TIME_TO_SEC(startDate))/3600) as timeSpent from activity where idStudent = " + id+ " AND YEAR(startDate) = "+parseInt(date[0])+" AND MONTH(startDate) = "+parseInt(date[1]) +" group by nameAct";
  console.log(sql);
  connection.query(sql, function(err, records) {
    // Do something
    console.log(records);

    return res.send(records);
    if (err) {
      return res.serverError(err);
    }

  });
});

/**************  ADD NEW ACTIVITY  ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/actividad', function(req, res) {
  sess = req.session;
  console.log(sess.userid);
  res.sendFile(path.join(__dirname + '/actividad.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/activity', function(req, res) {
  sess = req.session;
  console.log(sess.userid);
  console.log(req.body);
//  console.log("Student ID:", studentID);
  ACTIVITY.nameActivity = req.body.name;
  ACTIVITY.placeActivity = req.body.location;
  ACTIVITY.startDate = req.body.start;
  ACTIVITY.endDate = req.body.end;
  ACTIVITY.typeActivity = req.body.optradio;
  ACTIVITY.frecuency = req.body.productivity;
  //
  ACTIVITY.registerActivity(sess.userid, ACTIVITY.nameActivity, ACTIVITY.placeActivity, ACTIVITY.startDate, ACTIVITY.endDate,  ACTIVITY.typeActivity, ACTIVITY.frecuency  );
  res.send("Activity created");

});

/**************  Check Student Account ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/consultar', function(req, res) {
  sess = req.session;
  res.sendFile(path.join(__dirname + '/consultar.html'));
  //__dirname : It will resolve to your project folder.
});


//get all courses of a student is already subscripted
app.get("/ListCourses", function(req, res) {
  sess = req.session;

  console.log(sess.userid);
  sql = "SELECT * from  Course where idStudent = " + 1 + " ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

//Get all the modules of a course of a certain student

app.get("/courseModules/:id", function(req, res) {
  sess = req.session;
  var paramid = req.param("id");
  console.log(sess.userid);
  sql = "SELECT * from  Module where idCourse = " + paramid + " ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

//Details about an specific module

app.get("/currentModule/:id", function(req, res) {
  sess = req.session;
  var paramid = req.param("id");
  console.log(sess.userid);
  sql = "SELECT * from  Module where idModule = " + paramid + " ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

  });

});

//Get all definitions

app.get("/definitions", function(req, res) {
  sess = req.session;
  var paramid = req.param("id");
  console.log(sess.userid);
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


app.get("/activities/:id", function(req, res) {
  sess = req.session;
  var paramid = req.param("id");
  console.log(sess.userid);
  sql = "SELECT * from  ACTIVITY where idModule = " + paramid + " ";
  connection.query(sql, function(err, records) {
    // Do something
    console.log("Datos al consultar: "+records);

    return res.send(records);


    if (err) {
      return res.serverError(err);
    }

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
  ACTIVITY.modificarActividad(id, req.body.idStudent, ACTIVITY.nameActivity, ACTIVITY.placeActivity, ACTIVITY.startDate, ACTIVITY.endDate,  ACTIVITY.typeActivity, ACTIVITY.frecuency, req.body.grade );
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

app.post('/login', function(req, res, next) {
  sess = req.session;
  var flag = true;
  console.log("BODY", req.body);

  if (req.body.email && req.body.password) {

    sql = "SELECT * from student";
    connection.query(sql, function(err, rows, fields) {
      //connection.end();
      if (!err) {
        //  res.send('User added to database with ID: ' + rows);
        for (var i = 0; i < rows.length; i++) {
          if (rows[i].email == req.body.email && rows[i].password == req.body.password) {
            console.log('idStudent: ', rows[i].idStudent);
            currentStudent = rows[i].idStudent;
            sess.userid = rows[i].idStudent;
            res.send({idStudent: sess.userid, redirect: '/dia'});
          }

        }

      } else {
        console.log('Error while performing Query.');
      }

    });
    // Already logged in.
  } else {
    res.redirect('/login');

  }

});

app.get('/logout', function(req, res, next) {
  //  res.view("/presentacion");
  req.session.destroy(function(err) {
    if(err) {
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
  res.send({redirect: '/inicio-sesion'});
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
  res.send("Usuario con id "+id+" modificado");
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
  sql = "DELETE FROM activity where idStudent = "+ id;
  connection.query(sql, function(err, result) {
    if (err)
      throw err;
      //res.send("Created "+JSON.stringify(result));
    }
  );
  //sess = req.session;
  STUDENT.deleteAccount(id);
  //res.send("User deleted");
  res.send({redirect: '/actividad'});
});

/************** DAY CALENDAR ******+*/
app.use(express.static(__dirname + '/public'));

app.get('/dia', function(req, res) {
  sess = req.session;
  res.sendFile(path.join(__dirname + '/dia.html'));
  console.log(sess.userid);
  //__dirname : It will resolve to your project folder.
});

app.get('/activities', function(req, res) {
  //STUDENT.checkAccount(5204);

  res.send('Activities: ' + ACTIVITY.getAllActivities()[0].place);
  console.log(ACTIVITY.getAllActivities());

});

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
      sql = "UPDATE Student SET nameStu = '"+n+"', email='"+e+"', password = '"+p+"', semester = '"+s+"', career = '"+c+"' WHERE idStudent = "+id;
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          console.log('Estudiante con id '+id+" modificado");
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
        }
      );
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
      sql = "UPDATE activity SET grade = "+g+" WHERE idActivity = "+id+" order by grade LIMIT 1";
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          console.log('Actividad con id '+id+" modificado");
          return true;

        } else {
          console.log('Error while performing Query.');
          return false;
        }

      });
    },

    modificarActividad: function(id, idS, n, p, s, e, t, f, g) {
      console.log("Modiifcando actividad");
      sql = "UPDATE activity SET idStudent= '"+idS+"', nameAct = '"+n+"', place='"+p+"', startDate = '"+s+"', endDate = '"+e+"', type = '"+t+"', frecuency = '"+f+"', grade = '"+g+"' WHERE idActivity = "+id;
      connection.query(sql, function(err, rows, fields) {
        //connection.end();
        if (!err) {
          //  res.send('User added to database with ID: ' + rows);
          console.log('Actividad con id '+id+" modificado");
          return true;

        } else {
          console.log('Error while performing Query.');
          return false;
        }

      });
    },

    registerActivity: function(id, n, p, s, e, t, f) {

      sql = "INSERT INTO activity VALUES (" + activityID + ", " + id + ", '" + n + "','" + p + "','" + s + "','" + e + "','" + t + "','" + f + "', "+ 0 +")";
      console.log(sql);
      connection.query(sql, function(err, result) {
        if (err)
          throw err;
          //res.send("Created "+JSON.stringify(result));
          console.log("New activity inserted");
        }
      );
      activityID++;
      // ACTIVITY.counter ++;
    },

    deleteActivity: function(id) {

      sql = "delete from activity where idActivity = " + id + " ";
      connection.query(sql, function(err, result) {
        if (err)
          throw err;
          //res.send("Created "+JSON.stringify(result));
        }
      );
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

app.listen(3004, function() {
  console.log("Server running on port 3004!");
});
