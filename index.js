const express = require('express');
const db = require('./mydatabase');
var fs = require('fs');


db.connect();
const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));

require("dotenv").config();


app.use('/client',
    express.static('public'));
app.use('/admin',
    express.static('public'))

const PORT = 3000;
app.listen(PORT, () =>
    console.log(`server started at  '${PORT}`)
);

const router = express.Router();

app.use('/', router);


router.get('/form',(req,res,next)=>{
    res.render('form',{title:'form'})
    db.query('select * from users_data;',
    (error, result, fields) => {
       console.log(result[0].enrollment_no);
    });
});

router.post('/landing', (req,res) => {
    console.log("Hello");
    var first_name = req.body.first_name;
    var last_name=req.body.last_name;
    var enrollment_no=req.body.enrollment_no;
    var Branch=req.body.Branch;
    var IITR_Email=req.body.IITR_Email;
    var Item_name=req.body.Item_name;
    var Item_Category=req.body.Item_Category;
    var Price=req.body.Price;
    var picture=req.body.picture;
    var Hostel_Details=req.body.Hostel_Details;
    var Year_of_Passing=req.body.Year_of_Passing;
    var Course=req.body.Course;
    var Contact_no=req.body.Contact_no;
    console.log(Year_of_Passing);
    var Insta_Handle=req.body.Insta_Handle;
    var Description=req.body.Description;
    var SubCategory=req.body.SubCategory;
    console.log(`INSERT INTO users_data (first_name,last_name,enrollment_no,SubCategory, Branch,IITR_Email,Item_name,Item_Category,Price,picture, Hostel_Details, Year_of_Passing,Course,Contact_no,Insta_Handle,Description)   VALUES ( '${first_name }', '${last_name }', ${enrollment_no },'${SubCategory}',  '${Branch }', '${IITR_Email }', '${Item_name }', '${Item_Category }', ${Price }, '${picture }',  '${Hostel_Details }', ${Year_of_Passing }, '${Course }', ${Contact_no }, '${Insta_Handle }', '${Description}');`);
    db.query(`INSERT INTO users_data (first_name,last_name,enrollment_no,SubCategory, Branch,IITR_Email,Item_name,Item_Category,Price,picture, Hostel_Details, Year_of_Passing,Course,Contact_no,Insta_Handle,Description)   VALUES ( '${first_name }', '${last_name }', ${enrollment_no },'${SubCategory}',  '${Branch }', '${IITR_Email }', '${Item_name }', '${Item_Category }', ${Price }, '${picture }',  '${Hostel_Details }', ${Year_of_Passing }, '${Course }', ${Contact_no }, '${Insta_Handle }', '${Description}');`,                    
    (error, result, field) => {
        if(error){
            console.log("ERROR ", error);
        } else {
            console.log("Sent Request");
        }
    })
    res.redirect('/categorycover');
})

router.get('/categorycover',(req,res,next)=>{
    
    db.query(`select * from users_data where  Item_Category='${req.body.Item_Category}';`,
    (error, result, fields) => {
        res.render('categorycover',{title:"data"})
     });
   
})
router.get('/category',(req,res,next)=>{
res.render('category',{title:"category"})
})
router.get('/',(req,res,next)=>{
    res.render('index',{title:'data'})
 
});
router.get('/test2', (req, res)=>{
    var output = db.query('Select * from users_data;', (error, result, field) =>{
        if(error) {
            console.log("ERROR : ", error);
        }
    });
    //console.log(output);
    res.sendStatus(200);
})