const path = require('path');
module.exports = {
  type: 'sqlite',
  database: path.join(__dirname, 'data.db'),
  entities: ['./src/entities/*.ts'],
  migrations: ['./src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
