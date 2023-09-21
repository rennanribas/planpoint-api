import { DataSource } from 'typeorm';
import ClientSeeder from './client.seeder'; 
import TeamSeeder from './team.seeder';

export const appDataSource = new DataSource({
    type: 'postgres',  // Database type
    host: 'localhost',  // Database host
    port: 5432,        // Database port
    username: 'root',  // Database username
    password: 'clean123',  // Database password
    database: 'cleaning_schedule_db',  // Database name
    entities: [__dirname + '/../**/*.entity{.ts,.js}']
 });

 const main = async () => {
    console.time('main');
    console.log('Iniciando conexão com banco de dados...');
    await appDataSource.initialize();

    console.log('Seeding clients...');
    await ClientSeeder.run(appDataSource);

    console.log('Seeding teams...');
    await TeamSeeder.run(appDataSource);

    console.log('Seeding complete!');
    await appDataSource.close();
    console.timeEnd('main');
};

main().catch(err => {
    console.error(err);
    process.exit(1);
});