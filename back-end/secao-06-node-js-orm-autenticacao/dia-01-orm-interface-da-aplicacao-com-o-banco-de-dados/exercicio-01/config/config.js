const config = {
  username: 'root',
  password: 'senha-mysql',
  database: 'jwt_exercise_dev',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};