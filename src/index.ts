import app from './app';
// import 'dotenv';

const server = app.listen(process.env.PORT, () => console.log(
  `Server is running on PORT: ${process.env.PORT}`,
));

export default server;
