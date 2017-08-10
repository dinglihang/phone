const http = require("http");
const express = require("express");
const qs = require("querystring");
const mysql = require("mysql");
//3: 创建服务器并且监听端口 8081
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"phone",
    port:3306,
    connectionLimit:25
});

//3: 创建服务器并且监听端口 8081
var app = express();
var server = http.createServer(app);
server.listen(8086);
//4:使用nodejs中间件向客户端直接返回静态内容
//public
app.use(express.static("public"));


//模块一：用户注册和登录


//功能一 用户注册
app.post("/reg.do",(req,res)=>{
    //为request对象绑定事件data
    req.on("data",(data)=>{
        //2:获取用户参数:用户名和密码
        var str = data.toString();
        var obj = qs.parse(str);
        var u = obj.uname;
        var p = obj.upwd;
        //:从连接池中获取连接
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            //创建SQL语句并且发送SQL
            var sql="INSERT INTO phone_user VALUES(null,?,?)";
            conn.query(sql,[u,p],(err,result)=>{
                if(err) throw err;
                console.log(result);
                if(result.affectedRows>0)
                    res.json({code:1,msg:"添加成功"});
                else
                    res.json({code:-1,msg:"添加失败"});
                conn.release();
            })
        })
    })
});



//功能模块二：验证用户名是否已存在
app.get("/existsuname",(req,res)=>{
    var u=req.query.uname;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM phone_user WHERE uname=?";
        conn.query(sql,[u],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.json({code:1,msg:"用户名已存在"});
            }else{
                res.json({code:-1,msg:"用户名可用"});
            }
            conn.release();
        })
    })
});

//功能点三:用户登录
//功能模块三:用户登录
app.post("/login.do",(req,res)=>{
    //1:获取用户登录时用户名与密码
    req.on("data",(data)=>{
        var str = data.toString();
        var obj = qs.parse(str);
        var u = obj.uname;
        var p = obj.upwd;
        //2:获取数据库连接
        //3:发送一条SQL语句
        pool.getConnection((err,conn)=>{
            //4:并且获取返回结果
            var sql = "SELECT * FROM phone_user";
            sql += " WHERE uname=? AND upwd=?";
            conn.query(sql,[u,p],(err,result)=>{
               console.log(result);
                if(result.length<1){
                    res.json({code:-1,msg:"用户名或密码有误"})
                }else{
                    res.json({code:1,msg:"登录成功",uid:result[0].uid,uname:result[0].uname,upwd:result[0].upwd});
                }
                conn.release();
            });

        });
    });

});



//模块二：首页


//功能点一：bannner图片轮播
app.get("/banner",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM banner_img";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
           conn.release();
        })
    })
});

//功能点二：banner_list
app.get("/banner_list",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM banner_list";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});

//功能点三：动态添加热门商品
app.get("/product_hot",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM r_product";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});

//功能点四：动态添加官方精选
app.get("/selection",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM o_product";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});


//功能点五：动态添加应用
app.get("/app",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM app_list";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});


//功能点六：动态添加科技动态
app.get("/science",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM science_list";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});



//模块二：热门商品详情列表

//功能点一：热门商品

app.get('/hot_box',(req,res)=>{
    var n=req.query.num;
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM hot_box WHERE bid=?";
        conn.query(sql,[n],(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});

//功能点二：热门商品右侧列表

app.get('/hot_aside',(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql="SELECT * FROM hot_aside";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});

