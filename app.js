const express=require('express');
const app =express();


//配置路由规则
app.get('/',(req,res)=>{
	res.send('hello world!');
});

app.get('/hello',(req,res)={
	res.send('hello express!!!');
});



app.get('/develop',(req,res)={
	res.send('当前位于develop分支');
});



//端口监听
app.listen(3000,()=>{
	console.log('Service running at port 3000...');
});
