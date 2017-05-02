const express=require('express');
const app =express();


//配置路由规则
app.get('/',(req,res)=>{
	res.send('hello world!');
});




//端口监听
app.listen(3000,()=>{
	console.log('Service running at port 3000...');
});
