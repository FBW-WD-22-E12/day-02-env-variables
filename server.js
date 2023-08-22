console.log("The app is running");

const SECRET_KEY = "password303949234";

process.env.SECRET_KEY = SECRET_KEY;
process.env.PASSWORD = "asdaldklsad";
process.env.HOST = "192.168.1.2";

console.log(process.env);
