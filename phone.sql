SET NAMES UTF8;
DROP DATABASE IF EXISTS phone;
CREATE DATABASE phone CHARSET=UTF8;
USE phone;

#用户登录
CREATE TABLE phone_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO phone_user VALUES
(null,'dingzi','199218'),
(null,'meifei','199218');


#首页index.html


#轮播图片

CREATE TABLE banner_img(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(50)
);
INSERT INTO banner_img VALUES(null,'img/img_index/banner1.png');
INSERT INTO banner_img VALUES(null,'img/img_index/banner2.png');


#banner_list

SET NAMES GBK;
CREATE TABLE banner_list(
 bid   INT PRIMARY KEY AUTO_INCREMENT,
 pic  VARCHAR(50),
 bname  VARCHAR(20),
 btitle VARCHAR(50)
);

INSERT INTO banner_list VALUES(null,'img/img_index/banner01.png','配件周边','开售提醒&nbsp参与抽奖');
INSERT INTO banner_list VALUES(null,'img/img_index/banner02.png','热门产品','周一上午10:10限量开抢');
INSERT INTO banner_list VALUES(null,'img/img_index/banner03.png','线下聚会','来自五湖四海 志趣相投');
INSERT INTO banner_list VALUES(null,'img/img_index/banner04.png','最新活动','拥抱大海&nbsp春暖花开');

#热门商品

CREATE TABLE r_product(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    rpic VARCHAR(50),
    rtxt1 VARCHAR(50),
    rtxt11 VARCHAR(50),
    rtxt2 DECIMAL(10,2),
    rtxt3 VARCHAR(50)
);

INSERT INTO r_product VALUES
(null,'img/img_index/thumb01.jpg','坚果Pro','','1499.00元','查看详情'),
(null,'img/img_index/thumb02.jpg','矩形孔入耳式耳机','','149.00元','查看详情'),
(null,'img/img_index/thumb03.jpg','车载式充电器','铝合金机身 智能调节','249.00元','查看详情'),
(null,'img/img_index/thumb04.jpg','官方T恤','100%进口 SUMPIMA棉','149.00元','查看详情'),
(null,'img/img_index/thumb05.jpg','入耳式耳机','卓越发音 三按键线控','199.00元','查看详情'),
(null,'img/img_index/thumb06.jpg','钢化玻璃膜','','49.00元','查看详情'),
(null,'img/img_index/thumb07.jpg','智能蓝牙无线降噪耳机','手势触控 强力降噪','199.00元','查看详情'),
(null,'img/img_index/thumb08.jpg','快充移动电源','双向快充 轻盈便携','128.00元','查看详情'),
(null,'img/img_index/thumb09.jpg','影子无线耳机','这是耳机的方式应该是，像你一样好。...','399.00元','查看详情');

#官方精选
CREATE TABLE o_product(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    opic VARCHAR(50),
    otxt1 VARCHAR(50),
    otxt11 VARCHAR(50),
    otxt2 DECIMAL(10,2),
    otxt3 VARCHAR(50)
);

INSERT INTO o_product VALUES
(null,'img/img_index/selection.png','','','',''),
(null,'img/img_index/thumb01.jpg','坚果Pro','','1499.00元','查看详情'),
(null,'img/img_index/thumb02.jpg','矩形孔入耳式耳机','','149.00元','查看详情'),
(null,'img/img_index/thumb03.jpg','车载式充电器','铝合金机身 智能调节','249.00元','查看详情'),
(null,'img/img_index/thumb04.jpg','官方T恤','100%进口 SUMPIMA棉','149.00元','查看详情'),
(null,'img/img_index/thumb05.jpg','入耳式耳机','卓越发音 三按键线控','199.00元','查看详情'),
(null,'img/img_index/thumb06.jpg','钢化玻璃膜','','49.00元','查看详情');


#应用
CREATE TABLE app_list(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    apic VARCHAR(50),
    atxt1 VARCHAR(20),
    atxt2 VARCHAR(20),
    atxt3 VARCHAR(20)
);

INSERT INTO app_list VALUES
(null,'img/img_index/app1.jpg','One','一个就够了','进一步了解&nbsp＞'),
(null,'img/img_index/app2.png','LIVE','看你最喜爱的','进一步了解&nbsp＞'),
(null,'img/img_index/app3.jpg','Ideas','人脑每天产生6000个念头，如何存储','进一步了解&nbsp＞'),
(null,'img/img_index/app4.png','OS','更新到最安全','进一步了解&nbsp＞');

#科技动态
CREATE TABLE science_list(
    sid  INT PRIMARY KEY AUTO_INCREMENT,
    spic VARCHAR(50),
    stxt1 VARCHAR(50),
    stxt2 VARCHAR(50),
    stxt3 VARCHAR(50)
);

INSERT INTO science_list VALUES
(null,'img/img_index/sci1.jpg','1MORE<<大师对话·中国声>>主题发布会','价格更低：网站建设公司自行开发系统，一般的开发成本都会在千元以上，就算网站建设公.....','阅读更多&nbsp＞'),
(null,'img/img_index/sci2.jpg','无人机的下一个时代 将由“群”定义','当你想到无人机的时候你会觉得它是什么样子的?一个单独的遥控玩具，有螺旋桨，还是一......','阅读更多&nbsp＞'),
(null,'img/img_index/sci3.jpg','官方最新MX59-365头戴式耳机发布','5月26日消息，今天，传闻已久的华为荣耀9现身工信部，关于荣耀9什么时候发布以及.....','阅读更多&nbsp＞'),
(null,'img/img_index/sci4.jpg','如何让你心爱的耳机焕发青春','越来越多的人选择耳机来作为音响发烧的一个手段和娱乐项目。而且这东西用途很广，可以.....','阅读更多&nbsp＞');



#hot1.html

#热门商品详情头部
CREATE TABLE hot_box(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    bpic VARCHAR(50),
    bname VARCHAR(20),
    bprice DECIMAL(10,2),
    bcount BIGINT,
    bocount INT,
    lcount INT
);

INSERT INTO hot_box VALUES
(null,'img/img_hot/hot1-1-mid.jpg','坚果Pro','1499.00','99',6,4),
(null,'img/img_hot/hot2-1-mid.jpg','矩形孔入耳式耳机','149.00','9999',2,7),
(null,'img/img_hot/hot3-1-mid.jpg','车载式充电器','249.00','99999',2,4),
(null,'img/img_hot/hot4-1-mid.jpg','官方T恤','149.00','199',3,7),
(null,'img/img_hot/hot5-1-mid.jpg','入耳式耳机','149.00','9999',2,6),
(null,'img/img_hot/hot6-1-mid.jpg','钢化玻璃','49.00','9999',3,2),
(null,'img/img_hot/hot7-1-mid.jpg','智能蓝牙无线降噪耳机','1149.00','999',4,7),
(null,'img/img_hot/hot8-1-mid.jpg','快充移动电源','1258.00','9999',5,5),
(null,'img/img_hot/hot9-1-mid.jpg','影子无线耳机','149.00','9999',4,6);


#右侧列表
CREATE TABLE hot_aside(
     aid INT PRIMARY KEY AUTO_INCREMENT,
        apic VARCHAR(50),
        atxt1 VARCHAR(50),
        atxt2 DECIMAL(10,2)
);

INSERT INTO hot_aside VALUES
(null,'img/img_hot/hot1-1-aside.jpg','坚果Pro','149.00'),
(null,'img/img_hot/hot1-2-aside.jpg','矩形孔入耳式耳机','149.00'),
(null,'img/img_hot/hot1-3-aside.jpg','车载充电器','249.00'),
(null,'img/img_hot/hot1-4-aside.jpg','官方T恤','149.00');



