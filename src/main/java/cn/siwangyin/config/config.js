var ioc = {
	dataSource : {
        type : "com.alibaba.druid.pool.DruidDataSource",
        events : {
            create : "init",
            depose : 'close'
        },
        fields : {
            url : "jdbc:mysql://127.0.0.1:3306/screenprinting?serverTimezone=UTC",
            username : "root",
            password : "root",
            testWhileIdle : true,
            validationQuery : "select 1" ,
            maxActive : 1000
        }
    },
    dao : {
        type : "org.nutz.dao.impl.NutDao",
        args : [{refer:"dataSource"}]
    },
    shopService : {
    	type : "cn.siwangyin.service.impl.ShopServiceImpl"
    }
}