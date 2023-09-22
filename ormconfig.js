// ormconfig.js
module.exports = {
  type: 'postgres',  // Database type
  host: 'localhost',  // Database host
  port: 5432,        // Database port
  username: 'root',  // Database username
  password: 'clean123',  // Database password
  database: 'cleaning_schedule_db',  // Database name

  entities: ['src/**/*.entity.ts'],

  migrations: ['src/migrations/*.ts'],

  cli: {
    migrationsDir: 'src/migrations',
  },

  synchronize: true,
  logging: true
};
