// ormconfig.js
module.exports = {
  type: 'postgres',  // Database type
  host: 'localhost',  // Database host
  port: 5432,        // Database port
  username: 'root',  // Database username
  password: 'clean123',  // Database password
  database: 'cleaning_schedule_db',  // Database name

  // Path to your entities. Adjust as necessary.
  entities: ['src/**/*.entity.ts'],

  // Path to your migrations. Adjust if you have a migrations folder.
  migrations: ['src/migrations/*.ts'],

  // If you're using .ts for migrations, or if you're using .js in production, adjust this.
  cli: {
    migrationsDir: 'src/migrations',
  },

  // Synchronize should be turned off in production for safety!
  synchronize: true,
  logging: true
};
