import knex from'knex';
import knexFile from'../knexfile.js';

export default knex(knexFile.development);

